import SwaggerBuilder from "./Swagger/SwaggerBuilder";
import Config from "../System/Config";

export enum DocsType {
  SWAGGER_YAML = "swagger:yaml",
  SWAGGER_JSON = "swagger:json",
}

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

function getSwaggerDocs(type: DocsType) {
  const swaggerBuilder = new SwaggerBuilder();
  swaggerBuilder.build();

  return type === DocsType.SWAGGER_YAML ? swaggerBuilder.getYaml() : swaggerBuilder.getJSON();
}
