import { HTTPMiddleware } from "../HTTP/HTTPTypes";
import { AppMethod } from "./RouteTypes";
/**
 * The response object that can be returned from an endpoint method.
 */
export interface IResponse<TResponse> {
    /**
     * Status code of the response.
     */
    statusCode?: number;
    /**
     * The response body.
     */
    body?: TResponse;
    /**
     * The file a user can download.
     */
    file?: boolean;
    /**
     * The content type of the response.
     */
    contentType?: string;
}
/**
 * The return object contents of the callback extractor function.
 */
export interface ICallbackExtracted<Request = any, Response = any> {
    /**
     * The route endpoint callback.
     */
    callback: AppMethod<Request, Response>;
    /**
     * A list of middlewares applied to the route endpoint.
     */
    middlewares?: Array<HTTPMiddleware>;
}
