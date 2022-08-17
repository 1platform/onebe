import { ControllerDecoratorFunction } from "../../Router/RouteTypes";
import { Constructor } from "../MetadataTypes";
export declare function Controller<T extends Constructor>(name: string, description?: string): ControllerDecoratorFunction<T>;
export declare function Name<T extends Constructor>(name: string): ControllerDecoratorFunction<T>;
export declare function Description<T extends Constructor>(description?: string): ControllerDecoratorFunction<T>;
