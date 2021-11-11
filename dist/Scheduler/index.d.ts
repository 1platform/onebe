import { TRunner, TRunnerAsync } from "./IScheduleDefinition";
/**
 * Task scheduler that runs the jobs registered in the application.
 */
export default class Scheduler {
    /**
     * A list with tasks that we registered to be ran by the task scheduler.
     */
    private tasks;
    /**
     * Method used to register new jobs in the tasks scheduler.
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
