"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodeCron = require("node-cron");

var _Logger = _interopRequireDefault(require("../System/Logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Scheduler {
  constructor() {
    _defineProperty(this, "tasks", []);
  }

  register(cronExpression, runner) {
    this.tasks.push({
      cronExpression,
      runner
    });
  }

  run() {
    this.tasks.forEach(task => {
      (0, _nodeCron.schedule)(task.cronExpression, task.runner);
    });

    _Logger.default.debug(`Registered ${this.tasks.length} jobs!`);
  }

}

exports.default = Scheduler;