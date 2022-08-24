import IConfig from "./IConfig";
/**
 * Configuration store, used to fetch (and store) configuration parameters that
 * can be used to enable/disable or setup various functionalities of the
 * application.
 */
export declare class Configuration {
    /**
     * The internal configuration store.
     */
    protected _config: IConfig;
    /**
     * Constructor of the configuration class.
     */
    constructor();
    /**
     * Clears the internal configuration store.
     */
    clear(): void;
    /**
     * Initializes the configuration object with values from the
     * configuration folder.
     *
     * @param configFolder The folder containing the configuration files.
     */
    init(configFolder?: string): void;
    /**
     * Loads configuration items into our application.
     *
     * @param configStore The configuration store that we want to merge into the local config.
     */
    load(configStore: IConfig): void;
    /**
     * Returns the string value of the given configuration key.
     *
     * @param key The configuration key.
     * @param defaultValue The default value if the configuration key doesn't exists.
     */
    get(key: string, defaultValue?: any): string;
    /**
     * Returns the object value of the given configuration key.
     *
     * @param key The configuration key.
     * @param defaultValue The default value if the configuration key doesn't exists.
     */
    object(key: string, defaultValue?: any): Record<string, unknown>;
    /**
     * Returns the array value of the given configuration key.
     *
     * @param key The configuration key.
     * @param defaultValue The default value if the configuration key doesn't exists.
     */
    array(key: string, defaultValue?: any): Array<unknown>;
    /**
     * Returns all the configuration properties.
     */
    all(): IConfig;
    /**
     * Returns the string value of the given configuration key.
     *
     * @param key The configuration key.
     * @param defaultValue The default value if the configuration key doesn't exists.
     */
    string(key: string, defaultValue?: string): string;
    /**
     * Returns the numeric value of the given configuration key.
     *
     * @param key The configuration key.
     * @param defaultValue The default value if the configuration key doesn't exists.
     */
    number(key: string, defaultValue?: number): number;
    /**
     * Returns the boolean value of the given configuration key.
     *
     * @param key The configuration key.
     */
    boolean(key: string): boolean;
}
declare const Config: Configuration;
export default Config;
