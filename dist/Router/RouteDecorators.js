"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API = API;
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


function API(BaseClass) {
  const routeMetadata = _MetadataStore.default.instance.route;
  routeMetadata.markAsAPI(BaseClass.name, _Config.default.string("api.path"));
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


function Custom(path) {
  return function (BaseClass) {
    const routeMetadata = _MetadataStore.default.instance.route;
    routeMetadata.markAsCustom(BaseClass.name, path);
    return BaseClass;
  };
}

function Docs(path) {
  return function (BaseClass) {
    const routeMetadata = _MetadataStore.default.instance.route;
    routeMetadata.markAsDocs(BaseClass.name);
    routeMetadata.markAsCustom(BaseClass.name, path ?? _Config.default.string("docs.basePath"));
    return BaseClass;
  };
}

function Group(groupName) {
  return function (BaseClass) {
    const routeMetadata = _MetadataStore.default.instance.route;
    routeMetadata.group(BaseClass.name, groupName);
    return BaseClass;
  };
}