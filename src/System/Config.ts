import consign from "consign";
import { merge } from "lodash";
import defaultConfig from "../defaults";
import IConfig from "./IConfig";

class Configuration {
  private _config: IConfig = {};

  public constructor() {
    this.load(defaultConfig);
  }

  public clear(): void {
    this._config = {};
  }

  public init(configFolder = "./config"): void {
    const configFromFile = {};
    consign({
      cwd: process.cwd(),
      verbose: false,
      extensions: [ ".js", ".json", ".node", ".ts" ],
      loggingType: "info",
    })
      .include(configFolder)
      .into(configFromFile);

    this.load(configFromFile["config"]);
  }

  public load(configStore: IConfig): void {
    this._config = merge(this._config, configStore);
  }

  public get(key: string, defaultValue = null): string {
    const keySplit = key.split(".");

    const value = keySplit.reduce(
      (accum, value) => (!accum ? defaultValue : accum[value]),
      this._config
    );

    return value !== null && value !== undefined
      ? value.toString()
      : defaultValue;
  }

  public all(): IConfig {
    return this._config;
  }

  public string(key: string, defaultValue = ""): string {
    return this.get(key) || defaultValue;
  }

  public number(key: string, defaultValue = 0): number {
    return Number(this.get(key) || defaultValue);
  }

  public boolean(key: string): boolean {
    return this.get(key, "false").toUpperCase() === "TRUE";
  }
}

const Config = new Configuration();
export default Config;
