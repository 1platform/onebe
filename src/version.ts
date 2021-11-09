import buildId from "./build";

export const codename = "No one knows yet...";
export const version = "0.1.0";

export default function getVersion(): string {
  return `${ version }-${ buildId }`;
}
