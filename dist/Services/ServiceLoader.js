"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A system to load services into the application and reuse them as needed.
 */
class ServiceLoader {
  /**
   * A map containing all the instantiated services in the application.
   */

  /**
   * The protected constructor of the service loader class.
   */
  constructor() {// NOP

    _defineProperty(this, "_services", {});
  }
  /**
   * The instance of the Service Loader.
   */


  /**
   * Service loader instance getter.
   */
  static get instance() {
    if (!ServiceLoader._instance) {
      ServiceLoader._instance = new ServiceLoader();
    }

    return ServiceLoader._instance;
  }
  /**
   * Static method used to get a service from the service loader.
   *
   * @param serviceNameOrClass The name of the service you want to get.
   */


  static get(serviceNameOrClass) {
    let serviceName = serviceNameOrClass;

    if (typeof serviceNameOrClass !== "string") {
      serviceName = serviceNameOrClass.name;
    }

    return ServiceLoader.instance._get(serviceName);
  }
  /**
   * Static method used to add a service to the service loader.
   *
   * @param serviceNameOrInstance The name of the service you want to add or The service instance you want to add.
   * @param serviceInstance The service instance you want to add.
   */


  static set(serviceNameOrInstance, serviceInstance) {
    let serviceName = serviceInstance ? serviceNameOrInstance : serviceNameOrInstance.constructor.name;

    if (typeof serviceName !== "string") {
      serviceName = serviceName.constructor.name;
    }

    return ServiceLoader.instance._set(serviceName, serviceInstance ?? serviceNameOrInstance);
  }
  /**
   * Method used to get the services from the database.
   *
   * @param serviceName The name of the service.
   */


  _get(serviceName) {
    return this._services[serviceName] || null;
  }
  /**
   * Method used to add a service to the service loader.
   *
   * @param serviceName The name of the service we want to add.
   * @param serviceInstance The service instance we want to add.
   */


  _set(serviceName, serviceInstance) {
    this._services[serviceName] = serviceInstance;
    return serviceInstance;
  }

}

exports.default = ServiceLoader;

_defineProperty(ServiceLoader, "_instance", null);