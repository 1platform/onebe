import { BodyParameterType } from "./DocsInterfaces";
import DocsStore from "./DocsStore";


const property = (
  interfaceName: string,
  propertyName: string,
  type: BodyParameterType,
  { description = "", required = true, defaultValue = "" }
): any => {
  DocsStore.instance.addInterfaceProperty(interfaceName, {
    name: propertyName,
    type,
    description: description || "",
    required: required ?? true,
    default: defaultValue || undefined,
  });

  return {
    property: (propertyName, type, options) => {
      return property(interfaceName, propertyName, type, options);
    },
  };
};

export const docsHelpers = {
  interface: (name: string, description?: string): any => {
    DocsStore.instance.defineInterface(name, description);

    return {
      property: (propertyName, type, options) => {
        return property(name, propertyName, type, options);
      },
    };
  },
  property,
};
