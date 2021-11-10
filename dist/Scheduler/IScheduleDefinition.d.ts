/**
 * The runner function definition.
 */
export declare type TRunner = () => void;
/**
 * The async runner function definition.
 */
export declare type TRunnerAsync = () => Promise<void>;
/**
 * Task scheduler parameter definition.
 */
export default interface IScheduleDefinition {
    /**
     * The expression used to specify when to run the job.
     */
    executionExpression: string;
    /**
     * The task runner function.
     */
    runner: TRunner | TRunnerAsync;
}
