import fs from "node:fs";
import path from "node:path";
import { Arguments, Argv, CommandModule } from "yargs";

import { uuidV4 } from "@/Utils";

/**
 * Function used to generate a new JWT secret.
 *
 * @param line The current line to be parsed.
 */
function parseLineJWT(line: string): string {
  if (line.indexOf("JWT_SECRET") < 0) {
    return line;
  }

  return `JWT_SECRET="${ uuidV4() }"`;
}

/**
 * Function used to generate a new SESSION secret.
 *
 * @param line The current line to be parsed.
 */
function parseLineSession(line: string): string {
  if (line.indexOf("SESSION_SECRET") < 0) {
    return line;
  }

  return `SESSION_SECRET="${ uuidV4() }"`;
}

/**
 * Function used to generate a new UPLOAD secret.
 *
 * @param line The current line to be parsed.
 */
function parseLineUpload(line: string): string {
  if (line.indexOf("UPLOAD_SECRET") < 0) {
    return line;
  }

  return `UPLOAD_SECRET="${ uuidV4() }"`;
}

/**
 * CLI Command to generate secret codes for various elements.
 */
export default class SecretGenCommand implements CommandModule {
  command = "secret:generate";
  describe = "Generate secrets";

  /**
   * Method used to define the options and parameters that the CLI command
   * can receive.
   *
   * @param args A list with arguments and options sent by the user to the command.
   */
  public builder(args: Argv) {
    return args.option("type", {
      describe: "The secrets to be generated",
      default: "all",
      type: "string",
      choices: [ "all", "jwt", "session", "upload" ],
    });
  }

  /**
   * Method used to run the command.
   *
   * @param args A list with arguments and options sent by the user to the command.
   */
  public async handler(args: Arguments<any>) {
    let content = [];
    const envFile = path.resolve(".env");
    if (fs.existsSync(envFile)) {
      content = fs.readFileSync(envFile, "utf-8").split("\n");
    }

    for (let lineIndex = 0; lineIndex < content.length; lineIndex++) {
      if ([ "all", "jwt" ].indexOf(args.type) >= 0) {
        content[lineIndex] = parseLineJWT(content[lineIndex]);
      }
      if ([ "all", "session" ].indexOf(args.type) >= 0) {
        content[lineIndex] = parseLineSession(content[lineIndex]);
      }
      if ([ "all", "upload" ].indexOf(args.type) >= 0) {
        content[lineIndex] = parseLineUpload(content[lineIndex]);
      }
    }

    fs.writeFileSync(envFile, content.join("\n"), "utf-8");
  }
}
