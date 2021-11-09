import ServiceBase from "./ServiceBase";

export default class ServiceLoader {
  private _services: Record<string, ServiceBase> = {};

  private constructor() {
    // NOP
  }

  private static _instance: ServiceLoader = null;

  public static get instance(): ServiceLoader {
    if (!ServiceLoader._instance) {
      ServiceLoader._instance = new ServiceLoader();
    }

    return ServiceLoader._instance;
  }

  public static get<T extends ServiceBase>(serviceName: string): T {
    return ServiceLoader.instance._get(serviceName) as T;
  }

  public static set<T extends ServiceBase>(
    serviceName: string,
    serviceInstance: T
  ): T {
    return ServiceLoader.instance._set<T>(serviceName, serviceInstance);
  }

  protected _get(serviceName: string): ServiceBase {
    return this._services[serviceName] || null;
  }

  protected _set<T extends ServiceBase>(
    serviceName: string,
    serviceInstance: T
  ): T {
    this._services[serviceName] = serviceInstance;
    return serviceInstance;
  }
}
