import chalk from "chalk";
import { exec, spawn } from "child_process";
import inquirer from "inquirer";
import fs from "node:fs";
import path from "node:path";

import createFolders from "@/Commands/DefaultProject/createFolders";
import { babelrcFile, eslintrcFile, nodemonFile, packageJsonFile, tsconfigFile } from "@/Commands/DefaultProject/jsonFiles";
import { getEnv } from "@/System/Environment";
import { snakeCase } from "@/Utils";
import getCurrentFolder from "@/Utils/getCurrentFolder";

const __dirname = getCurrentFolder(import.meta.url);

/**
 * A list with additional options used for generating the project.
 */
interface IAnswersList {
  /**
   * The name of the project.
   */
  projectName: string;
  /**
   * The version of the project.
   */
  version: string;
  /**
   * Keywords used to describe the project.
   */
  keywords: string;
  /**
   * A short description of the project.
   */
  description: string;
  /**
   * Flag to mark the usage of yarn.
   */
  useYarn: boolean;
  /**
   * Flag to mark the usage of the new version of yarn.
   */
  useYarnNew: boolean;
  /**
   * Flag to let the engine know if the dependencies should be installed or not.
   */
  installDependencies: boolean;
}

/**
 * Function used to install the dependencies.
 *
 * @param projectFolder The folder containing the project.
 * @param useYarn Flag to use let the engine know what to use: npm or yarn.
 */
function installDependencies(projectFolder: string, useYarn: boolean): Promise<void> {
  return new Promise((resolve, reject) => {
    const originalDir = process.cwd();
    process.chdir(projectFolder);
    const installResult = spawn(useYarn ? "yarn" : "npm", [ "install" ]);
    installResult.stdout.on("data", (data) => {
      getEnv().boolean("APP_DEBUG") && console.debug(`OK: ${ data }`);
    });
    installResult.stderr.on("data", (data) => {
      getEnv().boolean("APP_DEBUG") && console.debug(`ERR: ${ data }`);
    });
    installResult.on("error", (error) => {
      process.chdir(originalDir);
      console.error(error.message);
      reject(error);
    });
    installResult.on("close", (code) => {
      process.chdir(originalDir);
      if (code === 0) {
        console.log("Installation successful");
        resolve();
        return;
      }
      console.error(`Installation failed with code ${ code }`);
      reject(new Error(`Installation failed with code ${ code }`));
    });
  });
}

/**
 * Function used to initialise the GIT project.
 *
 * @param projectFolder The folder containing the project.
 */
function initGit(projectFolder: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const originalDir = process.cwd();
    process.chdir(projectFolder);
    exec("git init && git add . && git commit -am 'Initial commit'", (initError, initStdout, initStderr) => {
      getEnv().boolean("APP_DEBUG") && initStdout && console.debug(`OK: ${ initStdout }`);
      getEnv().boolean("APP_DEBUG") && initStderr && console.debug(`ERR: ${ initStderr }`);
      if (initError) {
        process.chdir(originalDir);
        console.error("Unable to initialize the git project.");
      }

      resolve();
    });
  });
}

/**
 * Function used to create a new project with a possible given name.
 *
 * To use this function run the following command:
 * `npx onebe project:create <projectName>`
 *
 * @param [projectName] The name of the project to be created.
 */
