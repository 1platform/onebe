import Config from "../System/Config";
import MetadataStore from "./MetadataStore";
import { getPath } from "../Router/RouteUtils";

export default function GetRoutes(): Record<string, any> {
  if (!Config.boolean("docs.expose")) {
    return {};
  }

  return MetadataStore.instance.routes.map((route) => ({
    name: route.name,
    controller: route.controller,
    group: route.group,
    description: route.description,
    isAPI: route.isAPI,
    basePath: getPath(...(route.basePath || [])),
    endpoints: Object.values(route.endpoints).map((endpoint) => ({
      path: getPath(...(route.basePath || []), endpoint.path),
      verb: endpoint.verb.toUpperCase(),
      summary: endpoint.summary || endpoint.description || "",
      authenticated: endpoint.isAuthenticated ? endpoint.authenticationMethod : "-",

      /*
  throws: Record<HTTPStatus, IEndpointThrowResponse>;
  statuses: Record<HTTPStatus, string>;
  responses: Record<HTTPStatus, IEndpointResponse>;
  parameters: Record<string, IEndpointParameter>;
  query: Record<string, IEndpointQuery>;
  bodyParameters?: Record<string, IEndpointBodyParameter>;
  body?: IEndpointBody;
           */
    })),
  }));
}
