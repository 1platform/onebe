#!/usr/bin/env node
"use strict";

require("reflect-metadata");

var _yargs = _interopRequireDefault(require("yargs"));

var _register = _interopRequireDefault(require("@babel/register"));

var _MigrationCreateCommand = _interopRequireDefault(require("./Commands/MigrationCreateCommand"));

var _version = require("./version");

var _EntityCreateCommand = _interopRequireDefault(require("./Commands/EntityCreateCommand"));

var _MigrationShowCommand = _interopRequireDefault(require("./Commands/MigrationShowCommand"));

var _MigrationRunCommand = _interopRequireDefault(require("./Commands/MigrationRunCommand"));

var _MigrationUndoCommand = _interopRequireDefault(require("./Commands/MigrationUndoCommand"));

var _MigrationResetCommand = _interopRequireDefault(require("./Commands/MigrationResetCommand"));

var _RouteCreateCommand = _interopRequireDefault(require("./Commands/RouteCreateCommand"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _register.default)({
  extensions: [".ts", ".tsx", ".js", ".jsx"]
});
_yargs.default.usage("Usage: onebe <command> [options]").scriptName("onebe").version((0, _version.getVersion)()).command(new _MigrationCreateCommand.default()).command(new _MigrationShowCommand.default()).command(new _MigrationRunCommand.default()).command(new _MigrationResetCommand.default()).command(new _MigrationUndoCommand.default()).command(new _EntityCreateCommand.default()).command(new _RouteCreateCommand.default()).recommendCommands().demandCommand(1).strict().alias("v", "version").help("h").alias("h", "help").argv;