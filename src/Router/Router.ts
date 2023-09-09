import { NextFunction, Request, Response, Router as ExpressRouter } from "express";
import { statSync } from "node:fs";
import { basename, extname, join, resolve } from "node:path";

import { IEndpointMetadata, IRouteMetadata } from "@/Documentation/Definition/RouteMetadata";
import MetadataStore from "@/Documentation/MetadataStore";
import { AuthContextAPI, ContextAPI, getPath, ResponseValue, Route } from "@/Router";
import MimeType from "@/Router/MimeType";
import { HTTPMiddleware, HTTPStatus, HTTPVerb } from "@/Server";
import Config from "@/System/Config";
import { getDefaultLogger } from "@/System/Logger";
import { getFolderContents } from "@/Utils/FileSystem";

/**
 * Interface used to describe the routes getModuleFolder structure of your application.
 */
interface IRouteStruct {
  /**
   * The name of the section/getModuleFolder we want to import.
   */
  section: string;
  /**
   * The routes available in the current section.
   */
  routes?: Array<string>;
  /**
   * A list with children structures.
   */
  children?: Array<IRouteStruct>;
}

/**
 * Class used to define the Router base of the application.
 *
 * Inside this class the magic happens:
 * - All the endpoints are registered under their specific path.
 * - All routes are loaded where and when they should.
 */
export default class Router {
  /**
   * The list with routes we want to register.
   */
  protected _routes: Array<Route> = [];

  protected _extraMiddlewares: Array<HTTPMiddleware> = [];

  /**
   * The base router that we are going to use.
   */
  protected _router: ExpressRouter = ExpressRouter();

  /**
   * The getter for the base router we will use.
   */
  public get router(): ExpressRouter {
    return this._router;
  }

  /**
   * Register the routes under the given path.
   *
   * @param routesPath The path from which we will import routes.
   */
  public async register(routesPath: string): Promise<void> {
    const routesStruct = await this.fetchRoutes(routesPath);
    routesStruct.section = "";
    await this.registerRoutes(routesPath, routesStruct);
  }

  /**
   * Method used to manually register a route in the application.
   *
   * @param route The route instance you want registered.
   */
  public add(route: Route): void {
    if (MetadataStore.instance.route.isDocs(route.constructor.name) && !Config.boolean("docs.expose")) {
      getDefaultLogger().debug(`Documentation has been disabled. The route: ${ route.constructor.name } won't be loaded.`);
      return;
    }

    this._routes.push(route);
  }

  /**
   * Method used to parse the given route metadata and register all the endpoints under that
   * router.
   *
   * @param route The route metadata we want to load.
   */
  public parseRoute(route: IRouteMetadata) {
    const basePath = route.basePath.filter((bp) => bp.length).join("/");
    for (const endpoint of Object.values(route.endpoints)) {
      this.loadEndpoint(basePath, endpoint);
    }
  }

  /**
   * Add extra middlewares to be run before the actual code of each endpoint.
   *
   * @param middlewares A list with middlewares to be ran.
   */
  public preRunMiddleware(...middlewares: Array<HTTPMiddleware>): void {
    this._extraMiddlewares.push(...middlewares);
  }

