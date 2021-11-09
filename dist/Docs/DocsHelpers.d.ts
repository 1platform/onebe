import { BodyParameterType } from "./DocsInterfaces";
export declare const docsHelpers: {
    interface: (name: string, description?: string) => any;
    property: (interfaceName: string, propertyName: string, type: BodyParameterType, { description, required, defaultValue }: {
        description?: string;
        required?: boolean;
        defaultValue?: string;
    }) => any;
};
