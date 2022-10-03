import path from "path";
import fs from "fs";
import chalk from "chalk";
import { getDefaultLogger } from "../../System/Logger";
import Config from "../../System/Config";

/**
 * Gets contents of the service file.
 *
 * @param serviceName The name of the service.
 * @param [options] Options used to enable/disable various functionalities in the generated service.
 */
function getServiceTemplate(serviceName: string, options: Record<string, string | boolean | string[]> = {}): string {
  const baseImport = [];
  let serviceBaseName = "ServiceBase";
  let serviceBaseNameImport = "ServiceBase";
  const preClassData = [];
  const constructorData = [];
  let superParameters = "";

  if (options.repository) {
    switch (options.type) {
      case "full":
        serviceBaseName = `ServiceFullRepository<${ options.repository }>`;
        serviceBaseNameImport = `ServiceFullRepository`;
        break;
      case "read-only":
        serviceBaseName = `ServiceReadRepository<${ options.repository }>`;
        serviceBaseNameImport = `ServiceReadRepository`;
        break;
      case "basic":
      default:
        serviceBaseName = `ServiceWithRepository<${ options.repository }>`;
        serviceBaseNameImport = `ServiceWithRepository`;
        break;
    }

    const importPath = `${ Config.get("db.entities.folder").replace(/.\/src/gi, "@") }/${ options.repository }`;
    baseImport.push(`import ${ options.repository } from "${ importPath }";`);
    superParameters = `${ options.repository }`;
  }

  baseImport.unshift(`import { ${ serviceBaseNameImport } } from "onebe/Services";`);

  if (options.validator) {
    baseImport.unshift('import Joi from "joi";');
    preClassData.push("", `const ${ serviceName }Validator = Joi.object({});`);
    constructorData.push("", `     this.validator = ${ serviceName }Validator;`);
  }

  return `${ baseImport.join("\n") }

// -- Code to be executed before the Class Definition${ preClassData.join("\n") }

/**
 * Service ${ serviceName }
 *
 * Generated: ${ new Date().toISOString() }
 */
export default class ${ serviceName }Service extends ${ serviceBaseName } {
  public constructor() {
     super(${ superParameters });${ constructorData.join("\n") }
  }

  // Your code goes here
}
`;
}

/**
 * Add service to the Service Loader.
 *
 * @param serviceName The name of the service to be added.
 * @param folder The folder where you want to put the
 */
function addToIndex(serviceName: string, folder?: string): void {
  const servicesLoaderFile = path.resolve(Config.get("app.folders.services", "./"), `index.ts`);
  const servicesIndexLines = fs.readFileSync(servicesLoaderFile, "utf-8").split("\n").reverse();

  if (!folder) {
    folder = "";
  } else if (folder.split("").pop() !== "/") {
    folder = `${ folder }/`;
  }

  folder = folder.replace(/\\/gi, "/");
  const importPath = `${ Config.get("app.folders.services").replace(/.\/src/gi, "@") }/${ folder }${ serviceName }Service`;
  let importServiceIndex = servicesIndexLines.findIndex((line) => line.indexOf(importPath) >= 0);
  if (importServiceIndex < 0) {
    let lastIndexOfImport = servicesIndexLines.findIndex((line) => line.indexOf("import") >= 0);
    if (lastIndexOfImport < 0) {
      lastIndexOfImport = servicesIndexLines.length;
    }
    servicesIndexLines.splice(lastIndexOfImport, 0, `import ${ serviceName }Service from "${ importPath }";`);
  }

  importServiceIndex = servicesIndexLines.findIndex((line) => line.indexOf("ServiceLoader") >= 0);
  if (importServiceIndex < 0) {
    servicesIndexLines.splice(servicesIndexLines.length, 0, `import { ServiceLoader } from "onebe/Services";`);
  }

  importServiceIndex = servicesIndexLines.findIndex((line) => line.indexOf(`new ${ serviceName }Service()`) >= 0);
  if (importServiceIndex < 0) {
    let lastIndexOfImport = servicesIndexLines.findIndex((line) => line.indexOf("}") >= 0);
    if (lastIndexOfImport < 0) {
      lastIndexOfImport = 0;
    }
    servicesIndexLines.splice(lastIndexOfImport + 1, 0, `  ServiceLoader.set<${ serviceName }Service>(new ${ serviceName }Service());`);
  }

  fs.writeFileSync(servicesLoaderFile, servicesIndexLines.reverse().join("\n"), "utf-8");
}

/**
 * Function used to create a new service.
 *
 * @param serviceName The name of the service.
 * @param [options] Options used to enable/disable various functionalities in the generated service.
 */
export default function createServiceFile(serviceName: string, options?: Record<string, boolean | string | string[]>): void {
  if (serviceName.toLowerCase().indexOf("service") >= 0) {
    serviceName = serviceName.substring(0, serviceName.toLowerCase().indexOf("service"));
  }
  const serviceFile = path.resolve(Config.get("app.folders.services", "./"), ...((options?.folder as string[]) ?? []), `${ serviceName }Service.ts`);

  if (!fs.existsSync(path.dirname(serviceFile))) {
    fs.mkdirSync(path.dirname(serviceFile), { recursive: true });
  }

  if (fs.existsSync(serviceFile) && !options.override) {
    getDefaultLogger().error(`Service ${ chalk.blue(serviceFile) } already exists. Use the ${ chalk.blue("--override") } flag to replace the file.`);
    return;
  }

  const template = getServiceTemplate(serviceName, options || {});
  fs.writeFileSync(serviceFile, template, "utf-8");

  addToIndex(serviceName, ((options?.folder as string[]) ?? []).join("/"));
  getDefaultLogger().info(`Service ${ chalk.blue(serviceFile) } has been generated successfully.`);
}
