import Route from "../Router/Route";
export declare const jwt: (target: Route, propertyKey: string, descriptor: PropertyDescriptor) => void;
export declare const basic: (target: Route, propertyKey: string, descriptor: PropertyDescriptor) => void;
export declare const extractUser: import("../Router/RouteTypes").RouteDecorator<Route>;
