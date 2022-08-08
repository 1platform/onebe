import IAppInfo from "./IAppInfo";
import { Constructor } from "../Documentation/MetadataTypes";
/**
 * The ApplicationObject we support to be attached to the App instance.
 */
export declare type ApplicationObject = Constructor;
/**
 * The GenericFunction type we support to be attached to the App instance.
 */
export declare type GenericFunction = (...args: any) => any;
/**
 * Main App Definition class.
 */
export default class App {
    /**
     * Any extra object or function defined in the Application Object.
     */
    [key: string]: any;
    /**
     * A list with all the objects and functions attached to the application object.
     */
    private _elements;
    /**
     * Internal object used to get the information about the application.
     */
    private _appInfo;
    /**
     * Return the application information object.
     */
    get app(): IAppInfo;
    /**
     * Set the application information object.
     *
     * @param appInfo The new application information object.
     */
    set app(appInfo: IAppInfo);
    /**
     * Add an class instance to the application object.
     *
     * @param ElementInstance The class we want to create an object from and add to the application object.
     */
    use(ElementInstance: ApplicationObject): void;
    /**
     * Add a function to the application object.
     *
     * @param fn The function we want to attach to the application object.
     */
    hook(fn: GenericFunction): void;
}
