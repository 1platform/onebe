"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _RouteDecorators = require("../Router/RouteDecorators");

var _Route = _interopRequireDefault(require("../Router/Route"));

var _VerbsDecorators = require("../Router/VerbsDecorators");

var _SwaggerUI = _interopRequireDefault(require("./Swagger/SwaggerUI"));

var _Config = _interopRequireDefault(require("../System/Config"));

var _GetRoutes = _interopRequireDefault(require("./GetRoutes"));

var _GetDocs = _interopRequireWildcard(require("./GetDocs"));

var _App = _interopRequireDefault(require("../App"));

var _Logger = require("../System/Logger");

var _EndpointDecorators = require("./Decorators/EndpointDecorators");

var _EntityHelpers = _interopRequireDefault(require("./Helpers/EntityHelpers"));

var _DataTypes = require("./Definition/DataTypes");

var _HTTPStatus = _interopRequireDefault(require("../HTTP/HTTPStatus"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

_EntityHelpers.default.entity("ApplicationInformation", "Basic information about the application").property("name", {
  description: "The name of the application",
  dataType: _DataTypes.EntityPropertyDataTypes.STRING
}).property("description", {
  description: "The description of the application",
  dataType: _DataTypes.EntityPropertyDataTypes.STRING
}).property("version", {
  description: "The version of the application",
  dataType: _DataTypes.EntityPropertyDataTypes.STRING
}).property("url", {
  description: "The URL of the application",
  dataType: _DataTypes.EntityPropertyDataTypes.STRING
});

let DocsController = (_dec = (0, _RouteDecorators.Path)("/", "Application Documentation", "Expose the generated documentation of the application."), _dec2 = (0, _RouteDecorators.Docs)(), _dec3 = (0, _VerbsDecorators.GET)("/"), _dec4 = (0, _EndpointDecorators.Endpoint)({
  summary: "List basic information about the application"
}), _dec5 = (0, _VerbsDecorators.GET)("/routes"), _dec6 = (0, _EndpointDecorators.Endpoint)({
  summary: "List the endpoints exposed by the application.",
  responses: [{
    statusCode: _HTTPStatus.default.OK,
    schema: _DataTypes.EntityPropertyDataTypes.STRING,
    contentType: "application/json"
  }]
}), _dec7 = (0, _VerbsDecorators.GET)("/swagger.yaml"), _dec8 = (0, _EndpointDecorators.Endpoint)({
  summary: "Returns the YAML version of the OpenAPI 3 documentation",
  responses: [{
    statusCode: _HTTPStatus.default.OK,
    schema: _DataTypes.EntityPropertyDataTypes.STRING,
    contentType: "text/vnd.yaml"
  }]
}), _dec9 = (0, _VerbsDecorators.GET)("/swagger.json"), _dec10 = (0, _EndpointDecorators.Endpoint)({
  summary: "Returns the YAML version of the OpenAPI 3 documentation",
  responses: [{
    statusCode: _HTTPStatus.default.OK,
    schema: _DataTypes.EntityPropertyDataTypes.STRING,
    contentType: "application/json"
  }]
}), _dec(_class = _dec2(_class = (_class2 = class DocsController extends _Route.default {
  constructor() {
    super();
    (0, _Logger.getDefaultLogger)().debug(`[REGISTER] GET: ${_Config.default.get("docs.path")}/openapi`);

    _App.default.HTTP.app.use(`${_Config.default.get("docs.path")}/openapi`, _SwaggerUI.default.serve, _SwaggerUI.default.setup(null, {
      swaggerOptions: {
        url: `${_Config.default.get("docs.path")}/swagger.yaml`,
        persistAuthorization: true
      },
      customSiteTitle: `${_App.default.app.appName} API`,
      isExplorer: true
    }));
  }

  getAppInfo() {
    return {
      name: _App.default.app.appName,
      description: _App.default.app.appDescription,
      version: _App.default.app.appVersion,
      url: _App.default.app.appURL
    };
  }

  getRoutes() {
    return (0, _GetRoutes.default)();
  }

  getOpenAPIYaml() {
    return {
      contentType: "text/vnd.yaml",
      body: (0, _GetDocs.default)()
    };
  }

  getOpenAPIJSON() {
    return (0, _GetDocs.default)(_GetDocs.DocsType.SWAGGER_JSON);
  }

}, (_applyDecoratedDescriptor(_class2.prototype, "getAppInfo", [_dec3, _dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "getAppInfo"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getRoutes", [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "getRoutes"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getOpenAPIYaml", [_dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "getOpenAPIYaml"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getOpenAPIJSON", [_dec9, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "getOpenAPIJSON"), _class2.prototype)), _class2)) || _class) || _class);
exports.default = DocsController;