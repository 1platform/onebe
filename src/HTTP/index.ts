import express, { Application } from "express";
import helmet from "helmet";
import { Server } from "http";
import app from "../App";
import Middlewares from "../Middlewares";
import ErrorHandlerMiddleware from "../Middlewares/ErrorHandlerMiddleware";
import IMiddleware from "../Middlewares/IMiddleware";
import Router from "../Router";
import Config from "../System/Config";
import DefaultLogger from "../System/Logger";

/**
 * The HTTP server handler class.
 */
export default class HTTP {
  /**
   * A list of middlewares that we load in our application.
   */
  private _middlewares: Array<IMiddleware> = [
    ...Middlewares
  ];
  /**
   * The Express application instance.
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
      })
    );
  }

  /**
   * Express application getter.
   */
  public get app(): Application {
    return this._app;
  }

  /**
   * HTTP Server instance getter.
   */
  public get http(): Server {
    return this._http;
  }

  /**
   * The port on which we listen on for http requests.
   */
  public get port(): number {
    return Config.number("http.port", 7200);
  }

  /**
   * The ip on which we listen on for http requests.
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

  /* eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types */
  public setLocal(variable: string, value: any): void {
    this._app.locals[variable] = value;
  }

  /**
   * Start the HTTP server.
   */
  public start(): void {
    for (const middleware of this._middlewares) {
      middleware.use(this._app);
    }

    this._app.use(Router.router);
    new ErrorHandlerMiddleware().use(this._app);

    const { host, port } = this;
    this._http.listen(port, host, () => {
      DefaultLogger.info(`Application started: http://${ host }:${ port }`);
    });
  }

  /**
   * Attach a middleware to the express application.
   *
   * @param middleware The middleware we want to attach.
   */
  public use(middleware: IMiddleware | IMiddleware[]): void {
    if (!Array.isArray(middleware)) {
      middleware = [ middleware ];
    }

    this._middlewares.push(...middleware);
  }
}
