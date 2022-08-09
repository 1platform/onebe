import { BodyParameterType } from "./DocsInterfaces";
import MetadataStore from "../Documentation/MetadataStore";
import { EntityPropertyDataTypes } from "../Documentation/Definition/EntityMetadata";

/**
 * Extra parameters that can be passed to the property documentation method.
 *
 * @deprecated
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
 * @deprecated
 * @param propertyName The name of the property we want to document.
 * @param type The data type of the property.
 * @param options The options passed to the documentation engine.
 */
export type PropertyDefinitionFunction = (
  propertyName: string,
  type: BodyParameterType,
  options?: IPropertyOptions
) => IPropertyResult;

/**
 * The return value of the property definition method.
 * @deprecated
 */
export interface IPropertyResult {
  /**
   * The property definition method, added in an object, in order to chain multiple calls and attach to the same method.
   */
  property: PropertyDefinitionFunction;
}

/**
 * Interface property definition method.
 *
 * @deprecated
 * @param interfaceName The name of the interface we want to add documentation to.
 * @param propertyName The name of the property we want to document.
 * @param type The data type of the property.
 * @param options The options passed to the documentation engine.
 */
const property = (
  interfaceName: string,
  propertyName: string,
  type: BodyParameterType,
  {
    description = "",
    required = true,
    defaultValue = "",
    enumOptions = undefined,
    schema = undefined,
  }: IPropertyOptions
): IPropertyResult => {
  MetadataStore.instance.entity.property(interfaceName, propertyName, {
    dataType:
      EntityPropertyDataTypes[type.toString()] ||
      EntityPropertyDataTypes.STRING,
    description,
    reference: schema,
    required,
  });

  return {
    property: (propertyName, type, options?): IPropertyResult => {
      return property(interfaceName, propertyName, type, options || {});
    },
  };
};

/**
 * Documentation helper function to document interfaces and properties.
 *
 * @deprecated
 */
export const docsHelpers = {
  /**
   * Interface definition method.
   *
   * @deprecated
   * @param name The name of the interface we want to document.
   * @param description The description of the interface.
   */
  interface: (name: string, description?: string): IPropertyResult => {
    MetadataStore.instance.entity.add(name, description);

    return {
      property: (
        propertyName: string,
        type: BodyParameterType,
        options?: IPropertyOptions
      ): IPropertyResult => {
        return property(name, propertyName, type, options || {});
      },
    };
  },

  property,
};
