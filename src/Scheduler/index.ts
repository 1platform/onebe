import { schedule } from "node-cron";
import { getDefaultLogger } from "../System/Logger";
import IScheduleDefinition, {
  TRunner,
  TRunnerAsync,
} from "./IScheduleDefinition";

/**
 * Task scheduler that runs the jobs registered in the application.
 */
export default class Scheduler {
  /**
   * A list with tasks that we registered to be ran by the task scheduler.
   */
  private tasks: Array<IScheduleDefinition> = [];

  /**
   * Method used to register new jobs in the tasks scheduler.
   *
   * @param executionExpression The expression used to specify when to run the job.
   * @param runner The task runner function.
   */
  public register(
    executionExpression: string,
    runner: TRunner | TRunnerAsync
  ): void {
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
