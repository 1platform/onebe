import path from "path";
import winston, { Logger as WinstonLogger } from "winston";
import Transport from "winston-transport";
import { FileTransportOptions } from "winston/lib/winston/transports";
import Config from "./Config";
import LogLevel from "./LogLevel";
import * as logform from "logform";

/**
 * The base logger class.
 */
export class Logger {
  /**
   * The logger object we will use for logging.
   */
  protected readonly _log: WinstonLogger;

  /**
   * The constructor of the logger class.
   *
   * @param logLevel The level of logging we will use in our application.
   * @param transport The transport used for the winston logger.
   */
  public constructor(logLevel: LogLevel, transport: Transport) {
    this._log = winston.createLogger({
      level: logLevel.toString() || LogLevel.INFO,
      format: winston.format.simple(),
      transports: [ transport ],
    });
  }

  /**
   * Getter for the logger object.
   */
  public get log(): WinstonLogger {
    return this._log;
  }

  /**
   * Method to log a info message.
   *
   * @param message The message to be logged.
   * @param meta Various other meta elements passed to the log method.
   */
  public info(message: any, ...meta: any[]): WinstonLogger {
    return this.log.info(message, ...meta);
  }

  /**
   * Method to log a error message.
   *
   * @param message The message to be logged.
   * @param meta Various other meta elements passed to the log method.
   */
  public error(message: any, ...meta: any[]): WinstonLogger {
    return this.log.error(message, ...meta);
  }

  /**
   * Method to log a warn message.
   *
   * @param message The message to be logged.
   * @param meta Various other meta elements passed to the log method.
   */
  public warn(message: any, ...meta: any[]): WinstonLogger {
    return this.log.warn(message, ...meta);
  }

  /**
   * Method to log a debug message.
   *
   * @param message The message to be logged.
   * @param meta Various other meta elements passed to the log method.
   */
  public debug(message: any, ...meta: any[]): WinstonLogger {
    return this.log.debug(message, ...meta);
  }

  /**
   * Method to log a verbose message.
   *
   * @param message The message to be logged.
   * @param meta Various other meta elements passed to the log method.
   */
  public verbose(message: any, ...meta: any[]): WinstonLogger {
    return this.log.verbose(message, ...meta);
  }

  /**
   * Method to log a silly message.
   *
   * @param message The message to be logged.
   * @param meta Various other meta elements passed to the log method.
   */
  public silly(message: any, ...meta: any[]): WinstonLogger {
    return this.log.silly(message, ...meta);
  }
}

/**
 * The console logger that can be used in our application.
 */
export class ConsoleLogger extends Logger {
  /**
   * The constructor of the logger class.
   *
   * @param logLevel The level of logging we will use in our application.
   * @param format The message formatter.
   */
  public constructor(logLevel: LogLevel, format?: logform.Format) {
    super(
      logLevel,
      new winston.transports.Console({
        format,
      })
    );
  }
}

/**
 * The file logger that can be used in our application.
 */
export class FileLogger extends Logger {
  /**
   * The constructor of the logger class.
   *
   * @param logLevel The level of logging we will use in our application.
   * @param options The options passed to the file logger transport.
   */
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

/**
 * No Logger transport for the NoLogger.
 */
class NoLoggerTransport extends Transport {
  /**
   * NoLoggerTransport constructor
   */
  public constructor() {
    super();
  }

  /**
   * Log the message.
   */
  public log(): void {
    // NOP
  }
}

/**
 * The no logger logger that can be used in our application.
 */
export class NoLogger extends Logger {
  /**
   * The constructor of the logger class.
   */
  public constructor() {
    super(LogLevel.VERBOSE, new NoLoggerTransport());
  }
}

/**
 * The default logger of the application.
 */
let DefaultLogger: Logger = new ConsoleLogger(
  LogLevel[Config.string("logs.level", LogLevel.INFO).toUpperCase()]
);

/**
 * Function used to change the default logger of the application.
 *
 * @param newLogger The new logger instance.
 */
export function setDefaultLogger(newLogger: Logger): void {
  DefaultLogger = newLogger;
}

export default DefaultLogger;
