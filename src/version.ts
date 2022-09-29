import buildId from "./build";

/**
 * The codename of the current version framework.
 */
export const codename = "Rebuild";
/**
 * The version of the framework.
 */
export const version = "2.1.5";

/**
 * Function that returns the full version string (version + buildId).
 */
export function getVersion(): string {
  return `${ version }-${ buildId }`;
}

/**
 * Function that returns the codename of the framework.
 */
export function getCodename(): string {
  return codename;
}

/**
 * Function that returns the version and codename of the framework.
 */
export function getVersionCodename(): string {
  return `${ getVersion() } (${ getCodename() })`;
}
