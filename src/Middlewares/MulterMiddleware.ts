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

export function getDestinationFolder(...pathLike: string[]) {
  return path.resolve(Config.string("upload.destination"), ...pathLike);
}

export const verifierURL = defineMiddleware(signature.verifier());
export const signURL = signature.sign.bind(signature);

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
