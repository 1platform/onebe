import ServiceBase from "./ServiceBase";

/**
 * The application service loader singleton.
 */
export default class ServiceLoader {
  /**
   * A map containing all the instantiated services of the application.
   */
  protected _services: Record<string, ServiceBase> = {};

  /**
   * The protected constructor of the service loader class.
   */
  protected constructor() {
    // NOP
  }

  /**
   * The instance of the Service Loader.
   */
  protected static _instance: ServiceLoader = null;

  /**
   * Service loader instance getter.
   */
  public static get instance(): ServiceLoader {
    if (!ServiceLoader._instance) {
      ServiceLoader._instance = new ServiceLoader();
    }

    return ServiceLoader._instance;
  }

  /**
   * Static method used to get a service from the service loader.
   *
   * @param serviceName The name of the service we want to get.
   */
  public static get<T extends ServiceBase>(serviceName: string): T {
    return ServiceLoader.instance._get(serviceName) as T;
  }

  /**
   * Static method used to add a service to the service loader.
   *
   * @param serviceName The name of the service we want to add.
   * @param serviceInstance The service instance we want to add.
   */
  public static set<T extends ServiceBase>(
    serviceName: string,
    serviceInstance: T
  ): T {
    return ServiceLoader.instance._set<T>(serviceName, serviceInstance);
  }

  /**
   * Method used to get the services from the database.
   *
   * @param serviceName The name of the service.
   */
  protected _get(serviceName: string): ServiceBase {
    return this._services[serviceName] || null;
  }

  /**
   * Method used to add a service to the service loader.
   *
   * @param serviceName The name of the service we want to add.
   * @param serviceInstance The service instance we want to add.
   */
  protected _set<T extends ServiceBase>(
    serviceName: string,
    serviceInstance: T
  ): T {
    this._services[serviceName] = serviceInstance;
    return serviceInstance;
  }
}
