import { RouteDecorator } from "../../Router/RouteTypes";
import { Constructor } from "../MetadataTypes";
export declare function Controller<T extends Constructor>(name: string, description?: string): RouteDecorator;
export declare function Name<T extends Constructor>(name: string): RouteDecorator;
export declare function Description<T extends Constructor>(description?: string): RouteDecorator;
