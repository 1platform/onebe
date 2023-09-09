import { statSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { basename, dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import HTTPError from "@/Exceptions/HTTPError";
import InvalidFilterDefinitionException from "@/Exceptions/Utils/InvalidFilterDefinitionException";
import UnableToReadFolderException from "@/Exceptions/Utils/UnableToReadFolderException";
import { getDefaultLogger } from "@/System/Logger";
import { IFilterDefinition } from "@/Utils/FileSystemInterfaces";

/**
 * Returns the full folder path to the module from the URL passed as input.
 *
 * @param metaURL The URL to the module (import.meta.url).
 */
export function getModuleFolder(metaURL: string): string {
  return dirname(fileURLToPath(metaURL));
}

/**
 * Returns the name of the module from the URL passed as input.
 *
 * @param metaURL The URL to the module (import.meta.url).
 */
export function getModuleName(metaURL: string): string {
  return basename(fileURLToPath(metaURL));
}

/**
 * Returns the contents of a given folder.
 *
 * @param folder The path to the desired folder.
 */
export async function getFolderContents(folder: string): Promise<Array<string>> {
  try {
    const resolvedFolder = resolve(folder);
    const files = await readdir(resolvedFolder);
    return files.map((file) => join(resolvedFolder, file));
  } catch (err) {
    getDefaultLogger().silly(`[FRAMEWORK]: ${ err.message }`);
    throw new UnableToReadFolderException(folder);
  }
}

/**
 * Function used to validate filter definition objects.
 *
 * @param filter The filter to be validated.
 */
function validateFilter(filter: IFilterDefinition): void {
  if (filter.isFile === undefined && filter.isFolder === undefined && filter.extensions === undefined) {
    getDefaultLogger().debug(`[FRAMEWORK]: You need at least one filter to be defined.`);
    throw new InvalidFilterDefinitionException();
  }
  if (filter.isFolder && filter.isFile) {
    getDefaultLogger().debug(`[FRAMEWORK]: You cannot have folder and file filters in the same filter.`);
    throw new InvalidFilterDefinitionException();
  }
}

/**
 * Get the contents of a folder, filtered based on a list of filters passed as parameter.
 *
 * @param folder The folder for which we want the contents.
 * @param [filters] The filters to be applied to the contents.
 */
export async function getFilteredFolderContents(folder: string, filters?: Array<IFilterDefinition>): Promise<Array<string>> {
  try {
    let contents = await getFolderContents(folder);
    filters = filters || [];
    for (const filter of filters) {
      validateFilter(filter);

      if (filter.extensions) {
        contents = contents.filter((fullFilePath) => filter.extensions.includes(extname(fullFilePath)));
      }

      if (filter.isFolder) {
        contents = contents.filter((fullFilePath) => statSync(fullFilePath).isDirectory());
      }

      if (filter.isFile) {
        contents = contents.filter((fullFilePath) => statSync(fullFilePath).isFile());
      }
    }

    return contents;
  } catch (err) {
    if (err instanceof HTTPError) {
      throw err;
    }
    getDefaultLogger().debug(`[FRAMEWORK]: ${ err.message }`);
    throw new UnableToReadFolderException(folder);
  }
}
