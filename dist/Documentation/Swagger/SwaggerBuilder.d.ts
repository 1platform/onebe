import SwaggerComponents from "./Modules/SwaggerComponents";
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
    protected readonly componentBuilder: SwaggerComponents;
    /**
     * Instance of the tags builder tool.
     *
     * Using this tool, the Swagger Builder creates all the tags that will group the
     * routes exposed by your application.
     */
    protected readonly tagsBuilder: SwaggerTags;
    /**
     * Instance of the routes builder tool.
     *
     * Using this tool, the Swagger Builder lists all the endpoints exposed by your
     * application, grouped by a tag and the path used for the various verbs used.
     */
    protected readonly routesBuilder: SwaggerRoutes;
    /**
     * The data store used to hold all the information required by the
     * OpenAPI 3 specifications.
     */
    protected store: Record<string, unknown>;
    /**
     * Method used to build the OpenAPI 3 information store.
     *
     * This method will take the information defined by you in the documentation metadata
     * using the Documentation SDK and create all the various items required by the OpenAPI 3
     * specification.
     */
    build(): SwaggerBuilder;
    /**
     * Method used to export the YAML version of the OpenAPI 3 documentation.
     */
    getYaml(): string;
    /**
     * Method used to export the JSON version of the OpenAPI 3 documentation.
     */
    getJSON(): Record<string, unknown>;
}
