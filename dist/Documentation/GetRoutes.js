"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GetRoutes;

var _Config = _interopRequireDefault(require("../System/Config"));

var _MetadataStore = _interopRequireDefault(require("./MetadataStore"));

var _RouteUtils = require("../Router/RouteUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GetRoutes() {
  if (!_Config.default.boolean("docs.expose")) {
    return {};
  }

  return _MetadataStore.default.instance.routes.map(route => ({
    name: route.name,
    controller: route.controller,
    group: route.group,
    description: route.description,
    isAPI: route.isAPI,
    basePath: (0, _RouteUtils.getPath)(...(route.basePath || [])),
    endpoints: Object.values(route.endpoints).map(endpoint => ({
      path: (0, _RouteUtils.getPath)(...(route.basePath || []), endpoint.path),
      verb: endpoint.verb.toUpperCase(),
      summary: endpoint.summary || endpoint.description || "",
      authenticated: endpoint.isAuthenticated ? endpoint.authenticationMethod : "-"
      /*
      throws: Record<HTTPStatus, IEndpointThrowResponse>;
      statuses: Record<HTTPStatus, string>;
      responses: Record<HTTPStatus, IEndpointResponse>;
      parameters: Record<string, IEndpointParameter>;
      query: Record<string, IEndpointQuery>;
      bodyParameters?: Record<string, IEndpointBodyParameter>;
      body?: IEndpointBody;
           */

    }))
  }));
}