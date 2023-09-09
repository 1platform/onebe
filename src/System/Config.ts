import merge from "lodash/merge";
import { readdirSync } from "node:fs";
import { basename, extname, resolve } from "node:path";

import defaultConfig from "@/defaults";
import IConfig from "@/System/IConfig";

/**
 * Configuration store, used to fetch (and store) configuration parameters that
 * can be used to enable/disable or setup various functionalities of the
 * application.
 */
export class Configuration {
  /**
   * The internal configuration store.
   */
  protected _config: IConfig = {};

  /**
   * Constructor of the configuration class.
   */
  public constructor() {
    this.load(defaultConfig);
  }

  /**
   * Clears the internal configuration store.
   */
  public clear(): void {
    this._config = {};
  }

  /**
   * Initializes the configuration object with values from the
   * configuration getModuleFolder.
   *
   * @param configFolder The getModuleFolder containing the configuration files.
   */
  public async init(configFolder = "./config"): Promise<void> {
    const configFromFile: Record<string, any> = {};

    const resolvedConfigFolder = resolve(configFolder);
    const files = readdirSync(resolvedConfigFolder).filter((file) => [ ".js", ".json", ".ts" ].includes(extname(file)));
    for (const file of files) {
      const baseConfigName = basename(file);
      const fileContent = await import(file);
      configFromFile[baseConfigName] = fileContent.default ?? fileContent;
    }

    this.load(configFromFile);
  }

  /**
   * Loads configuration items into our application.
   *
   * @param configStore The configuration store that we want to merge into the local config.
   */
  public load(configStore: IConfig): void {
    this._config = merge(this._config, configStore);
  }

  /**
   * Returns the string value of the given configuration key.
   *
   * @param key The configuration key.
   * @param defaultValue The default value if the configuration key doesn't exists.
   */
  public get(key: string, defaultValue = null): string {
    const keySplit = key.split(".");

    const value = keySplit.reduce((accum, value) => (!accum ? defaultValue : accum[value]), this._config);

    return value !== null && value !== undefined ? value.toString() : defaultValue;
  }

  /**
   * Returns the object value of the given configuration key.
   *
   * @param key The configuration key.
   * @param defaultValue The default value if the configuration key doesn't exists.
   */
  public object<Value = any>(key: string, defaultValue = null): Record<string, Value> {
    const keySplit = key.split(".");

    const value = keySplit.reduce((accum, value) => (!accum ? defaultValue : accum[value]), this._config);

    return value ?? defaultValue;
  }

  /**
   * Returns the array value of the given configuration key.
   *
   * @param key The configuration key.
   * @param defaultValue The default value if the configuration key doesn't exist.
   */
  public array<T = string>(key: string, defaultValue = null): Array<T> {
    const keySplit = key.split(".");

    const value = keySplit.reduce((accum, value) => (!accum ? defaultValue : accum[value]), this._config) as T[];

    return value ?? defaultValue;
  }

  /**
   * Returns all the configuration properties.
   */
  public all(): IConfig {
    return this._config;
  }

  /**
   * Returns the string value of the given configuration key.
   *
   * @param key The configuration key.
   * @param defaultValue The default value if the configuration key doesn't exists.
   */
  public string(key: string, defaultValue = ""): string {
    return this.get(key) || defaultValue;
  }

  /**
   * Returns the numeric value of the given configuration key.
   *
   * @param key The configuration key.
   * @param defaultValue The default value if the configuration key doesn't exists.
   */
  public number(key: string, defaultValue = 0): number {
    return Number(this.get(key) || defaultValue);
  }

  /**
   * Returns the boolean value of the given configuration key.
   *
   * @param key The configuration key.
   */
  public boolean(key: string): boolean {
    return this.get(key, "false").toUpperCase() === "TRUE";
  }

  /**
   * Returns a valid URL value of the given configuration key.
   *
   * @param field The name of the field.
   * @param defaultValue The default value if the variable doesn't exist.
   */
  public url(field: string, defaultValue = ""): string {
    return (this.get(field) || defaultValue).replace(/(https?:\/\/)|(\/)+/g, "$1$2");
  }
}

const Config = new Configuration();
global.config = Config;
export default Config;
