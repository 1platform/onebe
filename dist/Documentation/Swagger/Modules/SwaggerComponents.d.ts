import { IEntityMetadata } from "../../Definition/EntityMetadata";
/**
 * Interface used to link a component name with its definition.
 */
export interface ISwaggerComponentDefinition {
    /**
     * The name of the component.
     */
    name: string;
    /**
     * The definition of the component.
     */
    definition: ISwaggerComponent;
}
/**
 * Interface used to define how a Swagger Component should look like.
 */
export interface ISwaggerComponent {
    /**
     * The datatype of the component.
     */
    type: string;
    /**
     * A short description of the component.
     */
    description?: string;
    /**
     * A list of properties that can be found in the component.
     */
    properties: Record<string, unknown>;
    /**
     * A list of required properties that should appear when sending data to the request.
     */
    required?: Array<string>;
}
/**
 * Swagger Components Builder tool.
 *
 * Using this class the Documentation system will create everything needed
 * by the OpenAPI 3 components specification.
 */
export default class SwaggerComponents {
    /**
     * Method that extracts the components from the entities definition metadata.
     *
     * @param entities The list of documented entities from the metadata store.
     */
    getComponents(entities: Array<IEntityMetadata>): Record<string, unknown>;
    /**
     * Method used to generate the security schemas based on the authentication
     * methods supported by the framework.
     */
    protected getSecuritySchemes(): Record<string, unknown>;
    /**
     * Method used to generate the error entity definition. Since all the errors
     * returned by the application follow the same pattern we can easily define a
     * generic error entity and reuse it everywhere we need to return an error.
     */
    protected getErrorEntity(): Record<string, unknown>;
    /**
     * Method used to generate the definition of a component. It takes as parameter
     * the entity metadata information.
     *
     * @param entity The entity we want to generate a component from.
     */
    protected getComponent(entity: IEntityMetadata): ISwaggerComponentDefinition;
}
