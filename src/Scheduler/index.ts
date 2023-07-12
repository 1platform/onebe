import { schedule } from "node-cron";

import IScheduleDefinition, { TRunner, TRunnerAsync } from "@/Scheduler/IScheduleDefinition";
import { getDefaultLogger } from "@/System/Logger";

/**
 * Task scheduler that runs the various background jobs registered in the application.
 */
export default class Scheduler {
  /**
   * A list with tasks registered to be run in background by the task scheduler.
   */
  private tasks: Array<IScheduleDefinition> = [];

  /**
   * Method used to register new jobs in the task scheduler.
   *
   * @param executionExpression The expression used to specify when to run the job.
   * @param runner The task runner function.
   */
  public register(executionExpression: string, runner: TRunner | TRunnerAsync): void {
    this.tasks.push({
      executionExpression,
      runner,
    });
  }

  /**
   * Method used to start the task scheduler.
   */
  public run(): void {
    this.tasks.forEach((task) => {
      schedule(task.executionExpression, task.runner);
    });

    getDefaultLogger().debug(`Registered ${ this.tasks.length } jobs!`);
  }
}
