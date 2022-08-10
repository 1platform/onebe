import { IBodyDoc, IInterfaceDoc, TRoutesList } from "./DocsInterfaces";
/**
 * Class representing the Docs store
 */
export default class DocsStore {
    /**
     * The list of routes
     */
    protected _routes: TRoutesList;
    /**
     * The list of interfaces
     */
    protected _interfaces: Record<string, IInterfaceDoc>;
    /**
     * The constructor of the Docs store
     */
    private constructor();
    /**
     * The Docs store instance
     */
    protected static _instance: DocsStore;
    /**
     * Get method to retrieve the Docs store instance
     */
    static get instance(): DocsStore;
    /**
     * Method used to initialize a Group
     *
     * @param name The name
     * @param basePath The base path
     * @param description The description
     * @param isAPI If it is an API
     */
    initGroup(name: string, basePath: string, description?: string, isAPI?: boolean): void;
    /**
     * Method used to set a Group item
     *
     * @param name The name
     * @param key The key (description or name)
     * @param value The value to be set
     */
    setGroupItem(name: string, key: string, value: string): void;
    /**
     * Method to get the routes
     */
    getRoutes(): any;
    /**
     * Method to get docs in YAML format
     */
    getYaml(): string;
    /**
     * Method for defining an Interface
     *
     * @param name The name of the interface
     * @param description The description
     */
    defineInterface(name: string, description?: string): void;
    /**
     * Method for adding interface property
     *
     * @param interfaceName The name of the Interface
     * @param definition The definition of the property
     */
    addInterfaceProperty(interfaceName: string, definition: IBodyDoc): void;
}
