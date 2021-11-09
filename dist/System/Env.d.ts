/**
 * The environment handling class. Use the object exported
 * by the module to get various environment variable values.
 */
declare class Environment {
    /**
     * Returns the value of a given environment variable.
     *
     * @param {string} field The name of the environment variable.
     * @param {string|null} [defaultValue] The default value if the variable doesn't exists.
     *
     * @return string
     */
    get(field: string, defaultValue?: any): string | null;
    /**
     * Returns the integer value of a given environment variable.
     *
     * @param {string} field The name of the envionmental variable.
     * @param {number|null} [defaultValue] The default value if the variable doesn't exists.
     *
     * @return number
     */
    int(field: string, defaultValue?: number): number;
    /**
     * Returns the boolean value of a given environment variable.
     *
     * @param {string} field The name of the flag.
     *
     * @return boolean
     */
    boolean(field: string): boolean;
    /**
     * An alias for the Env.get method.
     *
     * @param {string} field The name of the environment variable.
     * @param {string} [defaultValue] The default value if the variable doesn't exists.
     *
     * @return string
     */
    string(field: string, defaultValue?: string): string;
    /**
     * An alias for the Env.bool method.
     *
     * @param {string} flagName The name of the flag.
     *
     * @return boolean
     */
    flag(flagName: string): boolean;
}
declare const Env: Environment;
export default Env;
