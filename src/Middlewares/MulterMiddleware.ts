import multer from "multer";
import path from "path";
import Route from "@/Router/Route";
import { RouteDecorator } from "@/Router";
import Config from "@/System/Config";
import MetadataStore from "@/Documentation/MetadataStore";
import { BodyParameterType } from "@/Documentation";

/**
 * Upload middleware instance that can be used in your application.
 */
const upload = multer({
  dest: Config.string("upload.temp"),
});

/**
 * Type used to describe how an uploaded file should look like.
 */
export type UploadedFile = Express.Multer.File;

/**
 * Function used to get the destination folder/file from the upload destination folder.
 *
 * @param pathLike The list of path like elements.
 */
export function getDestinationFolder(...pathLike: string[]) {
  return path.resolve(Config.string("upload.destination"), ...pathLike);
}

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

// TODO: Add support to check if the uploaded file is: Of Type or With Max Size.
