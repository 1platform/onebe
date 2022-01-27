import buildId from "./build";

/**
 * The version codename of the framework.
 */
export const codename = "No one knows yet...";
/**
 * The version of the framework.
 */
export const version = "1.0.13";

/**
 * Function that returns the full version string (version + buildId)
 */
export default function getVersion(): string {
  return `${ version }-${ buildId }`;
}
