import path from "path";
import fs from "fs";
import chalk from "chalk";
import { Config, getDefaultLogger } from "../../System";

/**
 * Gets contents of the job file.
 *
 * @param jobName The name of the job.
 * @param [options] Options used to enable/disable various functionalities in the generated job.
 */
function getJobTemplate(jobName: string, options: Record<string, string | boolean> = {}): string {
  return `import app from "onebe/App";

/**
 * Job ${ jobName }
 *
 * Generated: ${ new Date().toISOString() }
 */
export default function ${ jobName }Job(): void {
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
function addToIndex(jobName: string): void {
  const jobsLoaderFile = path.resolve(Config.get("app.folders.jobs", "./"), `index.ts`);
  const jobsIndexLines = fs.readFileSync(jobsLoaderFile, "utf-8").split("\n").reverse();

  const importPath = `${ Config.get("app.folders.jobs", "./").replace(/.\/src/gi, "@") }/${ jobName }Job`;

  let importServiceIndex = jobsIndexLines.findIndex((line) => line.indexOf(importPath) >= 0);
  if (importServiceIndex < 0) {
    let lastIndexOfImport = jobsIndexLines.findIndex((line) => line.indexOf("import") >= 0);
    if (lastIndexOfImport < 0) {
      jobsIndexLines.push("");
      lastIndexOfImport = jobsIndexLines.length;
    }
    jobsIndexLines.splice(lastIndexOfImport, 0, `import ${ jobName }Job from "${ importPath }";`);
  }

  importServiceIndex = jobsIndexLines.findIndex((line) => line.indexOf(`${ jobName }Job()`) >= 0);
  if (importServiceIndex < 0) {
    let lastIndexOfImport = jobsIndexLines.findIndex((line) => line.indexOf("}") >= 0);
    if (lastIndexOfImport < 0) {
      lastIndexOfImport = 0;
    }
    jobsIndexLines.splice(lastIndexOfImport + 1, 0, `  ${ jobName }Job();`);
  }

  fs.writeFileSync(jobsLoaderFile, jobsIndexLines.reverse().join("\n"), "utf-8");
}

/**
 * Function used to create a new job.
 *
 * @param jobName The name of the job.
 * @param [options] Options used to enable/disable various functionalities in the generated job.
 */
export default function createJobFile(jobName: string, options?: Record<string, boolean | string>): void {
  if (jobName.toLowerCase().indexOf("job") >= 0) {
    jobName = jobName.substring(0, jobName.toLowerCase().indexOf("job"));
  }
  const jobFile = path.resolve(Config.get("app.folders.jobs", "./"), `${ jobName }Job.ts`);

  if (!fs.existsSync(path.dirname(jobFile))) {
    fs.mkdirSync(path.dirname(jobFile), { recursive: true });
  }

  if (fs.existsSync(jobFile) && !options.override) {
    getDefaultLogger().error(`Job ${ chalk.blue(jobFile) } already exists. Use the ${ chalk.blue("--override") } flag to replace the file.`);
    return;
  }

  const template = getJobTemplate(jobName, options || {});
  fs.writeFileSync(jobFile, template, "utf-8");

  addToIndex(jobName);
  getDefaultLogger().info(`Job ${ chalk.blue(jobFile) } has been generated successfully.`);
}
