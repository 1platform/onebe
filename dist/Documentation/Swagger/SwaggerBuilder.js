"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsYaml = _interopRequireDefault(require("js-yaml"));

var _SwaggerComponents = _interopRequireDefault(require("./Modules/SwaggerComponents"));

var _App = _interopRequireDefault(require("../../App"));

var _Config = _interopRequireDefault(require("../../System/Config"));

var _MetadataStore = _interopRequireDefault(require("../MetadataStore"));

var _SwaggerTags = _interopRequireDefault(require("./Modules/SwaggerTags"));

var _SwaggerRoutes = _interopRequireDefault(require("./Modules/SwaggerRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class SwaggerBuilder {
  constructor() {
    _defineProperty(this, "componentBuilder", new _SwaggerComponents.default());

    _defineProperty(this, "tagsBuilder", new _SwaggerTags.default());

    _defineProperty(this, "routesBuilder", new _SwaggerRoutes.default());

    _defineProperty(this, "store", {});
  }

  build() {
    const metadataStore = _MetadataStore.default.instance;
    this.store = {
      openapi: "3.0.0",
      info: {
        version: _App.default.app.appVersion,
        title: `${_App.default.app.appName} API`,
        description: _App.default.app.appDescription
      },
      servers: [{
        url: _Config.default.string("http.url"),
        description: "Default environment"
      }],
      paths: this.routesBuilder.getRoutes(metadataStore.routes),
      components: this.componentBuilder.buildComponents(metadataStore.entity.buildEntityList()),
      tags: this.tagsBuilder.getTags(metadataStore.routes)
    };
    return this;
  }

  getYaml() {
    return _jsYaml.default.dump(this.store, {
      forceQuotes: true
    });
  }

  getJSON() {
    return this.store;
  }

}

exports.default = SwaggerBuilder;