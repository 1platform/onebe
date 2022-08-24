"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API = API;
exports.Controller = Controller;
exports.Custom = Custom;
exports.Docs = Docs;
exports.Group = Group;
exports.Path = Path;

var _Config = _interopRequireDefault(require("../System/Config"));

var _Logger = require("../System/Logger");

var _MetadataStore = _interopRequireDefault(require("../Documentation/MetadataStore"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Decorator used to define the path the controller will handle.
 *
 * This decorator checks if documentation can be exposed and will allow the registration
 * of the Documentation APIs while keeping track of the various elements that need to
 * be added to the Documentation for controllers that are added in the application.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param name The name of the controller. If no name is specified, it will take the name of the controller.
 * @param description The description of the controller. If no description is passed, no description will be documented.
 */
function Path(path, name, description) {
  return function (BaseClass) {
    const routeMetadata = _MetadataStore.default.instance.route;
    const route = routeMetadata.update(BaseClass.name, path, description);
    route.name = name;

    if (route.isDocs && !_Config.default.boolean("docs.expose")) {
      return BaseClass;
    }

    const basePath = route.basePath.filter(basePath => basePath).join("/").replace(/(https?:\/\/)|(\/)+/g, "$1$2");
    (0, _Logger.getDefaultLogger)().debug("---------------");
    (0, _Logger.getDefaultLogger)().info(`[REGISTER] Routes for: ${route.controller} [${route.name}]: ${basePath}`);

    _index.default.parseRoute(route);

    (0, _Logger.getDefaultLogger)().debug("---------------");
    return BaseClass;
  };
}
/**
 * Decorator used to define the path the controller will handle. It is an alias for @Path.
 *
 * This decorator checks if documentation can be exposed and will allow the registration
 * of the Documentation APIs while keeping track of the various elements that need to
 * be added to the Documentation for controllers that are added in the application.
 *
 * @decorator
 * @param path The path on which we will register the routes of this controller.
 * @param name The name of the controller. If no name is specified, it will take the name of the controller.
 * @param description The description of the controller. If no description is passed, no description will be documented.
 */


function Controller(path, name, description) {
  return Path(path, name, description);
}
/**
 * Decorator to mark the controller as an API controller.
 *
 * @decorator
 */


function API() {
  return function (BaseClass) {
    const routeMetadata = _MetadataStore.default.instance.route;
    routeMetadata.markAsAPI(BaseClass.name, _Config.default.string("api.path"));
    return BaseClass;
  };
}
/**
 * Decorator to define a custom controller prefix.
 *
 * @decorator
 * @param path The custom controller path prefix.
 */


function Custom(path) {
  return function (BaseClass) {
    const routeMetadata = _MetadataStore.default.instance.route;
    routeMetadata.markAsCustom(BaseClass.name, path);
    return BaseClass;
  };
}
/**
 * Decorator to mark a controller as a Documentation one. If needed you can customize
 * the base path on which the endpoints exposed by the controller are.
 *
 * @decorator
 * @param path The custom documentation path prefix.
 */


function Docs(path) {
  return function (BaseClass) {
    const routeMetadata = _MetadataStore.default.instance.route;
    routeMetadata.markAsDocs(BaseClass.name);
    routeMetadata.markAsCustom(BaseClass.name, path ?? _Config.default.string("docs.path"));
    return BaseClass;
  };
}
/**
 * Decorator used to add the controller into a group.
 *
 * @decorator
 * @param groupName The name of the group.
 */


function Group(groupName) {
  return function (BaseClass) {
    const routeMetadata = _MetadataStore.default.instance.route;
    routeMetadata.group(BaseClass.name, groupName);
    return BaseClass;
  };
}