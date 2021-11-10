/**
 * Class representing a Mongo DB handler
 */
export default class Mongo {
    /**
     * Max number of connection retries.
     */
    private _maxRetry;
    /**
     * How many retries were made.
     */
    private _try;
    /**
     * Calls the respective init method
     */
    init(): Promise<void>;
    /**
     * Initializes database connection
     */
    private _init;
}
