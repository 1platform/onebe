import Route from "../Router/Route";
import { RouteDecorator } from "../Router/RouteTypes";
export declare function getDestinationFolder(...pathLike: string[]): string;
export declare const verifierURL: RouteDecorator<Route>;
export declare const signURL: any;
export declare function singleUpload(fieldName: string): RouteDecorator;
export declare function namedFiles(...names: string[]): RouteDecorator;
