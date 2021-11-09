"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ServiceLoader {
  constructor() {// NOP

    _defineProperty(this, "_services", {});
  }

  static get instance() {
    if (!ServiceLoader._instance) {
      ServiceLoader._instance = new ServiceLoader();
    }

    return ServiceLoader._instance;
  }

  static get(serviceName) {
    return ServiceLoader.instance._get(serviceName);
  }

  static set(serviceName, serviceInstance) {
    return ServiceLoader.instance._set(serviceName, serviceInstance);
  }

  _get(serviceName) {
    return this._services[serviceName] || null;
  }

  _set(serviceName, serviceInstance) {
    this._services[serviceName] = serviceInstance;
    return serviceInstance;
  }

}

exports.default = ServiceLoader;

_defineProperty(ServiceLoader, "_instance", null);