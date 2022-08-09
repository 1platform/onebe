import HTTPStatus from "../../../HTTP/HTTPStatus";
import { ResponseValue, RouteDecorator } from "../../../Router/RouteTypes";
export declare function Throws<Response = any>(errorCode: HTTPStatus, description: string, response?: ResponseValue<Response>): RouteDecorator;
