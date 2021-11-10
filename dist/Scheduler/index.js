"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodeCron = require("node-cron");

var _Logger = _interopRequireDefault(require("../System/Logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Task scheduler that runs the jobs registered in the application.
 */
class Scheduler {
  constructor() {
    _defineProperty(this, "tasks", []);
  }

  /**
   * Method used to register new jobs in the tasks scheduler.
   *
   * @param executionExpression The expression used to specify when to run the job.
   * @param runner The task runner function.
   */
  register(executionExpression, runner) {
    this.tasks.push({
      executionExpression,
      runner
    });
  }
  /**
   * Method used to start the task scheduler.
   */


  run() {
    this.tasks.forEach(task => {
      (0, _nodeCron.schedule)(task.executionExpression, task.runner);
    });

    _Logger.default.debug(`Registered ${this.tasks.length} jobs!`);
  }

}

exports.default = Scheduler;