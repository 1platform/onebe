import Route from "../Router/Route";
import { RouteDecorator } from "../Router/RouteTypes";
/**
 * Sign method options.
 */
export declare type SignMethodOptions = {
    /**
     * if specified, only this method will be allowed
     * may be string of few methods separated by comma, or array of strings
     */
    method?: string | string[];
    /**
     * URL time to live.
     */
    ttl?: number;
    /**
     * Expiration timestamp (if ttl isn't specified)
     */
    exp?: number;
    /**
     * if set, only request from this address will be allowed
     */
    addr?: string;
};
/**
 * Function used to get the destination folder/file from the upload destination folder.
 *
 * @param pathLike The list of path like elements.
 */
export declare function getDestinationFolder(...pathLike: string[]): string;
/**
 * Middleware used to verify if a signed URL is valid.
 *
 * @decorator
 * @param target The target on which we apply the decorator.
 * @param propertyKey The property key on which we apply the decorator.
 * @param descriptor The descriptor of the property we want to decorate.
 */
export declare const verifierURL: RouteDecorator<Route>;
/**
 * Function used to create signed URLs.
 *
 * @param {string} url The URL to be signed.
 * @param {SignMethodOptions} [options] The options used for the URL signing.
 *
 * @return {string}
 */
export declare const signURL: any;
/**
 * Single file upload middleware.
 *
 * @decorator
 * @param fieldName The name of the field in the file uploader.
 */
export declare function singleUpload(fieldName: string): RouteDecorator;
/**
 * Multiple file upload middleware.
 *
 * @decorator
 * @param names The names of the fields in the file uploader.
 */
export declare function namedFiles(...names: string[]): RouteDecorator;
