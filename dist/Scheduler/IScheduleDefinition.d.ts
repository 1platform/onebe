export declare type TRunner = () => void;
export declare type TRunnerAsync = () => Promise<void>;
export default interface IScheduleDefinition {
    cronExpression: string;
    runner: TRunner | TRunnerAsync;
}
