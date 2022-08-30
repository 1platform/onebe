"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createRouteFile;

var _path = _interopRequireDefault(require("path"));

var _Config = _interopRequireDefault(require("../../System/Config"));

var _fs = _interopRequireDefault(require("fs"));

var _chalk = _interopRequireDefault(require("chalk"));

var _Logger = require("../../System/Logger");

var _Utils = require("../../Utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets contents of the route file.
 *
 * @param routeName The name of the route.
 * @param [options] Options used to enable/disable various functionalities in the generated route.
 */
function getRouteTemplate(routeName, options = {}) {
  const {
    api,
    docs,
    custom,
    path
  } = options;
  const routeImports = ["Path"];
  const routeDecorators = [];

  if (api) {
    routeImports.push("API");
    routeDecorators.push(`@API()`);
  }

  if (custom && custom.length > 0) {
    routeImports.push("Custom");
    routeDecorators.push(`@Custom("${custom}")`);
  }

  if (docs) {
    routeImports.push("Docs");
    routeDecorators.push(`@Docs()`);
  }

  let routePath = path || `${(0, _Utils.snakeCase)((0, _Utils.camelCase)(routeName), "-")}`;

  if (routePath[0] !== "/") {
    routePath = `/${routePath}`;
  }

  routeDecorators.unshift(`@Path("${routePath}", "${routeName} Route", "")`);
  return `import Route from "onebe/Router/Route";
import { ${routeImports.join(", ")} } from "onebe/Router/RouteDecorators";
import { GET } from "onebe/Router/VerbsDecorators";
import ContextAPI from "onebe/Router/ContextAPI";
import AuthContextAPI from "onebe/Router/AuthContextAPI";
import HTTPStatus from "onebe/HTTP/HTTPStatus";
import { ResponseDocs } from "onebe/Documentation/Decorators/EndpointDecorators";

${routeDecorators.join("\n")}
export default class ${routeName}Route extends Route {
  @GET<any, HTTPStatus>("/")
  @ResponseDocs.Status(HTTPStatus.OK)
  public get${routeName}(context: ContextAPI, authContext: AuthContextAPI): HTTPStatus {
    return HTTPStatus.OK;
  }
}
`;
}
/**
 * Function used to create a new route.
 *
 * @param routeName The name of the route.
 * @param [options] Options used to enable/disable various functionalities in the generated route.
 */


function createRouteFile(routeName, options) {
  if (routeName.toLowerCase().indexOf("route") >= 0) {
    routeName = routeName.substring(0, routeName.toLowerCase().indexOf("route"));
  }

  const routeFile = _path.default.resolve(_Config.default.get("app.folders.routes", "./"), `${routeName}Route.ts`);

  if (!_fs.default.existsSync(_path.default.dirname(routeFile))) {
    _fs.default.mkdirSync(_path.default.dirname(routeFile), {
      recursive: true
    });
  }

  if (_fs.default.existsSync(routeFile) && !options.override) {
    (0, _Logger.getDefaultLogger)().error(`Route ${_chalk.default.blue(routeFile)} already exists. Use the ${_chalk.default.blue("--override")} flag to replace the file.`);
    return;
  }

  const template = getRouteTemplate(routeName, options || {});

  _fs.default.writeFileSync(routeFile, template, "utf-8");

  (0, _Logger.getDefaultLogger)().info(`Route ${_chalk.default.blue(routeFile)} has been generated successfully.`);
}