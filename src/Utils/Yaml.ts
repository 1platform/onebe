import { dump, DumpOptions, load } from "js-yaml";

/**
 * Converts a Javascript Object to YAML.
 *
 * @param object The object to be converted.
 * @param [options] Various options to pass to the YAML converter.
 */
export function JS2YAML(object: any, options?: DumpOptions): string {
  return dump(object, options);
}

/**
 * Function used to convert a YAML string to a Javascript Object.
 *
 * @param yamlString The YAML string to be converted.
 */
export function YAML2JS<T = any>(yamlString: string): T {
  return load(yamlString) as T;
}
