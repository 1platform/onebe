import { Constructor, ControllerDecorator, ControllerDecoratorFunction } from "./RouteTypes";
export declare function path<T extends Constructor>(path: string, name?: string, description?: string): ControllerDecoratorFunction<T>;
export declare function api<T extends Constructor>(BaseClass: T): ControllerDecorator<T>;
