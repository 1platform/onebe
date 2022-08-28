#!/usr/bin/env node
import "reflect-metadata";
import yargs from "yargs";
import register from "@babel/register";
import MigrationCreateCommand from "./Commands/MigrationCreateCommand";
import { getVersion } from "./version";
import EntityCreateCommand from "./Commands/EntityCreateCommand";
import MigrationShowCommand from "./Commands/MigrationShowCommand";
import MigrationRunCommand from "./Commands/MigrationRunCommand";
import MigrationUndoCommand from "./Commands/MigrationUndoCommand";
import MigrationResetCommand from "./Commands/MigrationResetCommand";
import RouteCreateCommand from "./Commands/RouteCreateCommand";

register({ extensions: [ ".ts", ".tsx", ".js", ".jsx" ] });

yargs
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

  .recommendCommands()
  .demandCommand(1)
  .strict()
  .alias("v", "version")
  .help("h")
  .alias("h", "help").argv;
