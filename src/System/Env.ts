import { config } from "dotenv";

config();

/**
 * The environment handling class. Use the object exported
 * by the module to get various environment variable values.
 */
class Environment {
  /**
   * Returns the value of a given environment variable.
   *
   * @param {string} field The name of the environment variable.
   * @param {string|null} [defaultValue] The default value if the variable doesn't exists.
   *
   * @return string
   */
  public get(field: string, defaultValue = null): string | null {
    return process.env[field] || defaultValue;
  }

  /**
   * Returns the integer value of a given environment variable.
   *
   * @param {string} field The name of the envionmental variable.
   * @param {number|null} [defaultValue] The default value if the variable doesn't exists.
   *
   * @return number
   */
  public int(field: string, defaultValue = 0): number {
    return parseInt(this.get(field)) || Math.floor(defaultValue);
  }

  /**
   * Returns the boolean value of a given environment variable.
   *
   * @param {string} field The name of the flag.
   *
   * @return boolean
   */
  public boolean(field: string): boolean {
    const fieldValue = this.get(field) || "";
    return fieldValue.toUpperCase() === "TRUE";
  }

  /**
   * An alias for the Env.get method.
   *
   * @param {string} field The name of the environment variable.
   * @param {string} [defaultValue] The default value if the variable doesn't exists.
   *
   * @return string
   */
  public string(field: string, defaultValue = ""): string {
    return this.get(field) || defaultValue;
  }

  /**
   * An alias for the Env.bool method.
   *
   * @param {string} flagName The name of the flag.
   *
   * @return boolean
   */
  public flag(flagName: string): boolean {
    return this.boolean(flagName);
  }
}

const Env = new Environment();
global.env = Env;
export default Env;
