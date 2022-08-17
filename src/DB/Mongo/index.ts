import { MongoError } from "mongodb";
import mongoose from "mongoose";
import Config from "../../System/Config";
import { getDefaultLogger } from "../../System/Logger";

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
  private _maxRetry = 5;
  /**
   * How many retries were made.
   */
  private _try = 0;

  /**
   * Performs the database connection and initialisation.
   */
  public init(): Promise<void> {
    return new Promise((resolve, reject) => {
      this._init(resolve, reject);
    });
  }

  /**
   * Performs the database connection and initialisation. If the database connection fails,
   * it will retry for the `_maxRetry` number of times, with a 5 seconds delay.
   * If the connection fails after `_maxRetry` number of times, it will throw an error.
   *
   * @param resolve The function used to send a successful message to the caller function.
   * @param reject The function used to send an error message to the caller function.
   */
  private _init(resolve: (value?: any | PromiseLike<any>) => void, reject: (reason?: any) => void): void {
    mongoose.connect(
      Config.string("db.mongo.url", "mongodb://localhost:27017/onebe"),
      {
        autoIndex: true,
        keepAlive: true,
        connectTimeoutMS: 10000,
        socketTimeoutMS: 45000,
        family: 4,
      },
      (err: MongoError) => {
        this._try += 1;
        if (err) {
          getDefaultLogger().error(`Mongoose connection error: ${ err }`);

          if (this._try < this._maxRetry) {
            setTimeout(() => this._init(resolve, reject), 5000);
            return;
          }

          reject(err);
          return;
        }

        getDefaultLogger().info("Mongoose database connected.");
        resolve();
      }
    );
  }
}
