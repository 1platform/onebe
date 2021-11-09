import Config from "../System/Config";
import getVersion from "../version";
import IAppInfo from "./IAppInfo";

type ApplicationObject = { new (...args: any[]): any };

export default class App {
  [key: string]: any;

  private _elements = [];

  private _appInfo: IAppInfo = {
    name: "@sparkdev/onebe",
    version: getVersion(),
    appName: Config.string("app.appName"),
    appVersion: Config.string("app.appVersion"),
    appDescription: Config.string("http.url"),
    appURL: Config.string("app.appDescription"),
  };

  public get app(): IAppInfo {
    return this._appInfo;
  }

  public set app(appInfo: IAppInfo) {
    if (typeof appInfo !== "object") {
      return;
    }

    this._appInfo = Object.assign(
      {
        appName: "onebe by Spark",
        appVersion: this._appInfo.version,
        appDescription: "An application",
        appURL: Config.string("http.url"),
      },
      {
        ...appInfo,
        name: this._appInfo.name,
        version: this._appInfo.version,
      }
    );
  }

  public use(ElementInstance: ApplicationObject): void {
    const element = new ElementInstance();
    this._elements[element.constructor.name] = element;

    Object.defineProperty(this, element.constructor.name, {
      get: () => this._elements[element.constructor.name],
      configurable: true,
    });
  }

  public hook(fn: (...args: any) => any): void {
    this._elements[fn.name] = fn;
    Object.defineProperty(this, fn.name, {
      get: () => this._elements[fn.name],
      configurable: true,
    });
  }
}
