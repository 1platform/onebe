"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createJobFile;

var _path = _interopRequireDefault(require("path"));

var _Config = _interopRequireDefault(require("../../System/Config"));

var _fs = _interopRequireDefault(require("fs"));

var _chalk = _interopRequireDefault(require("chalk"));

var _Logger = require("../../System/Logger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets contents of the job file.
 *
 * @param jobName The name of the job.
 * @param [options] Options used to enable/disable various functionalities in the generated job.
 */
function getJobTemplate(jobName, options = {}) {
  return `import app from "onebe/App";

/**
 * Job ${jobName}
 *
 * Generated: ${new Date().toISOString()}
 */
export default function ${jobName}Job(): void {
  /**
   * TODO: Set the execution time. Now it will execute every minute.
   */
  app.Scheduler.register("* * * * *", async (): Promise<void> => {
    // TODO: Add code...
  });
}`;
}
/**
 * Add job to the Jobs Loader.
 *
 * @param jobName The name of the job to be added.
 */


function addToIndex(jobName) {
  const jobsLoaderFile = _path.default.resolve(_Config.default.get("app.folders.jobs", "./"), `index.ts`);

  const jobsIndexLines = _fs.default.readFileSync(jobsLoaderFile, "utf-8").split("\n").reverse();

  const importPath = `${_Config.default.get("app.folders.jobs", "./").replace(/.\/src/gi, "@")}/${jobName}Job`;
  let importServiceIndex = jobsIndexLines.findIndex(line => line.indexOf(importPath) >= 0);

  if (importServiceIndex < 0) {
    let lastIndexOfImport = jobsIndexLines.findIndex(line => line.indexOf("import") >= 0);

    if (lastIndexOfImport < 0) {
      jobsIndexLines.push("");
      lastIndexOfImport = jobsIndexLines.length;
    }

    jobsIndexLines.splice(lastIndexOfImport, 0, `import ${jobName}Job from "${importPath}";`);
  }

  importServiceIndex = jobsIndexLines.findIndex(line => line.indexOf(`${jobName}Job()`) >= 0);

  if (importServiceIndex < 0) {
    let lastIndexOfImport = jobsIndexLines.findIndex(line => line.indexOf("}") >= 0);

    if (lastIndexOfImport < 0) {
      lastIndexOfImport = 0;
    }

    jobsIndexLines.splice(lastIndexOfImport + 1, 0, `  ${jobName}Job();`);
  }

  _fs.default.writeFileSync(jobsLoaderFile, jobsIndexLines.reverse().join("\n"), "utf-8");
}
/**
 * Function used to create a new job.
 *
 * @param jobName The name of the job.
 * @param [options] Options used to enable/disable various functionalities in the generated job.
 */


function createJobFile(jobName, options) {
  if (jobName.toLowerCase().indexOf("job") >= 0) {
    jobName = jobName.substring(0, jobName.toLowerCase().indexOf("job"));
  }

  const jobFile = _path.default.resolve(_Config.default.get("app.folders.jobs", "./"), `${jobName}Job.ts`);

  if (!_fs.default.existsSync(_path.default.dirname(jobFile))) {
    _fs.default.mkdirSync(_path.default.dirname(jobFile), {
      recursive: true
    });
  }

  if (_fs.default.existsSync(jobFile) && !options.override) {
    (0, _Logger.getDefaultLogger)().error(`Job ${_chalk.default.blue(jobFile)} already exists. Use the ${_chalk.default.blue("--override")} flag to replace the file.`);
    return;
  }

  const template = getJobTemplate(jobName, options || {});

  _fs.default.writeFileSync(jobFile, template, "utf-8");

  addToIndex(jobName);
  (0, _Logger.getDefaultLogger)().info(`Job ${_chalk.default.blue(jobFile)} has been generated successfully.`);
}