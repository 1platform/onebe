import { RouteDecorator } from "../Router/RouteTypes";
/**
 * A list with all the options that you can pass to the sign method.
 */
export declare type SignMethodOptions = {
    /**
     * The method or a list of methods allowed to access the endpoint
     * secured by the signed URL.
     */
    method?: string | string[];
    /**
     * How many seconds should the URL be valid.
     */
    timeToLive?: number;
    /**
     * If you don't specify the Time To Live (TTL) parameter, you can specify a timestamp
     * at which the URL will not be valid.
     */
    expireAt?: number;
    /**
     * If specified, the URL will be valid only when this Address parameter is specified.
     */
    address?: string;
};
/**
 * Function used to get the destination folder/file from the upload destination folder.
 *
 * @param pathLike The list of path like elements.
 */
export declare function getDestinationFolder(...pathLike: string[]): string;
/**
 * Function used to create signed URLs.
 *
 * @param url The URL to be signed.
 * @param [options] The options used for the URL signing.
 *
 * @return {string}
 */
export declare const signURL: (url: string, options?: SignMethodOptions) => string;
/**
 * Decorator to add the Single file upload middleware.
 *
 * @decorator
 * @param fieldName The name of the field in the file uploader.
 */
export declare function SingleUpload(fieldName: string): RouteDecorator;
/**
 * Decorator to add the Multiple file upload with different names middleware.
 *
 * @decorator
 * @param names The names of the fields in the file uploader.
 */
export declare function NamedFilesUpload(...names: string[]): RouteDecorator;
/**
 * Decorator to add the Multiple file upload under the same name middleware.
 *
 * @decorator
 * @param fieldName The name of the field in the file uploader.
 */
export declare function ArrayUpload(fieldName: string): RouteDecorator;
/**
 * Middleware used to verify if a signed URL is valid.
 *
 * @decorator
 */
export declare function VerifyURL(): RouteDecorator;
