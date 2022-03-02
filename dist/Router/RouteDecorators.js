"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = api;
exports.custom = custom;
exports.path = path;

var _DocsDecorators = require("../Docs/DocsDecorators");

var _DocsStore = _interopRequireDefault(require("../Docs/DocsStore"));

var _Config = _interopRequireDefault(require("../System/Config"));

var _Logger = require("../System/Logger");

var _RouteUtils = require("./RouteUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Decorator to define the path the controller will handle.
 *
 * Attaches to the target the following metadata:
 * - route:path
 * - route:api - if the {@link api} decorator was used.
 * - route:name
 * - route:docs
 * - route:path:callbacks
 *
 * Based on this metadata we know what to generate in the Documentation generator.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param name The name of the controller. If no name is specified, it will take the name of the controller.
 * @param description The description of the controller. If no description is passed, no description will be documented.
 */
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
      (0, _Logger.getDefaultLogger)().debug("---------------");
      (0, _Logger.getDefaultLogger)().info(`[REGISTER] Routes at path: ${basePath}`);
      (0, _Logger.getDefaultLogger)().debug("---------------");
      routeCallbacks.forEach(fn => fn(basePath, groupName));
    }

    return BaseClass;
  };
}
/**
 * Decorator to define the controller as an API controller.
 *
 * Attaches to the target the following metadata:
 * - route:path
 * - route:api
 *
 * Based on this metadata we know what to generate in the Documentation generator.
 *
 * @decorator
 * @param BaseClass The Controller we want to decorate.
 */


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
/**
 * Decorator to define a custom controller prefix.
 *
 * Attaches to the target the following metadata:
 * - route:path
 * - route:custom:path
 *
 * Based on this metadata we know what to generate in the Documentation generator.
 *
 * @decorator
 * @param path The custom controller path prefix.
 */


function custom(path) {
  return function (BaseClass) {
    let paths = Reflect.getMetadata("route:path", BaseClass.prototype);

    if (!paths) {
      paths = [];
      Reflect.defineMetadata("route:path", paths, BaseClass.prototype);
    }

    Reflect.defineMetadata("route:custom:path", true, BaseClass.prototype);
    paths.unshift(path);
    return BaseClass;
  };
}