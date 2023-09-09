import { dump, DumpOptions, load } from "js-yaml";

export function JS2YAML(object: any, options?: DumpOptions): string {
  return dump(object, options);
}

export function YAML2JS<T = any>(object: string): T {
  return load(object) as T;
}
