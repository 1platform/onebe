import { Constructor } from "../Router/RouteTypes";
import Config from "../System/Config";
import getVersion from "../version";
import IAppInfo from "./IAppInfo";

/**
 * The ApplicationObject we support to be attached to the App instance.
 */
export type ApplicationObject = Constructor;

/**
 * The GenericFunction type we support to be attached to the App instance.
 */
export type GenericFunction = (...args: any) => any;

/**
 * Main App Definition class.
 */
export default class App {
  /**
   * Any extra object or function defined in the Application Object.
   */
  [key: string]: any;

  /**
   * A list with all the objects and functions attached to the application object.
   */
  private _elements: Array<ApplicationObject | GenericFunction> = [];

  /**
   * Internal object used to get the information about the application.
   */
  private _appInfo: IAppInfo = {
    name: "@sparkdev/onebe",
    version: getVersion(),
    appName: Config.string("app.appName"),
    appVersion: Config.string("app.appVersion"),
    appDescription: Config.string("http.url"),
    appURL: Config.string("app.appDescription"),
  };

  /**
   * Return the application information object.
   */
  public get app(): IAppInfo {
    return this._appInfo;
  }

  /**
   * Set the application information object.
   *
   * @param appInfo The new application information object.
   */
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

  /**
   * Add an class instance to the application object.
   *
   * @param ElementInstance The class we want to create an object from and add to the application object.
   */
  public use(ElementInstance: ApplicationObject): void {
    const element = new ElementInstance();
    this._elements[element.constructor.name] = element;

    Object.defineProperty(this, element.constructor.name, {
      get: () => this._elements[element.constructor.name],
      configurable: true,
    });
  }

  /**
   * Add a function to the application object.
   *
   * @param fn The function we want to attach to the application object.
   */
  public hook(fn: GenericFunction): void {
    this._elements[fn.name] = fn.bind(this);
    Object.defineProperty(this, fn.name, {
      get: () => this._elements[fn.name],
      configurable: true,
    });
  }
}
