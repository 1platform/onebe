/**
 * Type used to define how a task runner job should look like.
 */
export type TRunner = () => void;
/**
 * Type used to define how an async task runner job should look like.
 */
export type TRunnerAsync = () => Promise<void>;

/**
 * Detailed information about a scheduled job.
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
