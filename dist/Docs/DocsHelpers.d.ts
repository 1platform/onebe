import { BodyParameterType } from "./DocsInterfaces";
/**
 * Extra parameters that can be passed to the property documentation method.
 */
export interface IPropertyOptions {
    description?: string;
    enumOptions?: Array<string>;
    required?: boolean;
    defaultValue?: string;
    schema?: string;
}
/**
 * Interface property definition method.
 *
 * @param propertyName The name of the property we want to document.
 * @param type The data type of the property.
 * @param options The options passed to the documentation engine.
 */
export declare type PropertyDefinitionFunction = (propertyName: string, type: BodyParameterType, options?: IPropertyOptions) => IPropertyResult;
/**
 * The return value of the property definition method.
 */
export interface IPropertyResult {
    /**
     * The property definition method, added in an object, in order to chain multiple calls and attach to the same method.
     */
    property: PropertyDefinitionFunction;
}
/**
 * Documentation helper function to document interfaces and properties.
 */
export declare const docsHelpers: {
    /**
     * Interface definition method.
     *
     * @param name The name of the interface we want to document.
     * @param description The description of the interface.
     */
    interface: (name: string, description?: string) => IPropertyResult;
    property: (interfaceName: string, propertyName: string, type: BodyParameterType, { description, required, defaultValue, enumOptions, schema, }: IPropertyOptions) => IPropertyResult;
};
