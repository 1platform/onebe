import express, { Application } from "express";
import helmet from "helmet";
import { Server } from "node:http";

import Middlewares from "@/Middlewares";
import ErrorHandlerMiddleware from "@/Middlewares/ErrorHandlerMiddleware";
import IMiddleware from "@/Middlewares/IMiddleware";
import { Router } from "@/Router";
import Config from "@/System/Config";
import { getDefaultLogger } from "@/System/Logger";

/**
 * The HTTP service used to create the HTTP server.
 *
 * Through this service you can start an HTTP server using Express, secured with
 * Helmet and having some default Middlewares/Plugins loaded in the application.
 */
export default class HTTP {
  /**
   * A list of middlewares that are loaded in your application.
   */
  private _middlewares: Array<IMiddleware> = [ ...Middlewares ];
  /**
   * Express instance that is used for the HTTP server.
   */
  private readonly _app: Application;
  /**
   * The Node.js HTTP Server instance.
   */
  private readonly _http: Server;

  /**
   * HTTP Class constructor.
   */
  public constructor() {
    this._app = express();
    this._http = new Server(this._app);

    this._app.enable("trust proxy");

    this._app.set("be_version", app.app.version);
    this.setLocal("be_version", app.app.version);
    this._app.set("be_engine", app.app.name);
    this.setLocal("be_engine", app.app.name);
    this._app.set("title", app.app.appName);
    this.setLocal("appTitle", app.app.appName);
    this._app.set("version", app.app.appVersion);
    this.setLocal("version", app.app.appVersion);
    this.setLocal("description", app.app.appDescription);
    this.setLocal("appURL", app.app.appURL);

    this._app.use(
      helmet({
        contentSecurityPolicy: false,
        crossOriginEmbedderPolicy: false,
      }),
    );
  }

  /**
   * Getter for the Express instance.
   */
  public get app(): Application {
    return this._app;
  }

  /**
   * Getter for the HTTP server.
   */
  public get http(): Server {
    return this._http;
  }

  /**
   * Getter for the port used to serve the HTTP server.
   */
  public get port(): number {
    return Config.number("http.port", 7200);
  }

  /**
   * Getter for the Host IP used to serve the HTTP server.
   */
  public get host(): string {
    return Config.string("http.listen", "127.0.0.1");
  }

  /**
   * Set a local variable on the express application.
   *
   * @param variable The variable name.
   * @param value The value of the variable.
   */
  public setLocal(variable: string, value: any): void {
    this._app.locals[variable] = value;
  }

  /**
   * Method used to start the HTTP server created by the service.
   */
  public start(): Promise<void> {
    return new Promise((resolve) => {
      for (const middleware of this._middlewares) {
        middleware.use(this._app);
      }

      this._app.use(Router.router);
      new ErrorHandlerMiddleware().use(this._app);

      const { host, port } = this;

      this._http.listen(port, host, () => {
        getDefaultLogger().info(`Application started: http://${ host }:${ port }`);
        resolve();
      });
    });
  }

  /**
   * Attach a middleware or a list of middlewares to the express application.
   *
   * @param middleware A middleware or a list of middlewares you want to attach.
   */
  public use(middleware: IMiddleware | IMiddleware[]): void {
    if (!Array.isArray(middleware)) {
      middleware = [ middleware ];
    }

    this._middlewares.push(...middleware);
  }
}
