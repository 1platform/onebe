import { NextFunction, Request, Response, Router as ExpressRouter } from "express";
import { readdirSync, statSync } from "fs";
import { basename, extname, join, resolve } from "path";
import { getDefaultLogger } from "../System/Logger";
import Route from "./Route";
import { IEndpointMetadata, IRouteMetadata } from "../Documentation/Definition/RouteMetadata";
import ContextAPI from "./ContextAPI";
import HTTPVerb from "../HTTP/HTTPVerb";
import AuthContextAPI from "./AuthContextAPI";
import HTTPStatus from "../HTTP/HTTPStatus";
import { getPath } from "./RouteUtils";
import MetadataStore from "../Documentation/MetadataStore";
import Config from "../System/Config";

/**
 * Interface used to describe the controllers folder structure of your application.
 */
interface IControllerStruct {
  /**
   * The name of the section/folder we want to import.
   */
  section: string;
  /**
   * The controllers available in the current section.
   */
  controllers?: Array<string>;
  /**
   * A list with children structures.
   */
  children?: Array<IControllerStruct>;
}

/**
 * Class used to define the Router base of the application.
 *
 * Inside this class the magic happens:
 * - All the endpoints are registered under their specific path.
 * - All controllers are loaded where and when they should.
 */
export class RouterBase {
  /**
   * The list with controllers we want to register.
   */
  protected _controllers: Array<Route> = [];

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
   * Register the controllers under the given path.
   *
   * @param controllersPath The path from which we will import controllers.
   */
  public async register(controllersPath: string): Promise<void> {
    const controllersStruct = this.fetchControllers(controllersPath);
    controllersStruct.section = "";
    await this.registerControllers(controllersPath, controllersStruct);
  }

  /**
   * Method used to manually register a controller in the application.
   *
   * @param controller The controller instance you want registered.
   */
  public add(controller: Route): void {
    if (MetadataStore.instance.route.isDocs(controller.constructor.name) && !Config.boolean("docs.expose")) {
      getDefaultLogger().debug(`Documentation has been disabled. The controller: ${ controller.constructor.name } won't be loaded.`);
      return;
    }

    this._controllers.push(controller);
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
   * Method used to register endpoints in the router under a given base path and with the
   * given endpoint metadata.
   *
   * @param basePath The base path under which the application registers the endpoint.
   * @param endpoint The endpoint metadata you need to be registered.
   */
  protected loadEndpoint(basePath: string, endpoint: IEndpointMetadata) {
    const path = getPath(basePath, endpoint.path);
    getDefaultLogger().debug(`[REGISTER] ${ endpoint.verb.toUpperCase() }: ${ path }`);

    this.router[endpoint.verb](path, ...endpoint.middlewares, async function (req: Request, res: Response, next: NextFunction) {
      try {
        const original = await endpoint.callback(
          new ContextAPI<any>(req, res, endpoint.passRequest, endpoint.verb === HTTPVerb.GET),
          new AuthContextAPI(req, req.authContext || {})
        );

        let status = HTTPStatus.OK;
        if (typeof original === "object" && "statusCode" in original) {
          status = (original?.statusCode || HTTPStatus.OK) as HTTPStatus;
        } else if (Number.isInteger(original) && Object.values(HTTPStatus).indexOf(original as HTTPStatus) >= 0) {
          status = original as HTTPStatus;
        }

        if (status === HTTPStatus.NO_CONTENT || status === HTTPStatus.ACCEPTED) {
          res.sendStatus(status);
          return;
        }

        if (typeof original === "object" && "file" in original) {
          res.contentType((original?.contentType || "text/plain") as string);
          res.sendFile(original?.body as string);
          return;
        }

        if (typeof original === "object" && "contentType" in original) {
          res.contentType((original?.contentType || "text/plain") as string);
          res.send(original?.body as string);
          return;
        }

        res.status(status).json(original);
      } catch (e) {
        next(e);
      }
    });
  }

  /**
   * The method used to register the controllers in a path. It will make recursive calls
   * to itself if we have other folders inside the current path.
   *
   * @param basePath The base folder path from where we read.
   * @param structure The current parent structure from where we read the controller structure.
   */
  private async registerControllers(basePath: string, structure: IControllerStruct): Promise<void> {
    getDefaultLogger().info(`[REGISTER] Controllers in section: ${ structure.section || "DEFAULT" }`);
    const sectionPath = join(basePath, structure.section);
    for (const controllerFile of structure.controllers) {
      const modulePath = resolve(sectionPath, controllerFile);
      try {
        let ClassModule = await import(modulePath);
        ClassModule = ClassModule.default || ClassModule;
        if (!ClassModule || (typeof ClassModule === "function" && !ClassModule.prototype)) {
          continue;
        }

        const controller: Route = new ClassModule();
        if (MetadataStore.instance.route.isDocs(controller.constructor.name) && !Config.boolean("docs.expose")) {
          getDefaultLogger().debug(`Documentation has been disabled. The controller: ${ controller.constructor.name } won't be loaded.`);
          continue;
        }
        this._controllers.push(controller);
      } catch (err) {
        /* Since we might register folders that have API class defined in them
           and since they are ES6+ Classes, we cannot call them directly. */
        getDefaultLogger().error(`Unable to register the controller exposed by '${ modulePath }'.`);
        getDefaultLogger().debug(err.message);
        getDefaultLogger().debug(err.stack);
      }
    }

    for (const child of structure.children) {
      await this.registerControllers(sectionPath, child);
    }
  }

  /**
   * Returns the controller structure from the current folder, together with children folders.
   *
   * @param basePath The base path from where we read the structure.
   */
  private fetchControllers(basePath: string): IControllerStruct {
    const files = readdirSync(basePath);
    const controllers = files.filter((file) => [ ".ts", ".js", ".tsx", ".jsx" ].indexOf(extname(file)) >= 0);

    const folders = files
      .filter((file) => [ ".ts", ".js", ".tsx", ".jsx" ].indexOf(extname(file)) < 0)
      .map((file) => join(basePath, file))
      .filter((file) => statSync(file).isDirectory());

    const children = folders
      .map((folder) => this.fetchControllers(folder))
      .filter((child) => child.children.length > 0 || child.controllers.length > 0);

    return {
      section: basename(basePath),
      controllers,
      children,
    };
  }
}

/**
 * The global default Router that the application is going to use.
 */
const Router = new RouterBase();

global.router = Router;
export default Router;
