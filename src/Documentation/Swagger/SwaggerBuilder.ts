import jsYaml from "js-yaml";
import SwaggerComponents from "./Modules/SwaggerComponents";
import app from "../../App";
import Config from "../../System/Config";
import MetadataStore from "../MetadataStore";
import SwaggerTags from "./Modules/SwaggerTags";
import SwaggerRoutes from "./Modules/SwaggerRoutes";

export default class SwaggerBuilder {
  protected readonly componentBuilder: SwaggerComponents = new SwaggerComponents();
  protected readonly tagsBuilder: SwaggerTags = new SwaggerTags();
  protected readonly routesBuilder: SwaggerRoutes = new SwaggerRoutes();

  protected store: Record<string, unknown> = {};

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
      components: this.componentBuilder.buildComponents(metadataStore.entity.buildEntityList()),
      tags: this.tagsBuilder.getTags(metadataStore.routes),
    };

    return this;
  }

  public getYaml(): string {
    return jsYaml.dump(this.store, { forceQuotes: true });
  }

  public getJSON(): Record<string, unknown> {
    return this.store;
  }
}
