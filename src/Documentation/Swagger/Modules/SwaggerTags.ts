import { IRouteMetadata } from "../../Definition/RouteMetadata";

/**
 * Swagger Tags Builder tool.
 *
 * Using this class the Documentation system will create everything needed
 * by the OpenAPI 3 tags specification.
 */
export default class SwaggerTags {
  /**
   * Method that extracts the tags from the route definition metadata.
   *
   * @param routesMetadata The list of documented routes from the metadata store.
   */
  public getTags(routesMetadata: Array<IRouteMetadata>): Array<Record<string, unknown>> {
    if (routesMetadata.length === 0) {
      return [];
    }

    return routesMetadata.map((route) => ({
      name: route.name,
      description: route.description || "",
    }));
  }
}
