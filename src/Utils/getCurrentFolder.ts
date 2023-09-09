import * as path from "node:path";
import { fileURLToPath } from "node:url";

export default function getCurrentFolder(moduleImport: string): string {
  return path.dirname(fileURLToPath(moduleImport));
}
