import { TRunner, TRunnerAsync } from "./IScheduleDefinition";
/**
 * Task scheduler that runs the various background jobs registered in the application.
 */
export default class Scheduler {
    /**
     * A list with tasks registered to be run in background by the task scheduler.
     */
    private tasks;
    /**
     * Method used to register new jobs in the task scheduler.
     *
     * @param executionExpression The expression used to specify when to run the job.
     * @param runner The task runner function.
     */
    register(executionExpression: string, runner: TRunner | TRunnerAsync): void;
    /**
     * Method used to start the task scheduler.
     */
    run(): void;
}
