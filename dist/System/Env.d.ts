/**
 * The environment handling class. Use the object exported
 * by the module to get various environment variable values.
 */
export declare class Environment {
    /**
     * Returns the value of a given environment variable.
     *
     * @param field The name of the environmental variable.
     * @param defaultValue The default value if the variable doesn't exists.
     */
    get(field: string, defaultValue?: any): string | null;
    /**
     * Returns the integer value of a given environment variable.
     *
     * @param field The name of the environmental variable.
     * @param defaultValue The default value if the variable doesn't exists.
     */
    int(field: string, defaultValue?: number): number;
    /**
     * Returns the number value of a given environment variable.
     *
     * @param field The name of the environmental variable.
     * @param defaultValue The default value if the variable doesn't exists.
     */
    number(field: string, defaultValue?: number): number;
    /**
     * Returns the boolean value of a given environment variable.
     *
     * @param field The name of the flag.
     */
    boolean(field: string): boolean;
    /**
     * An alias for the Env.get method.
     *
     * @param field The name of the environmental variable.
     * @param defaultValue The default value if the variable doesn't exists.
     */
    string(field: string, defaultValue?: string): string;
    /**
     * An alias for the Env.bool method.
     *
     * @param flagName The name of the flag.
     */
    flag(flagName: string): boolean;
}
declare const Env: Environment;
export default Env;
