import { IRouteMetadata } from "../../Definition/RouteMetadata";

export default class SwaggerTags {
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
