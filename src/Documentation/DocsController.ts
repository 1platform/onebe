import { Docs, Path } from "../Router/RouteDecorators";
import Route from "../Router/Route";
import { GET } from "../Router/VerbsDecorators";
import ContextAPI from "../Router/ContextAPI";
import SwaggerUI from "./Swagger/SwaggerUI";
import Config from "../System/Config";
import GetRoutes from "./GetRoutes";
import GetDocs from "./GetDocs";
import app from "../App";
import { getDefaultLogger } from "../System/Logger";

@Path("/", "Application Documentation", "Expose the generated documentation of the application.")
@Docs()
export default class DocsController extends Route {
  public constructor() {
    super();
    getDefaultLogger().debug(`[REGISTER] GET: ${ Config.get("docs.basePath") }/openapi`);
    app.HTTP.app.use(
      `${ Config.get("docs.basePath") }/openapi`,
      SwaggerUI.serve,
      SwaggerUI.setup(null, {
        swaggerOptions: {
          url: `${ Config.get("docs.basePath") }/swagger.yaml`,
          persistAuthorization: true,
        },
        customSiteTitle: `${ app.app.appName } API`,
        isExplorer: true,
      })
    );
  }

  @GET<any, Record<string, unknown>>("/")
  public getAppInfo(context: ContextAPI): Record<string, unknown> {
    return {
      name: app.app.appName,
      description: app.app.appDescription,
      version: app.app.appVersion,
      url: app.app.appURL,
    };
  }

  @GET<any, Record<string, unknown>>("/routes")
  public getRoutes(context: ContextAPI): Record<string, unknown> {
    return GetRoutes();
  }

  @GET<any, Record<string, string>>("/swagger.yaml")
  public getOpenAPI(context: ContextAPI): Record<string, string> {
    return {
      contentType: "text/vnd.yaml",
      body: GetDocs() as string,
    };
  }
}
