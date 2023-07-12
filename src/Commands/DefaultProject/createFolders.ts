import chalk from "chalk";
import fs from "node:fs";
import path from "node:path";

const foldersList = [
  "src/config",
  "src/entities",
  "src/jobs",
  "src/locales",
  "src/migrations",
  "src/observers",
  "src/routes",
  "src/services",
  "tmp",
  "upload",
];
const functions = {
  "src/config": createConfigFiles,
  "src/jobs": createJobsFile,
  "src/observers": createObserversFile,
  "src/services": createServicesFile,
  "src/routes": createRoutesFile,
};

/**
 * Function used to create the folders of the base application.
 *
 * @param basePath Base path of the project.
 */
export default function createFolders(basePath: string): void {
  for (const folder of foldersList) {
    const folderPath = path.resolve(basePath, folder);
    fs.mkdirSync(folderPath, { recursive: true });
    fs.writeFileSync(path.join(folderPath, ".gitkeep"), "", "utf-8");
    console.log(chalk.green(`  - ${ folder }/`));

    if (functions[folder]) {
      functions[folder](folderPath);
    }
  }
}

/**
 * Function used to create the files of the Config folder.
 *
 * @param basePath Base path of the project.
 */
function createConfigFiles(basePath: string): void {
  const defaultFolder = path.resolve(__dirname, "../DefaultProject/config");
  for (const file of fs.readdirSync(defaultFolder)) {
    if (path.extname(file) !== ".ts") {
      continue;
    }

    let fileContents = fs.readFileSync(path.join(defaultFolder, file), "utf-8");
    fileContents = fileContents.replace(/from "\.\.\//gi, 'from "onebe/');
    fileContents = fileContents.replace(/from "@\//gi, 'from "onebe/');
    fs.writeFileSync(path.join(basePath, file), fileContents, "utf-8");
    console.log(chalk.green(`    - src/config/${ file }`));
  }
}

/**
 * Function used to create the files of the Jobs folder.
 *
 * @param basePath Base path of the project.
 */
function createJobsFile(basePath: string): void {
  fs.writeFileSync(
    path.join(basePath, "index.ts"),
    `export default function jobs(): void {
  // Define the jobs to be loaded here.
}`,
    "utf-8",
  );
  console.log(chalk.green(`    - src/jobs/index.ts`));
}

/**
 * Function used to create the files of the Observers folder.
 *
 * @param basePath Base path of the project.
 */
function createObserversFile(basePath: string): void {
  fs.writeFileSync(
    path.join(basePath, "index.ts"),
    `export default function observers(): void {
  // Define the observers to be loaded here.
}`,
    "utf-8",
  );
  console.log(chalk.green(`    - src/observers/index.ts`));
}

/**
 * Function used to create the files of the Services folder.
 *
 * @param basePath Base path of the project.
 */
function createServicesFile(basePath: string): void {
  fs.writeFileSync(
    path.join(basePath, "index.ts"),
    `import {ServiceLoader} from "onebe/Services";
import {EmailService} from "onebe/Email";
import {SMSService} from "onebe/SMS";

export default function services(): void {
  ServiceLoader.set<EmailService>(new EmailService());
  ServiceLoader.set<SMSService>(new SMSService());

  // Define the services to be loaded here.
}`,
    "utf-8",
  );
  console.log(chalk.green(`    - src/services/index.ts`));
}

/**
 * Function used to create the files of the Routes folder.
 *
 * @param basePath Base path of the project.
 */
function createRoutesFile(basePath: string): void {
  fs.writeFileSync(
    path.join(basePath, "Default.ts"),
    `import { AuthContextAPI, ContextAPI, GET, POST, Path, Route } from "onebe/Router";
import { HTTPStatus } from "onebe/HTTP";
import { ResponseDocs } from "onebe/Documentation";
import { getDefaultLogger } from "onebe/System/Logger";

@Path("/", "Root", "Main Entrypoint of the application")
export default class Default extends Route {
  @GET<HTTPStatus>("/")
  @ResponseDocs.Status(HTTPStatus.OK)
  public async getSample(context: ContextAPI, authContext: AuthContextAPI): Promise<HTTPStatus> {
    return HTTPStatus.OK;
  }

  @POST<any,HTTPStatus>("/")
  @ResponseDocs.Status(HTTPStatus.OK)
  public async postSample(context: ContextAPI, authContext: AuthContextAPI): Promise<HTTPStatus> {
    return HTTPStatus.OK;
  }
}`,
    "utf-8",
  );
  console.log(chalk.green(`    - src/routes/Default.ts`));
}
