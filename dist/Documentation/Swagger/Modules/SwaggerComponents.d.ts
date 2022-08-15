import { IEntityMetadata } from "../../Definition/EntityMetadata";
interface ISwaggerComponentDefinition {
    name: string;
    definition: ISwaggerComponent;
}
interface ISwaggerComponent {
    type: string;
    description?: string;
    properties: Record<string, unknown>;
    required?: Array<string>;
}
export default class SwaggerComponents {
    getSecuritySchemes(): Record<string, unknown>;
    getErrorEntity(): Record<string, unknown>;
    buildComponents(entities: Array<IEntityMetadata>): Record<string, unknown>;
    getComponent(entity: IEntityMetadata): ISwaggerComponentDefinition;
}
export {};
