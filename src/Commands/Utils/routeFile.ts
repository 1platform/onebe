import path from "path";
import fs from "fs";
import chalk from "chalk";
import { getDefaultLogger, Config } from "../../System";
import { camelCase, snakeCase } from "../../Utils";

/**
 * Gets contents of the route file.
 *
 * @param routeName The name of the route.
 * @param [options] Options used to enable/disable various functionalities in the generated route.
 */
function getRouteTemplate(routeName: string, options: Record<string, string | boolean> = {}): string {
  const { api, docs, custom, path } = options;

  const routeImports = [ "Path" ];
  const routeDecorators = [];

  if (api) {
    routeImports.push("API");
    routeDecorators.push(`@API()`);
  }
  if (custom && (custom as string).length > 0) {
    routeImports.push("Custom");
    routeDecorators.push(`@Custom("${ custom }")`);
  }
  if (docs) {
    routeImports.push("Docs");
    routeDecorators.push(`@Docs()`);
  }

  let routePath = (path as string) || `${ snakeCase(camelCase(routeName), "-") }`;
  if (routePath[0] !== "/") {
    routePath = `/${ routePath }`;
  }
  routeDecorators.unshift(`@Path("${ routePath }", "${ routeName } Route", "")`);

  return `import Route from "onebe/Router/Route";
import { ${ routeImports.join(", ") } } from "onebe/Router/RouteDecorators";
import { GET } from "onebe/Router/VerbsDecorators";
import ContextAPI from "onebe/Router/ContextAPI";
import AuthContextAPI from "onebe/Router/AuthContextAPI";
import HTTPStatus from "onebe/HTTP/HTTPStatus";
import { ResponseDocs } from "onebe/Documentation/Decorators/EndpointDecorators";

/**
 * Route ${ routeName }
 *
 * Generated: ${ new Date().toISOString() }
 */
${ routeDecorators.join("\n") }
export default class ${ routeName }Route extends Route {
  @GET<any, HTTPStatus>("/")
  @ResponseDocs.Status(HTTPStatus.OK)
  public get${ routeName }(context: ContextAPI, authContext: AuthContextAPI): HTTPStatus {
    return HTTPStatus.OK;
  }
}
`;
}

/**
 * Function used to create a new route.
 *
 * @param routeName The name of the route.
 * @param [options] Options used to enable/disable various functionalities in the generated route.
 */
export default function createRouteFile(routeName: string, options?: Record<string, boolean | string>): void {
  if (routeName.toLowerCase().indexOf("route") >= 0) {
    routeName = routeName.substring(0, routeName.toLowerCase().indexOf("route"));
  }
  const routeFile = path.resolve(Config.get("app.folders.routes", "./"), `${ routeName }Route.ts`);

  if (!fs.existsSync(path.dirname(routeFile))) {
    fs.mkdirSync(path.dirname(routeFile), { recursive: true });
  }

  if (fs.existsSync(routeFile) && !options.override) {
    getDefaultLogger().error(`Route ${ chalk.blue(routeFile) } already exists. Use the ${ chalk.blue("--override") } flag to replace the file.`);
    return;
  }

  const template = getRouteTemplate(routeName, options || {});
  fs.writeFileSync(routeFile, template, "utf-8");
  getDefaultLogger().info(`Route ${ chalk.blue(routeFile) } has been generated successfully.`);
}
