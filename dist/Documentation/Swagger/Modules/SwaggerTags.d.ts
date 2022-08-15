import { IRouteMetadata } from "../../Definition/RouteMetadata";
export default class SwaggerTags {
    getTags(routesMetadata: Array<IRouteMetadata>): Array<Record<string, unknown>>;
}
