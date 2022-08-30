"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createServiceFile;

var _path = _interopRequireDefault(require("path"));

var _Config = _interopRequireDefault(require("../../System/Config"));

var _fs = _interopRequireDefault(require("fs"));

var _chalk = _interopRequireDefault(require("chalk"));

var _Logger = require("../../System/Logger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets contents of the service file.
 *
 * @param serviceName The name of the service.
 * @param [options] Options used to enable/disable various functionalities in the generated service.
 */
function getServiceTemplate(serviceName, options = {}) {
  const baseImport = ['import ServiceBase from "onebe/Services/ServiceBase";'];
  let serviceBaseName = "ServiceBase";
  const preClassData = [];
  const constructorData = [];
  let superParameters = "";

  if (options.repository) {
    switch (options.type) {
      case "full":
        serviceBaseName = `ServiceFullRepository<${options.repository}>`;
        baseImport[0] = 'import ServiceFullRepository from "onebe/Services/ServiceFullRepository";';
        break;

      case "read-only":
        serviceBaseName = `ServiceReadRepository<${options.repository}>`;
        baseImport[0] = 'import ServiceReadRepository from "onebe/Services/ServiceReadRepository";';
        break;

      case "basic":
      default:
        serviceBaseName = `ServiceWithRepository<${options.repository}>`;
        baseImport[0] = 'import ServiceWithRepository from "onebe/Services/ServiceWithRepository";';
        break;
    }

    const importPath = `${_Config.default.get("db.entities.folder").replace(/.\/src/gi, "@")}/${options.repository}`;
    baseImport.push(`import ${options.repository} from "${importPath}";`);
    superParameters = `${options.repository}`;
  }

  if (options.validator) {
    baseImport.unshift('import Joi from "joi";');
    preClassData.push("", `const ${serviceName}Validator = Joi.object({});`);
    constructorData.push("", `     this.validator = ${serviceName}Validator;`);
  }

  return `${baseImport.join("\n")}

// -- Code to be executed before the Class Definition${preClassData.join("\n")}

/**
 * Model ${serviceName}
 *
 * Generated: ${new Date().toISOString()}
 */
export default class ${serviceName}Service extends ${serviceBaseName} {
  public constructor() {
     super(${superParameters});${constructorData.join("\n")}
  }

  // Your code goes here
}
`;
}
/**
 * Add service to the Service Loader.
 *
 * @param serviceName The name of the service to be added.
 */


function addToIndex(serviceName) {
  const servicesLoaderFile = _path.default.resolve(_Config.default.get("app.folders.services", "./"), `index.ts`);

  const servicesIndexLines = _fs.default.readFileSync(servicesLoaderFile, "utf-8").split("\n").reverse();

  const importPath = `${_Config.default.get("app.folders.services").replace(/.\/src/gi, "@")}/${serviceName}Service`;
  let importServiceIndex = servicesIndexLines.findIndex(line => line.indexOf(importPath) >= 0);

  if (importServiceIndex < 0) {
    let lastIndexOfImport = servicesIndexLines.findIndex(line => line.indexOf("import") >= 0);

    if (lastIndexOfImport < 0) {
      lastIndexOfImport = servicesIndexLines.length;
    }

    servicesIndexLines.splice(lastIndexOfImport, 0, `import ${serviceName}Service from "${importPath}";`);
  }

  importServiceIndex = servicesIndexLines.findIndex(line => line.indexOf("onebe/Services/ServiceLoader") >= 0);

  if (importServiceIndex < 0) {
    servicesIndexLines.splice(servicesIndexLines.length, 0, `import ServiceLoader from "onebe/Services/ServiceLoader";`);
  }

  importServiceIndex = servicesIndexLines.findIndex(line => line.indexOf(`new ${serviceName}Service()`) >= 0);

  if (importServiceIndex < 0) {
    let lastIndexOfImport = servicesIndexLines.findIndex(line => line.indexOf("}") >= 0);

    if (lastIndexOfImport < 0) {
      lastIndexOfImport = 0;
    }

    servicesIndexLines.splice(lastIndexOfImport + 1, 0, `  ServiceLoader.set<${serviceName}Service>(new ${serviceName}Service());`);
  }

  _fs.default.writeFileSync(servicesLoaderFile, servicesIndexLines.reverse().join("\n"), "utf-8");
}
/**
 * Function used to create a new service.
 *
 * @param serviceName The name of the service.
 * @param [options] Options used to enable/disable various functionalities in the generated service.
 */


function createServiceFile(serviceName, options) {
  if (serviceName.toLowerCase().indexOf("service") >= 0) {
    serviceName = serviceName.substring(0, serviceName.toLowerCase().indexOf("service"));
  }

  const serviceFile = _path.default.resolve(_Config.default.get("app.folders.services", "./"), `${serviceName}Service.ts`);

  if (!_fs.default.existsSync(_path.default.dirname(serviceFile))) {
    _fs.default.mkdirSync(_path.default.dirname(serviceFile), {
      recursive: true
    });
  }

  if (_fs.default.existsSync(serviceFile) && !options.override) {
    (0, _Logger.getDefaultLogger)().error(`Service ${_chalk.default.blue(serviceFile)} already exists. Use the ${_chalk.default.blue("--override")} flag to replace the file.`);
    return;
  }

  const template = getServiceTemplate(serviceName, options || {});

  _fs.default.writeFileSync(serviceFile, template, "utf-8");

  addToIndex(serviceName);
  (0, _Logger.getDefaultLogger)().info(`Service ${_chalk.default.blue(serviceFile)} has been generated successfully.`);
}