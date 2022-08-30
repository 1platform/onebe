/**
 * Type used to define a Class with a constructor.
 */
export type Constructor<T = any> = { new (...args: any[]): T };
