#!/usr/bin/env node
/* eslint-disable simple-import-sort/imports */
/* eslint-disable simple-import-sort/exports */
import register from "@babel/register";
import path from "node:path";
import yargs from "yargs";

import "reflect-metadata";

import Config from "@/System/Config";
import { getEnv } from "@/System/Environment";

import DatabaseSeedCommand from "@/Commands/DatabaseSeedCommand";
import EntityCreateCommand from "@/Commands/EntityCreateCommand";
import EntityLoadCommand from "@/Commands/EntityLoadCommand";
import JobCreateCommand from "@/Commands/JobCreateCommand";
import MigrationCreateCommand from "@/Commands/MigrationCreateCommand";
import MigrationResetCommand from "@/Commands/MigrationResetCommand";
import MigrationRunCommand from "@/Commands/MigrationRunCommand";
import MigrationShowCommand from "@/Commands/MigrationShowCommand";
import MigrationUndoCommand from "@/Commands/MigrationUndoCommand";
import ProjectCreateCommand from "@/Commands/ProjectCreateCommand";
import RouteCreateCommand from "@/Commands/RouteCreateCommand";
import SecretGenCommand from "@/Commands/SecretGenCommand";
import ServiceCreateCommand from "@/Commands/ServiceCreateCommand";
import i18n from "@/i18n";

import { getVersion } from "@/version";

register({ extensions: [ ".ts", ".tsx", ".js", ".jsx" ] });
Config.init(
  path.resolve(process.cwd(), getEnv().string("ONEBE_CONFIG_FOLDER", `.${ getEnv().string("NODE_ENV", "dev") === "dev" ? "/src" : "" }/config`)),
);

const sourcesFolder = path.resolve(process.cwd(), `.${ getEnv().string("NODE_ENV", "dev") === "dev" ? "/src" : "" }`);

const yargsBase = yargs
  .usage("Usage: onebe <command> [options]")
  .scriptName("onebe")
  .version(getVersion())
  .command(new MigrationCreateCommand())
  .command(new MigrationShowCommand())
  .command(new MigrationRunCommand())
  .command(new MigrationResetCommand())
  .command(new MigrationUndoCommand())
  .command(new EntityCreateCommand())
  .command(new RouteCreateCommand())
  .command(new ServiceCreateCommand())
  .command(new JobCreateCommand())
  .command(new EntityLoadCommand())
  .command(new SecretGenCommand())
  .command(new ProjectCreateCommand())
  .command(new DatabaseSeedCommand());

i18n(sourcesFolder).then(() => yargsBase.recommendCommands().demandCommand(1).strict().alias("v", "version").help("h").alias("h", "help").argv);
