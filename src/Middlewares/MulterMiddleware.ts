import multer from "multer";
import path from "node:path";

import { BodyParameterType } from "@/Documentation";
import MetadataStore from "@/Documentation/MetadataStore";
import { RouteDecorator } from "@/Router";
import Route from "@/Router/Route";
import Config from "@/System/Config";
import { randomString } from "@/Utils";

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
 * Function used to get the destination getModuleFolder/file from the upload destination getModuleFolder.
 *
 * @param pathLike The list of path like elements.
 */
export function getDestinationFolder(...pathLike: string[]): string {
  return path.resolve(Config.string("upload.storage"), ...pathLike);
}

/**
 * Function used to get the temporary getModuleFolder/file.
 *
 * @param pathLike The list of path like elements.
 */
export function getTempFolder(...pathLike: string[]): string {
  return path.resolve(Config.string("upload.temp"), ...pathLike);
}

/**
 * Function used to get a temporary file/getModuleFolder.
 *
 * @param [extension] The extension of the file/getModuleFolder.
 */
export function getTempFile(extension?: string): string {
  const tempFile = getTempFolder(randomString(16));
  return extension ? `${ tempFile }.${ extension }` : tempFile;
}

/**
 * Decorator to add the Single file upload middleware.
 *
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
