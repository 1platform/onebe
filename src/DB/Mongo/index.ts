import { MongoError } from "mongodb";
import mongoose from "mongoose";
import Config from "../../System/Config";
import DefaultLogger from "../../System/Logger";

export default class Mongo {
  private _maxRetry = 5;
  private _try = 0;

  public init(): Promise<void> {
    return new Promise((resolve, reject) => {
      this._init(resolve, reject);
    });
  }

  private _init(resolve, reject): void {
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
          DefaultLogger.error(`Mongoose connection error: ${ err }`);

          if (this._try < this._maxRetry) {
            setTimeout(() => this._init(resolve, reject), 5000);
            return;
          }

          reject(err);
          return;
        }

        DefaultLogger.info("Database connected.");
        resolve();
      }
    );
  }
}
