/**
 * Mongo connection handler class.
 *
 * Using this class you can connect and use MongoDB and Mongoose in
 * your application. We would recommend using TypeORM for the database
 * handling part, but if you need a simpler ORM for your application,
 * use this module.
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
     * Performs the database connection and initialisation.
     */
    init(): Promise<void>;
    /**
     * Performs the database connection and initialisation. If the database connection fails,
     * it will retry for the `_maxRetry` number of times, with a 5 seconds delay.
     * If the connection fails after `_maxRetry` number of times, it will throw an error.
     *
     * @param resolve The function used to send a successful message to the caller function.
     * @param reject The function used to send an error message to the caller function.
     */
    private _init;
}
