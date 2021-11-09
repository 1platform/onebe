import { Router as ExpressRouter } from "express";
import { readdirSync, statSync } from "fs";
import { basename, extname, join, resolve } from "path";
import DefaultLogger from "../System/Logger";
import Route from "./Route";

interface IControllerStruct {
  section: string;
  controllers?: Array<string>;
  children?: Array<IControllerStruct>;
}

export class RouterBase {
  protected _controllers: Array<Route> = [];

  protected _router: ExpressRouter = ExpressRouter();

  public get router(): ExpressRouter {
    return this._router;
  }

  public async register(controllersPath: string): Promise<void> {
    const controllersStruct = this.fetchControllers(controllersPath);
    controllersStruct.section = "";
    await this.registerControllers(controllersPath, controllersStruct);
  }

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

const Router = new RouterBase();

export default Router;
