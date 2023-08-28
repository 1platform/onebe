import app from "@/App";
import { DocsType, Endpoint, EntityHelpers, EntityPropertyDataTypes, GetDocs, GetRoutes } from "@/Documentation/index";
import SwaggerUI from "@/Documentation/Swagger/SwaggerUI";
import type { IResponse } from "@/Router";
import { Docs, GET, Path, Route } from "@/Router";
import { HTTPStatus } from "@/Server";
import Config from "@/System/Config";
import { getDefaultLogger } from "@/System/Logger";

EntityHelpers.entity("ApplicationInformation", "Basic information about the application")
  .property("name", { description: "The name of the application", dataType: EntityPropertyDataTypes.STRING })
  .property("description", { description: "The description of the application", dataType: EntityPropertyDataTypes.STRING })
  .property("version", { description: "The version of the application", dataType: EntityPropertyDataTypes.STRING })
  .property("url", { description: "The URL of the application", dataType: EntityPropertyDataTypes.STRING });

@Path("/", "Application Documentation", "Expose the generated documentation of the application.")
@Docs()
export default class DocumentationRoute extends Route {
  public constructor() {
    super();
    getDefaultLogger().debug(`[REGISTER] GET: ${ Config.get("docs.path") }/openapi`);
    app.HTTP.app.use(
      `${ Config.get("docs.path") }/openapi`,
      SwaggerUI.serve,
      SwaggerUI.setup(null, {
        swaggerOptions: {
          url: `${ Config.get("docs.path") }/swagger.yaml`,
          persistAuthorization: true,
        },
        customSiteTitle: `${ app.app.appName } API`,
        isExplorer: true,
      }),
    );
  }

  @GET<Record<string, string>>("/")
  @Endpoint({
    description: "List basic information about the application",
    responses: [
      {
        statusCode: HTTPStatus.OK,
        schema: "ApplicationInformation",
        isSchema: true,
      },
    ],
  })
  public getAppInfo(): Record<string, unknown> {
    return {
      name: app.app.appName,
      description: app.app.appDescription,
      version: app.app.appVersion,
      url: app.app.appURL,
    };
  }

  @GET<Record<string, unknown>>("/routes")
  @Endpoint({
    description: "List the endpoints exposed by the application.",
    responses: [ { statusCode: HTTPStatus.OK, schema: EntityPropertyDataTypes.STRING, contentType: "application/json" } ],
  })
  public getRoutes(): Record<string, unknown> {
    return GetRoutes();
  }

  @GET<Record<string, string>>("/swagger.yaml")
  @Endpoint({
    description: "Returns the YAML version of the OpenAPI 3 documentation",
    responses: [ { statusCode: HTTPStatus.OK, schema: EntityPropertyDataTypes.STRING, contentType: "text/vnd.yaml" } ],
  })
  public getOpenAPIYaml(): IResponse<string> {
    return {
      contentType: "text/vnd.yaml",
      body: GetDocs() as string,
    };
  }

  @GET<Record<string, any>>("/swagger.json")
  @Endpoint({
    description: "Returns the JSON version of the OpenAPI 3 documentation",
    responses: [ { statusCode: HTTPStatus.OK, schema: EntityPropertyDataTypes.STRING, contentType: "application/json" } ],
  })
  public getOpenAPIJSON(): Record<string, any> {
    return GetDocs(DocsType.SWAGGER_JSON) as Record<string, any>;
  }
}
