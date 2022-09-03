import { Docs, GET, Path, Route } from "../Router";
import SwaggerUI from "./Swagger/SwaggerUI";
import Config from "../System/Config";
import { DocsType, Endpoint, EntityHelpers, EntityPropertyDataTypes, GetDocs, GetRoutes } from "./index";
import app from "../App";
import { getDefaultLogger } from "../System/Logger";
import { HTTPStatus } from "../HTTP";

EntityHelpers.entity("ApplicationInformation", "Basic information about the application")
  .property("name", { description: "The name of the application", dataType: EntityPropertyDataTypes.STRING })
  .property("description", { description: "The description of the application", dataType: EntityPropertyDataTypes.STRING })
  .property("version", { description: "The version of the application", dataType: EntityPropertyDataTypes.STRING })
  .property("url", { description: "The URL of the application", dataType: EntityPropertyDataTypes.STRING });

@Path("/", "Application Documentation", "Expose the generated documentation of the application.")
@Docs()
export default class DocsController extends Route {
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
      })
    );
  }

  @GET<void, Record<string, unknown>>("/")
  @Endpoint({
    summary: "List basic information about the application",
  })
  public getAppInfo(): Record<string, unknown> {
    return {
      name: app.app.appName,
      description: app.app.appDescription,
      version: app.app.appVersion,
      url: app.app.appURL,
    };
  }

  @GET<void, Record<string, unknown>>("/routes")
  @Endpoint({
    summary: "List the endpoints exposed by the application.",
    responses: [ { statusCode: HTTPStatus.OK, schema: EntityPropertyDataTypes.STRING, contentType: "application/json" } ],
  })
  public getRoutes(): Record<string, unknown> {
    return GetRoutes();
  }

  @GET<void, Record<string, string>>("/swagger.yaml")
  @Endpoint({
    summary: "Returns the YAML version of the OpenAPI 3 documentation",
    responses: [ { statusCode: HTTPStatus.OK, schema: EntityPropertyDataTypes.STRING, contentType: "text/vnd.yaml" } ],
  })
  public getOpenAPIYaml(): Record<string, string> {
    return {
      contentType: "text/vnd.yaml",
      body: GetDocs() as string,
    };
  }

  @GET<void, Record<string, any>>("/swagger.json")
  @Endpoint({
    summary: "Returns the YAML version of the OpenAPI 3 documentation",
    responses: [ { statusCode: HTTPStatus.OK, schema: EntityPropertyDataTypes.STRING, contentType: "application/json" } ],
  })
  public getOpenAPIJSON(): Record<string, any> {
    return GetDocs(DocsType.SWAGGER_JSON) as Record<string, any>;
  }
}
