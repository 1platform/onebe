/**
 * Type used to define a Class with a constructor.
 */
export declare type Constructor<T = any> = {
    new (...args: any[]): T;
};
