import { TRunner, TRunnerAsync } from "./IScheduleDefinition";
export default class Scheduler {
    private tasks;
    register(cronExpression: string, runner: TRunner | TRunnerAsync): void;
    run(): void;
}
