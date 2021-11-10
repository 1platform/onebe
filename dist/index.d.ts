import { IInitStrategyOptions } from "./Authentication/Passport";
import "./custom";
/**
 * Framework configuration options.
 */
export interface IOneBEOptions extends IInitStrategyOptions {
    /**
     * The folder in which the application runs.
     */
    currentDir?: string;
    /**
     * The configuration directory.
     */
    configDir?: string;
    /**
     * The controllers directory.
     */
    controllersDir?: string;
}
/**
 * Framework init function. It initializes some elements of the framework
 * to be later used when starting the application up.
 *
 * @param props The various properties you can pass to the init function.
 */
export default function init(props: IOneBEOptions): Promise<() => Promise<void>>;