  /**
   * Method used to register endpoints in the router under a given base path and with the
   * given endpoint metadata.
   *
   * @param basePath The base path under which the application registers the endpoint.
   * @param endpoint The endpoint metadata you need to be registered.
   */
  protected loadEndpoint(basePath: string, endpoint: IEndpointMetadata) {
    const path = getPath(basePath, endpoint.path);
    getDefaultLogger().debug(`[REGISTER] ${ endpoint.verb.toUpperCase() }: ${ path }`);

    this.router[endpoint.verb](
      path,
      ...endpoint.middlewares,
      ...(this._extraMiddlewares || []),
      async function (req: Request, res: Response, next: NextFunction) {
        try {
          const original: ResponseValue<any> =
            (await endpoint.callback(
              new ContextAPI<any>(req, res, endpoint.passRequest, endpoint.verb === HTTPVerb.GET),
              new AuthContextAPI(req, req.authContext || {}),
            )) || HTTPStatus.NO_CONTENT;

          let status = HTTPStatus.OK;
          let to = "";
          if (typeof original === "object" && "statusCode" in original) {
            status = (original?.statusCode || HTTPStatus.OK) as HTTPStatus;
            to = original.body;
          } else if (Number.isInteger(original) && Object.values(HTTPStatus).indexOf(original as HTTPStatus) >= 0) {
            status = original as HTTPStatus;
          }

          if (status === HTTPStatus.REDIRECT) {
            if (to) {
              res.redirect(to);
            }
            return;
          }

          if (status === HTTPStatus.NO_CONTENT || status === HTTPStatus.ACCEPTED) {
            res.sendStatus(status);
            return;
          }

          if (typeof original === "object" && "file" in original && original.file) {
            res.contentType((original?.contentType || MimeType.PLAIN_TEXT) as string);

            if ("fileName" in original && original.fileName) {
              res.download(original?.body as string, original.fileName as string);
              return;
            }
            res.download(original?.body as string);
            return;
          }

          if (typeof original === "object" && "contentType" in original) {
            res.contentType((original?.contentType || MimeType.PLAIN_TEXT) as string);
            res.send(original?.body as string);
            return;
          }

          res.status(status).json(original);
        } catch (e) {
          next(e);
        }
      },
    );
  }

  /**
   * The method used to register the routes in a path. It will make recursive calls
   * to itself if we have other folders inside the current path.
   *
   * @param basePath The base getModuleFolder path from where we read.
   * @param structure The current parent structure from where we read the route structure.
   */
  private async registerRoutes(basePath: string, structure: IRouteStruct): Promise<void> {
    getDefaultLogger().info(`[REGISTER] Routes in section: ${ structure.section || "DEFAULT" }`);
    const sectionPath = join(basePath, structure.section);
    for (const routeFile of structure.routes) {
      const modulePath = resolve(sectionPath, routeFile);
      try {
        let ClassModule = await import(modulePath);
        ClassModule = ClassModule.default || ClassModule;
        if (!ClassModule || (typeof ClassModule === "function" && !ClassModule.prototype)) {
          continue;
        }

        const route: Route = new ClassModule();
        if (MetadataStore.instance.route.isDocs(route.constructor.name) && !Config.boolean("docs.expose")) {
          getDefaultLogger().debug(`Documentation has been disabled. The route: ${ route.constructor.name } won't be loaded.`);
          continue;
        }
        this._routes.push(route);
      } catch (err) {
        /* Since we might register folders that have API class defined in them
           and since they are ES6+ Classes, we cannot call them directly. */
        getDefaultLogger().error(`Unable to register the route exposed by '${ modulePath }'.`);
        getDefaultLogger().debug(err.message);
        getDefaultLogger().debug(err.stack);
      }
    }

    for (const child of structure.children) {
      await this.registerRoutes(sectionPath, child);
    }
  }

  /**
   * Returns the route structure from the current getModuleFolder, together with children folders.
   *
   * @param basePath The base path from where we read the structure.
   */
  private async fetchRoutes(basePath: string): Promise<IRouteStruct> {
    const files = await getFolderContents(basePath);
    const routes = files.filter((file) => [ ".ts", ".js", ".tsx", ".jsx" ].indexOf(extname(file)) >= 0);

    const folders = files
      .filter((file) => [ ".ts", ".js", ".tsx", ".jsx" ].indexOf(extname(file)) < 0)
      .map((file) => join(basePath, file))
      .filter((file) => statSync(file).isDirectory());

    let children: IRouteStruct[] = [];
    for (const folder of folders) {
      children.push(await this.fetchRoutes(folder));
    }
    children = children.filter((child) => child.children.length > 0 || child.routes.length > 0);

    return {
      section: basename(basePath),
      routes,
      children,
    };
  }
}
