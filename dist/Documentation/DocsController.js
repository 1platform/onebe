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

var _GetDocs = _interopRequireDefault(require("./GetDocs"));

var _App = _interopRequireDefault(require("../App"));

var _Logger = require("../System/Logger");

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

let DocsController = (_dec = (0, _RouteDecorators.Path)("/", "Application Documentation", "Expose the generated documentation of the application."), _dec2 = (0, _RouteDecorators.Docs)(), _dec3 = (0, _VerbsDecorators.GET)("/"), _dec4 = (0, _VerbsDecorators.GET)("/routes"), _dec5 = (0, _VerbsDecorators.GET)("/swagger.yaml"), _dec(_class = _dec2(_class = (_class2 = class DocsController extends _Route.default {
  constructor() {
    super();
    (0, _Logger.getDefaultLogger)().debug(`[REGISTER] GET: ${_Config.default.get("docs.basePath")}/openapi`);

    _App.default.HTTP.app.use(`${_Config.default.get("docs.basePath")}/openapi`, _SwaggerUI.default.serve, _SwaggerUI.default.setup(null, {
      swaggerOptions: {
        url: `${_Config.default.get("docs.basePath")}/swagger.yaml`,
        persistAuthorization: true
      },
      customSiteTitle: `${_App.default.app.appName} API`,
      isExplorer: true
    }));
  }

  getAppInfo(context) {
    return {
      name: _App.default.app.appName,
      description: _App.default.app.appDescription,
      version: _App.default.app.appVersion,
      url: _App.default.app.appURL
    };
  }

  getRoutes(context) {
    return (0, _GetRoutes.default)();
  }

  getOpenAPI(context) {
    return {
      contentType: "text/vnd.yaml",
      body: (0, _GetDocs.default)()
    };
  }

}, (_applyDecoratedDescriptor(_class2.prototype, "getAppInfo", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "getAppInfo"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getRoutes", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "getRoutes"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getOpenAPI", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "getOpenAPI"), _class2.prototype)), _class2)) || _class) || _class);
exports.default = DocsController;