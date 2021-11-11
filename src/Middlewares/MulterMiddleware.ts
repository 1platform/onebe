import multer from "multer";
import path from "path";
import signed from "signed";
import Route from "../Router/Route";
import { RouteDecorator } from "../Router/RouteTypes";
import { defineMiddleware } from "../Router/RouteUtils";
import Config from "../System/Config";

const upload = multer({
  dest: Config.string("upload.temp"),
});

const signature = signed({
  secret: Config.string("upload.secret"),
  ttl: 60,
});

/**
 * Sign method options.
 */
export type SignMethodOptions = {
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
export function getDestinationFolder(...pathLike: string[]) {
  return path.resolve(Config.string("upload.destination"), ...pathLike);
}

/**
 * Middleware used to verify if a signed URL is valid.
 *
 * @decorator
 * @param target The target on which we apply the decorator.
 * @param propertyKey The property key on which we apply the decorator.
 * @param descriptor The descriptor of the property we want to decorate.
 */
export const verifierURL = defineMiddleware(signature.verifier());

/**
 * Function used to create signed URLs.
 *
 * @param {string} url The URL to be signed.
 * @param {SignMethodOptions} [options] The options used for the URL signing.
 *
 * @return {string}
 */
export const signURL = signature.sign.bind(signature);

/**
 * Single file upload middleware.
 *
 * @decorator
 * @param fieldName The name of the field in the file uploader.
 */
export function singleUpload(fieldName: string): RouteDecorator {
  return (
    target: Route,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    const original = Array.isArray(descriptor.value)
      ? descriptor.value
      : [ descriptor.value ];
    descriptor.value = [ upload.single(fieldName), ...original ];
  };
}

/**
 * Multiple file upload middleware.
 *
 * @decorator
 * @param names The names of the fields in the file uploader.
 */
export function namedFiles(...names: string[]): RouteDecorator {
  return (
    target: Route,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    const original = Array.isArray(descriptor.value)
      ? descriptor.value
      : [ descriptor.value ];
    descriptor.value = [
      upload.fields(names.map((name) => ({ name, maxCount: 1 }))),
      ...original,
    ];
  };
}
