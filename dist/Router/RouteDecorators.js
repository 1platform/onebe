"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = api;
exports.path = path;

var _DocsDecorators = require("../Docs/DocsDecorators");

var _DocsStore = _interopRequireDefault(require("../Docs/DocsStore"));

var _Config = _interopRequireDefault(require("../System/Config"));

var _Logger = _interopRequireDefault(require("../System/Logger"));

var _RouteUtils = require("./RouteUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function path(path, name, description) {
  return function (BaseClass) {
    let paths = Reflect.getMetadata("route:path", BaseClass.prototype);

    if (!paths) {
      paths = [];
      Reflect.defineMetadata("route:path", paths, BaseClass.prototype);
    }

    paths.push(path);
    const basePath = paths.join("/").replace(/(https?:\/\/)|(\/)+/g, "$1$2");
    const groupName = name || BaseClass.name;
    const isAPI = Reflect.getMetadata("route:api", BaseClass.prototype);
    const controllerDocs = (0, _DocsDecorators.getElementDocs)(BaseClass.prototype);
    Reflect.defineMetadata("route:name", groupName, BaseClass.prototype);

    _DocsStore.default.instance.initGroup(groupName, basePath, description, isAPI || false);

    Object.keys(controllerDocs).forEach(key => {
      _DocsStore.default.instance.setGroupItem(groupName, key, controllerDocs[key]);
    });
    const routeCallbacks = (0, _RouteUtils.getRouteCallbacks)(BaseClass.prototype);

    if (routeCallbacks.length > 0) {
      _Logger.default.debug("---------------");

      _Logger.default.info(`[REGISTER] Routes at path: ${basePath}`);

      _Logger.default.debug("---------------");

      routeCallbacks.forEach(fn => fn(basePath, groupName));
    }

    return BaseClass;
  };
}

function api(BaseClass) {
  let paths = Reflect.getMetadata("route:path", BaseClass.prototype);

  if (!paths) {
    paths = [];
    Reflect.defineMetadata("route:path", paths, BaseClass.prototype);
  }

  Reflect.defineMetadata("route:api", true, BaseClass.prototype);
  paths.unshift(_Config.default.string("api.path"));
  return BaseClass;
}