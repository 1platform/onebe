export type TRunner = () => void;
export type TRunnerAsync = () => Promise<void>;

export default interface IScheduleDefinition {
  cronExpression: string;
  runner: TRunner | TRunnerAsync;
}
