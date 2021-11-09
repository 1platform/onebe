import express, { Application } from "express";
import helmet from "helmet";
import { Server } from "http";
import app from "../App";
import ErrorHandlerMiddleware from "../Middlewares/ErrorHandlerMiddleware";
import IMiddleware from "../Middlewares/IMiddleware";
import Router from "../Router";
import Config from "../System/Config";
import DefaultLogger from "../System/Logger";

export default class HTTP {
  private _middlewares: Array<IMiddleware> = [];

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

  private _app: Application;

  public get app(): Application {
    return this._app;
  }

  private _http: Server;

  public get http(): Server {
    return this._http;
  }

  public get port(): number {
    return Config.number("http.port", 7200);
  }

  public get host(): string {
    return Config.string("http.listen", "127.0.0.1");
  }

  /* eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types */
  public setLocal(variable: string, value: any): void {
    this._app.locals[variable] = value;
  }

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

  public use(middleware: IMiddleware | IMiddleware[]): void {
    if (!Array.isArray(middleware)) {
      middleware = [ middleware ];
    }

    this._middlewares.push(...middleware);
  }
}
