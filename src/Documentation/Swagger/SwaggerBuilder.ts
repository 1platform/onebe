import jsYaml from "js-yaml";
import SwaggerComponents from "./Modules/SwaggerComponents";
import app from "../../App";
import { Config } from "../../System";
import MetadataStore from "../MetadataStore";
import SwaggerTags from "./Modules/SwaggerTags";
import SwaggerRoutes from "./Modules/SwaggerRoutes";

/**
 * Swagger file builder utility.
 *
 * Using this class the Documentation system will create everything needed
 * to generate an OpenAPI 3 documentation file.
 */
export default class SwaggerBuilder {
  /**
   * Instance of the components builder tool.
   *
   * Using this tool, the Swagger Builder adds all the entities used by the routes
   * in their body or in their responses.
   */
  protected readonly componentBuilder: SwaggerComponents = new SwaggerComponents();
  /**
   * Instance of the tags builder tool.
   *
   * Using this tool, the Swagger Builder creates all the tags that will group the
   * routes exposed by your application.
   */
  protected readonly tagsBuilder: SwaggerTags = new SwaggerTags();
  /**
   * Instance of the routes builder tool.
   *
   * Using this tool, the Swagger Builder lists all the endpoints exposed by your
   * application, grouped by a tag and the path used for the various verbs used.
   */
  protected readonly routesBuilder: SwaggerRoutes = new SwaggerRoutes();

  /**
   * The data store used to hold all the information required by the
   * OpenAPI 3 specifications.
   */
  protected store: Record<string, unknown> = {};

  /**
   * Method used to build the OpenAPI 3 information store.
   *
   * This method will take the information defined by you in the documentation metadata
   * using the Documentation SDK and create all the various items required by the OpenAPI 3
   * specification.
   */
  public build(): SwaggerBuilder {
    const metadataStore = MetadataStore.instance;
    this.store = {
      openapi: "3.0.0",
      info: {
        version: app.app.appVersion,
        title: `${ app.app.appName } API`,
        description: app.app.appDescription,
      },
      servers: [
        {
          url: Config.string("http.url"),
          description: "Default environment",
        },
      ],
      paths: this.routesBuilder.getRoutes(metadataStore.routes),
      components: this.componentBuilder.getComponents(metadataStore.entity.buildEntityList()),
      tags: this.tagsBuilder.getTags(metadataStore.routes),
    };

    return this;
  }

  /**
   * Method used to export the YAML version of the OpenAPI 3 documentation.
   */
  public getYaml(): string {
    return jsYaml.dump(this.store, { forceQuotes: true });
  }

  /**
   * Method used to export the JSON version of the OpenAPI 3 documentation.
   */
  public getJSON(): Record<string, unknown> {
    return JSON.parse(JSON.stringify(this.store));
  }
}
