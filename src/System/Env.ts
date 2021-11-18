import { config } from "dotenv";

config();

/**
 * The environment handling class. Use the object exported
 * by the module to get various environment variable values.
 */
export class Environment {
  /**
   * Returns the value of a given environment variable.
   *
   * @param field The name of the environmental variable.
   * @param defaultValue The default value if the variable doesn't exists.
   */
  public get(field: string, defaultValue = null): string | null {
    return process.env[field] || defaultValue;
  }

  /**
   * Returns the integer value of a given environment variable.
   *
   * @param field The name of the environmental variable.
   * @param defaultValue The default value if the variable doesn't exists.
   */
  public int(field: string, defaultValue = 0): number {
    return parseInt(this.get(field)) || Math.floor(defaultValue);
  }

  /**
   * Returns the number value of a given environment variable.
   *
   * @param field The name of the environmental variable.
   * @param defaultValue The default value if the variable doesn't exists.
   */
  public number(field: string, defaultValue = 0): number {
    return Number(this.get(field)) || Math.floor(defaultValue);
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
   * An alias for the Env.get method.
   *
   * @param field The name of the environmental variable.
   * @param defaultValue The default value if the variable doesn't exists.
   */
  public string(field: string, defaultValue = ""): string {
    return this.get(field) || defaultValue;
  }

  /**
   * An alias for the Env.bool method.
   *
   * @param flagName The name of the flag.
   */
  public flag(flagName: string): boolean {
    return this.boolean(flagName);
  }
}

const Env = new Environment();
global.env = Env;
export default Env;
