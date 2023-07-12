import { Constructor } from "@/Documentation/MetadataTypes";
import { HTTPError } from "@/Exceptions";
import ServiceBase from "@/Services/ServiceBase";

/**
 * A system to load services into the application and reuse them as needed.
 */
export default class ServiceLoader {
  /**
   * A map containing all the instantiated services in the application.
   */
  protected _services: Record<string, ServiceBase> = {};

  /**
   * A map containing all the cloned instances in the application.
   */
  protected _clonedServices: Record<string, ServiceBase> = {};

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
   * @param serviceNameOrClass The name of the service you want to get.
   * @param [properties] A list of properties that you want to pass to the new instance.
   */
  public static get<T extends ServiceBase>(serviceNameOrClass: string | Constructor<T>, properties?: Record<string, any>): T {
    let serviceName = serviceNameOrClass as string;
    if (typeof serviceNameOrClass !== "string") {
      serviceName = serviceNameOrClass.name;
    }

    return properties && Object.keys(properties).length > 0
      ? ServiceLoader.instance._clone<T>(serviceName, properties)
      : ServiceLoader.instance._get<T>(serviceName);
  }

  /**
   * Static method used to get a clone with parameters of a service from the service loader.
   *
   * @param serviceNameOrClass The name of the service you want to get.
   * @param properties A list of properties that you want to pass to the new instance.
   */
  public static async clone<T extends ServiceBase>(serviceNameOrClass: string | Constructor<T>, properties: Record<string, any>): Promise<T> {
    let serviceName = serviceNameOrClass as string;
    if (typeof serviceNameOrClass !== "string") {
      serviceName = serviceNameOrClass.name;
    }

    if (!properties || Object.keys(properties).length === 0) {
      throw new HTTPError("Please specify a list of parameters");
    }

    const instance = ServiceLoader.instance._clone<T>(serviceName, properties);
    await instance.init();
    return instance;
  }

  /**
   * Static method used to add a service to the service loader.
   *
   * @param serviceNameOrInstance The name of the service you want to add or The service instance you want to add.
   * @param serviceInstance The service instance you want to add.
   */
  public static set<T extends ServiceBase>(serviceNameOrInstance: string | T, serviceInstance?: T): T {
    let serviceName: string = serviceInstance ? (serviceNameOrInstance as string) : serviceNameOrInstance.constructor.name;

    if (typeof serviceName !== "string") {
      serviceName = (serviceName as T).constructor.name;
    }
    return ServiceLoader.instance._set<T>(serviceName, serviceInstance ?? (serviceNameOrInstance as T));
  }

  /**
   * Method used to get the services from the database.
   *
   * @param serviceName The name of the service.
   */
  protected _get<T extends ServiceBase>(serviceName: string): T | null {
    return (this._services[serviceName] as T) || null;
  }

  /**
   * Method used to get the services from the database.
   *
   * @param serviceName The name of the service.
   * @param [properties] A list of properties that you want to pass to the new instance.
   */
  protected _clone<T extends ServiceBase>(serviceName: string, properties?: Record<string, any>): T {
    const originalInstance: T = this._get<T>(serviceName);
    if (!originalInstance) {
      return null;
    }

    const instanceName = `${ serviceName }_${ JSON.stringify(properties || {}) }`;
    if (this._clonedServices[instanceName]) {
      return this._clonedServices[instanceName] as T;
    }

    this._clonedServices[instanceName] = originalInstance.clone(properties);
    return this._clonedServices[instanceName] as T;
  }

  /**
   * Method used to add a service to the service loader.
   *
   * @param serviceName The name of the service we want to add.
   * @param serviceInstance The service instance we want to add.
   */
  protected _set<T extends ServiceBase>(serviceName: string, serviceInstance: T): T {
    this._services[serviceName] = serviceInstance;
    return serviceInstance;
  }
}
