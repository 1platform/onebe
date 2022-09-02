import SwaggerBuilder from "./Swagger/SwaggerBuilder";
import Config from "../System/Config";

/**
 * A list of supported documentation generators.
 *
 * @enum
 */
export enum DocsType {
  SWAGGER_YAML = "swagger:yaml",
  SWAGGER_JSON = "swagger:json",
}

/**
 * Function used to generate the documentation of the application routes
 * and entities based on the given generator passed as input.
 *
 * @param [type] The type of the documentation generator.
 */
export default function GetDocs(type: DocsType = DocsType.SWAGGER_YAML): string | Record<string, any> {
  if (!Config.boolean("docs.expose")) {
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
function getSwaggerDocs(type: DocsType) {
  const swaggerBuilder = new SwaggerBuilder();
  swaggerBuilder.build();

  return type === DocsType.SWAGGER_YAML ? swaggerBuilder.getYaml() : swaggerBuilder.getJSON();
}
