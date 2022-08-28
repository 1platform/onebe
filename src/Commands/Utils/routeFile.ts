import path from "path";
import Config from "../../System/Config";
import fs from "fs";
import chalk from "chalk";
import { getDefaultLogger } from "../../System/Logger";
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
  const controllerFile = path.resolve(Config.get("app.folders.controllers", "./"), `${ routeName }Route.ts`);

  if (!fs.existsSync(path.dirname(controllerFile))) {
    fs.mkdirSync(path.dirname(controllerFile), { recursive: true });
  }

  if (fs.existsSync(controllerFile) && !options.override) {
    getDefaultLogger().error(
      `Controller ${ chalk.blue(controllerFile) } already exists. Use the ${ chalk.blue("--override") } flag to replace the file.`
    );
    return;
  }

  const template = getRouteTemplate(routeName, options || {});
  fs.writeFileSync(controllerFile, template, "utf-8");
  getDefaultLogger().info(`Controller ${ chalk.blue(controllerFile) } has been generated successfully.`);
}
