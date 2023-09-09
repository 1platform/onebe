import { config } from "dotenv";
import { resolve } from "node:path";

config();

/**
 * Class used to interact with the environment variables. Use the object exported by this module to get
 * various environment variable values.
 */
export class Environment {
  /**
   * Returns the list of exposed ENV variables.
   */
  public get keys(): Array<string> {
    return Object.keys(process.env);
  }

  /**
   * Reload the environment variables from the given file.
   *
   * @param [file] The file containing the environment variables.
   */
  public reload(file = ".env") {
    config({ override: true, path: resolve(file) });
  }

  /**
   * Returns the value of a given environment variable.
   *
   * @param field The name of the environmental variable.
   * @param [defaultValue] The default value if the variable doesn't exist.
   */
  public get(field: string, defaultValue = null): string | null {
    return process.env[field] || defaultValue;
  }

  /**
   * Returns the integer value of a given environment variable.
   *
   * @param field The name of the environmental variable.
   * @param [defaultValue] The default value if the variable doesn't exist.
   */
  public int(field: string, defaultValue = 0): number {
    return parseInt(this.get(field)) || Math.floor(defaultValue);
  }

  /**
   * Returns the number value of a given environment variable.
   *
   * @param field The name of the environmental variable.
   * @param [defaultValue] The default value if the variable doesn't exist.
   */
  public number(field: string, defaultValue = 0): number {
    return Number(this.get(field)) || defaultValue;
  }

  /**
   * Returns the boolean value of a given environment variable.
   *
   * @param field The name of the flag.
   */
  public boolean(field: string): boolean {
    const fieldValue = this.get(field) || "";
    return fieldValue.toUpperCase() === "TRUE";
  }

  /**
   * Returns the array value of a given environment variable.
   *
   * @param field The name of the environmental variable.
   * @param [separator] The separator used to split an array defined as a string.
   * @param [defaultValue] The default value if the variable doesn't exist.
   */
  public array(field: string, separator = ",", defaultValue = ""): string[] {
    return this.get(field, defaultValue)
      .split(separator)
      .map((item) => item.trim());
  }

  /**
   * An alias for the getEnv().get method.
   *
   * @param field The name of the environmental variable.
   * @param [defaultValue] The default value if the variable doesn't exist.
   */
  public string(field: string, defaultValue = ""): string {
    return this.get(field) || defaultValue;
  }

  /**
   * An alias for the getEnv().bool method.
   *
   * @param flagName The name of the flag.
   */
  public flag(flagName: string): boolean {
    return this.boolean(flagName);
  }

  /**
   * Returns a valid URL value of a given environment variable.
   *
   * @param field The name of the flag.
   * @param [defaultValue] The default value if the variable doesn't exist.
   */
  public url(field: string, defaultValue = ""): string {
    return (this.get(field) || defaultValue).replace(/(https?:\/\/)|(\/)+/g, "$1$2");
  }
}

/**
 * The global instance of the Environment handling object.
 */
const environment = new Environment();
global.ENV = environment;

/**
 * Function used to get the Environment handling object instance.
 */
export const getEnv = (): Environment => environment;
