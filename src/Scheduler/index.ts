import { schedule } from "node-cron";
import DefaultLogger from "../System/Logger";
import IScheduleDefinition, {
  TRunner,
  TRunnerAsync,
} from "./IScheduleDefinition";

export default class Scheduler {
  private tasks: Array<IScheduleDefinition> = [];

  public register(
    cronExpression: string,
    runner: TRunner | TRunnerAsync
  ): void {
    this.tasks.push({
      cronExpression,
      runner,
    });
  }

  public run(): void {
    this.tasks.forEach((task) => {
      schedule(task.cronExpression, task.runner);
    });

    DefaultLogger.debug(`Registered ${ this.tasks.length } jobs!`);
  }
}
