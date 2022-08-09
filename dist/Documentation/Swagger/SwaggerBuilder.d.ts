import { IInterfaceDoc, TRoutesList } from "../../Docs/DocsInterfaces";
/**
 * Class representing a Swagger Builder
 */
export default class SwaggerBuilder {
    /**
     * The list of routes
     */
    protected _routes: TRoutesList;
    /**
     * The list of interfaces
     */
    protected _interfaces: Record<string, IInterfaceDoc>;
    /**
     * The Swagger Builder constructor.
     *
     * @param routes The list of routes
     * @param interfaces The list of interfaces
     */
    constructor(routes: TRoutesList, interfaces: Record<string, IInterfaceDoc>);
    /**
     * Method for returning the yaml docs
     */
    getYaml(): string;
    /**
     * Method for getting the Components
     */
    private getComponents;
    /**
     * Method for getting the tags
     */
    private getTags;
    /**
     * Method for getting the paths
     */
    private getPaths;
    /**
     * Method for displaying a Route Group
     *
     * @param routeGroup The Route Group to be displayed
     */
    private displayRouteGroup;
    /**
     * Method for getting the Parameters
     *
     * @param routeDefinition The definition of the Route for which we want the Parameters
     */
    private getParameters;
    /**
     * Method for getting the Query Parameters
     *
     * @param routeDefinition The definition of the Route for which we want the Parameters
     */
    private getQueryParameters;
    /**
     * Method to get errors
     *
     * @param routeDefinition The definition of the Route for which we want the Errors
     */
    private getErrors;
    /**
     * Method for getting the default Response
     *
     * @param routeDefinition The Route definition
     */
    private getDefaultResponse;
    /**
     * Method for getting the Request body
     *
     * @param routeDefinition The route definition
     */
    private getRequestBody;
}
