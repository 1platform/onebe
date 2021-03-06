"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * The application service loader singleton.
 */
class ServiceLoader {
  /**
   * A map containing all the instantiated services of the application.
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
   * @param serviceName The name of the service we want to get.
   */


  static get(serviceName) {
    return ServiceLoader.instance._get(serviceName);
  }
  /**
   * Static method used to add a service to the service loader.
   *
   * @param serviceName The name of the service we want to add.
   * @param serviceInstance The service instance we want to add.
   */


  static set(serviceName, serviceInstance) {
    return ServiceLoader.instance._set(serviceName, serviceInstance);
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