import {
  NextFunction,
  Request,
  Response,
  Router as ExpressRouter,
} from "express";
import { readdirSync, statSync } from "fs";
import { basename, extname, join, resolve } from "path";
import { getDefaultLogger } from "../System/Logger";
import Route from "./Route";
import {
  IEndpointMetadata,
  IRouteMetadata,
} from "../Documentation/Definition/RouteMetadata";
import { ResponseValue } from "./RouteTypes";
import ContextAPI from "../Documentation/Helpers/ContextAPI";
import HTTPVerb from "../HTTP/HTTPVerb";
import AuthContextAPI from "../Documentation/Helpers/AuthContextAPI";
import HTTPStatus from "../HTTP/HTTPStatus";

/**
 * The structure of the folders containing the controllers of our application.
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
   * Register the controllers in the given path.
   *
   * @param controllersPath The path from which we will import controllers.
   */
  public async register(controllersPath: string): Promise<void> {
    const controllersStruct = this.fetchControllers(controllersPath);
    controllersStruct.section = "";
    await this.registerControllers(controllersPath, controllersStruct);
  }

  public parseRoute(route: IRouteMetadata) {
    const basePath = route.basePath.filter((bp) => bp).join("/");
    for (const endpoint of Object.values(route.endpoints)) {
      this.loadEndpoint(basePath, endpoint);
    }
  }

  protected getPath(basePath: string, path: string): string {
    const newPath = `/${ basePath }/${ path }`.replace(
      /(https?:\/\/)|(\/)+/g,
      "$1$2"
    );

    return newPath.lastIndexOf("/") === newPath.length - 1 && newPath !== "/"
      ? newPath.substring(0, newPath.length - 1)
      : newPath;
  }

  protected loadEndpoint(basePath: string, endpoint: IEndpointMetadata) {
    const path = this.getPath(basePath, endpoint.path);
    getDefaultLogger().debug(
      `[REGISTER] ${ endpoint.verb.toUpperCase() }: ${ path }`
    );

    this.router[endpoint.verb](
      path,
      ...endpoint.middlewares,
      async function (req: Request, res: Response, next: NextFunction) {
        try {
          const original = await endpoint.callback(
            new ContextAPI<any>(
              req,
              res,
              endpoint.passRequest,
              endpoint.verb === HTTPVerb.GET
            ),
            new AuthContextAPI(req, req.authContext || {})
          );

          let status = HTTPStatus.OK;
          if (typeof original === "object" && "statusCode" in original) {
            status = (original?.statusCode || HTTPStatus.OK) as HTTPStatus;
          } else if (
            Number.isInteger(original) &&
            Object.values(HTTPStatus).indexOf(original as HTTPStatus) >= 0
          ) {
            status = original as HTTPStatus;
          }

          if (
            status === HTTPStatus.NO_CONTENT ||
            status === HTTPStatus.ACCEPTED
          ) {
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
      }
    );
  }

  /**
   * The method used to register the controllers in a path. It will make recursive calls
   * to itself if we have other folders inside the current path.
   *
   * @param basePath The base folder path from where we read.
   * @param structure The current parent structure from where we read the controller structure.
   */
  private async registerControllers(
    basePath: string,
    structure: IControllerStruct
  ): Promise<void> {
    getDefaultLogger().info(
      `[REGISTER] Controllers in section: ${ structure.section || "DEFAULT" }`
    );
    const sectionPath = join(basePath, structure.section);
    for (const controllerFile of structure.controllers) {
      const modulePath = resolve(sectionPath, controllerFile);
      try {
        let ClassModule = await import(modulePath);
        ClassModule = ClassModule.default || ClassModule;
        if (
          !ClassModule ||
          (typeof ClassModule === "function" && !ClassModule.prototype)
        ) {
          continue;
        }

        const controller: Route = new ClassModule();
        this._controllers.push(controller);
      } catch (err) {
        /* Since we might register folders that have API class defined in them
           and since they are ES6+ Classes, we cannot call them directly. */
        getDefaultLogger().error(
          `Unable to register the controller exposed by '${ modulePath }'.`
        );
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
    const controllers = files.filter(
      (file) => [ ".ts", ".js", ".tsx", ".jsx" ].indexOf(extname(file)) >= 0
    );

    const folders = files
      .filter(
        (file) => [ ".ts", ".js", ".tsx", ".jsx" ].indexOf(extname(file)) < 0
      )
      .map((file) => join(basePath, file))
      .filter((file) => statSync(file).isDirectory());

    const children = folders
      .map((folder) => this.fetchControllers(folder))
      .filter(
        (child) => child.children.length > 0 || child.controllers.length > 0
      );

    return {
      section: basename(basePath),
      controllers,
      children,
    };
  }
}

/**
 * The global default Router that we are going to use in our application.
 */
const Router = new RouterBase();

global.router = Router;
export default Router;
