import { Router as ExpressRouter } from "express";
import { readdirSync, statSync } from "fs";
import { basename, extname, join, resolve } from "path";
import DefaultLogger from "../System/Logger";
import Route from "./Route";

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
    DefaultLogger.info(
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
        DefaultLogger.error(
          `Unable to register the controller exposed by '${ modulePath }'.`
        );
        DefaultLogger.debug(err.message);
        DefaultLogger.debug(err.stack);
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

global.Router = Router;
export default Router;
