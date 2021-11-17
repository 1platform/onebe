import { BodyParameterType } from "./DocsInterfaces";
import DocsStore from "./DocsStore";

/**
 * Extra parameters that can be passed to the property documentation method.
 */
export interface IPropertyOptions {
  description?: string;
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
export type PropertyDefinitionFunction = (
  propertyName: string,
  type: BodyParameterType,
  options: IPropertyOptions
) => IPropertyResult;

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
 * Interface property definition method.
 *
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
    schema = undefined,
  }: IPropertyOptions
): IPropertyResult => {
  DocsStore.instance.addInterfaceProperty(interfaceName, {
    name: propertyName,
    type,
    schema: schema || undefined,
    description: description || "",
    required: required ?? true,
    default: defaultValue || undefined,
  });

  return {
    property: (propertyName, type, options): IPropertyResult => {
      return property(interfaceName, propertyName, type, options);
    },
  };
};

/**
 * Documentation helper function to document interfaces and properties.
 */
export const docsHelpers = {
  /**
   * Interface definition method.
   *
   * @param name The name of the interface we want to document.
   * @param description The description of the interface.
   */
  interface: (name: string, description?: string): IPropertyResult => {
    DocsStore.instance.defineInterface(name, description);

    return {
      property: (propertyName, type, options): IPropertyResult => {
        return property(name, propertyName, type, options);
      },
    };
  },

  property,
};
