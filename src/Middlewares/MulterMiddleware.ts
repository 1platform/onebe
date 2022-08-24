import multer from "multer";
import path from "path";
import signed from "signed";
import Route from "../Router/Route";
import { RouteDecorator } from "../Router/RouteTypes";
import Config from "../System/Config";
import MetadataStore from "../Documentation/MetadataStore";
import { BodyParameterType, QueryParameterType } from "../Documentation/Definition/DataTypes";

/**
 * Upload middleware instance that can be used in your application.
 */
const upload = multer({
  dest: Config.string("upload.temp"),
});

/**
 * Instance of the URL signing utility that can be used to sign requests that
 * return a file - for the situations where the file is available only if the
 * user is authenticated.
 */
const signature = signed({
  secret: Config.string("upload.secret"),
  ttl: 60,
});

/**
 * A list with all the options that you can pass to the sign method.
 */
export type SignMethodOptions = {
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
export function getDestinationFolder(...pathLike: string[]) {
  return path.resolve(Config.string("upload.destination"), ...pathLike);
}

/**
 * Function used to create signed URLs.
 *
 * @param url The URL to be signed.
 * @param [options] The options used for the URL signing.
 *
 * @return {string}
 */
export const signURL = (url: string, options?: SignMethodOptions): string =>
  signature.sign(url, {
    method: options?.method,
    ttl: options?.timeToLive,
    exp: options?.expireAt,
    addr: options?.address,
  });

/**
 * Decorator to add the Single file upload middleware.
 *
 * @decorator
 * @param fieldName The name of the field in the file uploader.
 */
export function SingleUpload(fieldName: string): RouteDecorator {
  return (target: Route, propertyKey: string, descriptor: PropertyDescriptor) => {
    const original = Array.isArray(descriptor.value) ? descriptor.value : [ descriptor.value ];
    MetadataStore.instance.route.isUpload(target.constructor.name, propertyKey);
    MetadataStore.instance.route.endpointBodyParameters(target.constructor.name, propertyKey, [ { name: fieldName, type: BodyParameterType.FILE } ]);
    descriptor.value = [ upload.single(fieldName), ...original ];
  };
}

/**
 * Decorator to add the Multiple file upload with different names middleware.
 *
 * @decorator
 * @param names The names of the fields in the file uploader.
 */
export function NamedFilesUpload(...names: string[]): RouteDecorator {
  return (target: Route, propertyKey: string, descriptor: PropertyDescriptor) => {
    const original = Array.isArray(descriptor.value) ? descriptor.value : [ descriptor.value ];
    MetadataStore.instance.route.isUpload(target.constructor.name, propertyKey, true);
    names.map((name) => {
      MetadataStore.instance.route.endpointBodyParameters(target.constructor.name, propertyKey, [ { name, type: BodyParameterType.FILE } ]);
    });
    descriptor.value = [ upload.fields(names.map((name) => ({ name, maxCount: 1 }))), ...original ];
  };
}

/**
 * Decorator to add the Multiple file upload under the same name middleware.
 *
 * @decorator
 * @param fieldName The name of the field in the file uploader.
 */
export function ArrayUpload(fieldName: string): RouteDecorator {
  return (target: Route, propertyKey: string, descriptor: PropertyDescriptor) => {
    const original = Array.isArray(descriptor.value) ? descriptor.value : [ descriptor.value ];
    MetadataStore.instance.route.isUpload(target.constructor.name, propertyKey, true);
    MetadataStore.instance.route.endpointBodyParameters(target.constructor.name, propertyKey, [
      { name: fieldName, type: BodyParameterType.FILE, isArray: true },
    ]);
    descriptor.value = [ upload.array(fieldName), ...original ];
  };
}

/**
 * Middleware used to verify if a signed URL is valid.
 *
 * @decorator
 */
export function VerifyURL(): RouteDecorator {
  return (target: Route, propertyKey: string, descriptor: PropertyDescriptor) => {
    const original = Array.isArray(descriptor.value) ? descriptor.value : [ descriptor.value ];
    MetadataStore.instance.route.isSigned(target.constructor.name, propertyKey);
    MetadataStore.instance.route.endpointQuery(target.constructor.name, propertyKey, {
      name: "signed",
      type: QueryParameterType.STRING,
      description: "The hash required to verify if the signed URL is valid.",
    });
    descriptor.value = [ signature.verifier(), ...original ];
  };
}

// TODO: Add support to check if the uploaded file is: Of Type or With Max Size.
