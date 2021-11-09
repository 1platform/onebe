import path from "path";
import winston, { Logger as WinstonLogger } from "winston";
import * as Transport from "winston-transport";
import { FileTransportOptions } from "winston/lib/winston/transports";
import Config from "./Config";
import LogLevel from "./LogLevel";

export class Logger {
  public constructor(logLevel: LogLevel, transport: Transport) {
    this._log = winston.createLogger({
      level: logLevel.toString() || LogLevel.INFO,
      format: winston.format.simple(),
      transports: [ transport ],
    });
  }

  private _log: WinstonLogger;

  public get log(): WinstonLogger {
    return this._log;
  }

  public info(message: any, ...meta: any[]): WinstonLogger {
    return this.log.info(message, ...meta);
  }

  public error(message: any, ...meta: any[]): WinstonLogger {
    return this.log.error(message, ...meta);
  }

  public warn(message: any, ...meta: any[]): WinstonLogger {
    return this.log.warn(message, ...meta);
  }

  public debug(message: any, ...meta: any[]): WinstonLogger {
    return this.log.debug(message, ...meta);
  }

  public verbose(message: any, ...meta: any[]): WinstonLogger {
    return this.log.verbose(message, ...meta);
  }

  public silly(message: any, ...meta: any[]): WinstonLogger {
    return this.log.silly(message, ...meta);
  }
}

export class ConsoleLogger extends Logger {
  public constructor(logLevel: LogLevel) {
    super(logLevel, new winston.transports.Console());
  }
}

export class FileLogger extends Logger {
  public constructor(logLevel: LogLevel, options?: FileTransportOptions) {
    super(
      logLevel,
      new winston.transports.File({
        filename: Config.string("logs.filename", "app.log"),
        dirname: Config.string(
          "logs.folder",
          path.join(process.cwd(), "storage", "logs")
        ),
        ...(options || {}),
      })
    );
  }
}

let DefaultLogger = new ConsoleLogger(
  LogLevel[Config.string("logs.level", LogLevel.INFO).toUpperCase()]
);

export function setDefaultLogger(newLogger: Logger): void {
  DefaultLogger = newLogger;
}

export default DefaultLogger;