export default async function createProject(projectName?: string): Promise<void> {
  let folder = process.cwd();

  const answers = await inquirer.prompt<IAnswersList>([
    {
      type: "input",
      name: "projectName",
      default: snakeCase(projectName, "-"),
      message: "What is the name of your project?",
      transformer: (input: string): string => snakeCase(input, "-"),
    },
    {
      type: "input",
      name: "version",
      default: "1.0.0",
      message: "What is the version of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project in a few words:",
    },
    {
      type: "input",
      name: "keywords",
      message: "Write some keywords for your project:",
    },
    {
      type: "confirm",
      name: "useYarn",
      message: "Do you want to use `yarn` as the package manager?",
    },
    {
      type: "confirm",
      name: "useYarnNew",
      message: "Do you want to use the latest version of `yarn`?",
      when: (answersList): boolean => answersList.useYarn,
    },
    {
      type: "confirm",
      name: "installDependencies",
      default: false,
      message: "Do you want to use the install the dependencies automatically?",
    },
  ]);

  folder = path.join(folder, answers.projectName);

  if (fs.existsSync(folder)) {
    console.error(chalk.red(`A folder named ${ chalk.bold(answers.projectName) } already exists. Delete it or change the name of the project.`));
    return;
  }

  const jsonFiles: Record<string, any> = {
    "package.json": packageJsonFile(answers.projectName, {
      ...answers,
      keywords:
        answers.keywords
          ?.replace(/,/gi, " ")
          .split(" ")
          .filter((keyword) => keyword) || [],
    }),
    ".babelrc.json": babelrcFile(),
    ".eslintrc.json": eslintrcFile(),
    "nodemon.json": nodemonFile(),
    "tsconfig.json": tsconfigFile(),
  };
  const copyFiles: Record<string, any> = {
    "../DefaultProject/env.sample": ".env.sample",
    "../DefaultProject/dockerignore.tpl": ".dockerignore",
    "../DefaultProject/Dockerfile.tpl": "Dockerfile",
    "../DefaultProject/editorconfig.tpl": ".editorconfig",
    "../DefaultProject/gitignore.tpl": ".gitignore",
    "../DefaultProject/LICENSE.md": "LICENSE.md",
    "../DefaultProject/README.md": "README.md",
    "../DefaultProject/index.tpl": "src/index.ts",
    "../DefaultProject/config/en.locale.json": "src/locales/en.json",
  };

  console.clear();
  console.log(`Creating the project folder: ${ chalk.blue(`./${ answers.projectName }`) }`);
  fs.mkdirSync(folder, { recursive: true });
  console.log(`Creating the project structure and the default files:`);
  createFolders(folder);

  for (const copyFile of Object.keys(copyFiles)) {
    fs.copyFileSync(path.resolve(__dirname, copyFile), path.join(folder, copyFiles[copyFile]));
    console.log(chalk.green(`  - ${ copyFiles[copyFile] }`));
  }

  for (const fileName of Object.keys(jsonFiles)) {
    fs.writeFileSync(path.join(folder, fileName), JSON.stringify(jsonFiles[fileName], null, 2), "utf-8");
    console.log(chalk.green(`  - ${ fileName }`));
  }

  if (!answers.useYarn) {
    console.log(`\nSince you are not using ${ chalk.blue("yarn") }, we need to perform some adjustments...`);
    let readme = fs.readFileSync(path.join(folder, "README.md"), "utf-8");
    let dockerfile = fs.readFileSync(path.join(folder, "Dockerfile"), "utf-8");

    readme = readme.replace(/yarn /gi, "npm run ");
    dockerfile = dockerfile.replace(/yarn /gi, "npm run ");

    fs.writeFileSync(path.join(folder, "README.md"), readme, "utf-8");
    fs.writeFileSync(path.join(folder, "Dockerfile"), dockerfile, "utf-8");
  } else if (answers.useYarnNew) {
    console.log(`\nSince you are using the latest release of ${ chalk.blue("yarn") }, we need to add it to the application.`);
    fs.mkdirSync(path.join(folder, ".yarn/releases"), { recursive: true });
    fs.copyFileSync(path.resolve(__dirname, "../DefaultProject/yarn-3.4.1.cjs"), path.join(folder, ".yarn/releases/yarn-3.4.1.cjs"));
    fs.copyFileSync(path.resolve(__dirname, "../DefaultProject/yarnrc.yml.tpl"), path.join(folder, ".yarnrc.yml"));
  }

  console.log(`\nYour project has been created!`);
  await initGit(folder);
  if (answers.installDependencies) {
    console.log(`\nInstalling dependencies using: ${ chalk.blue(answers.useYarn ? "yarn" : "npm") }`);
    await installDependencies(folder, answers.useYarn);
    console.log(`\nAccess the folder of your project: ${ chalk.bold(`cd ${ projectName }`) }`);
  } else {
    console.log(`\nAccess the folder of your project: ${ chalk.bold(`cd ${ projectName }`) }

Explore the contents of the project and install the dependencies:
   ${ chalk.bold(chalk.blue(answers.useYarn ? "yarn" : "npm install")) }`);
  }

  console.log(`\nThe next steps would be to create the ${ chalk.bold(".env") } file based on the ${ chalk.bold(`.env.sample`) } file.

After that, to start your application just run:
  ${ chalk.bold(chalk.blue(`${ answers.useYarn ? "yarn" : "npm run" } start:dev`)) }

When you think you are ready for production build the application, adjust the .env file and run it:
  ${ chalk.bold(chalk.blue(`${ answers.useYarn ? "yarn" : "npm run" } app:build`)) }
  ${ chalk.bold(chalk.blue(`${ answers.useYarn ? "yarn" : "npm run" } start:prod`)) }

You can read more about the application development here: ${ chalk.bold(chalk.blue("https://docs.onebe.dev")) }
`);
}
