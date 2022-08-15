import SwaggerComponents from "./Modules/SwaggerComponents";
import SwaggerTags from "./Modules/SwaggerTags";
import SwaggerRoutes from "./Modules/SwaggerRoutes";
export default class SwaggerBuilder {
    protected readonly componentBuilder: SwaggerComponents;
    protected readonly tagsBuilder: SwaggerTags;
    protected readonly routesBuilder: SwaggerRoutes;
    protected store: Record<string, unknown>;
    build(): SwaggerBuilder;
    getYaml(): string;
    getJSON(): Record<string, unknown>;
}
