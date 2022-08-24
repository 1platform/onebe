"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocsType = void 0;
exports.default = GetDocs;

var _SwaggerBuilder = _interopRequireDefault(require("./Swagger/SwaggerBuilder"));

var _Config = _interopRequireDefault(require("../System/Config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A list of supported documentation generators.
 *
 * @enum
 */
let DocsType;
/**
 * Function used to generate the documentation of the application routes
 * and entities based on the given generator passed as input.
 *
 * @param [type] The type of the documentation generator.
 */

exports.DocsType = DocsType;

(function (DocsType) {
  DocsType["SWAGGER_YAML"] = "swagger:yaml";
  DocsType["SWAGGER_JSON"] = "swagger:json";
})(DocsType || (exports.DocsType = DocsType = {}));

function GetDocs(type = DocsType.SWAGGER_YAML) {
  if (!_Config.default.boolean("docs.expose")) {
    return {};
  }

  switch (type) {
    case DocsType.SWAGGER_YAML:
    case DocsType.SWAGGER_JSON:
      return getSwaggerDocs(type);
  }
}
/**
 * Method used to generate OpenAPI 3 documentation.
 *
 * @param type The type of documentation you need to get.
 */


function getSwaggerDocs(type) {
  const swaggerBuilder = new _SwaggerBuilder.default();
  swaggerBuilder.build();
  return type === DocsType.SWAGGER_YAML ? swaggerBuilder.getYaml() : swaggerBuilder.getJSON();
}