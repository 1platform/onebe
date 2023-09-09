import { Format } from "logform";
import path from "node:path";
import { createLogger, format, Logger as WinstonLogger, transports } from "winston";
import { FileTransportOptions } from "winston/lib/winston/transports";
import Transport from "winston-transport";

import Config from "@/System/Config";
import LogLevel from "@/System/LogLevel";

export { default as LoggerType } from "@/System/LoggerType";
export { default as LogLevel } from "@/System/LogLevel";

/**
 * The base logger class to be used in the application.
 *
 * This class is the base of the available loggers in the application. In order
 * to use this class you need a transport and the level of information you
 * want to log.
 */
export abstract class Logger {
  /**
   * The constructor of the logger class.
   *
   * @param logLevel The level of logging we will use in our application.
   * @param transport The transport used for the winston logger.
   */
  public constructor(logLevel: LogLevel, transport: Transport) {
    this._log = createLogger({
      level: logLevel ? logLevel?.toString() || LogLevel.INFO : LogLevel.INFO,
      format: format.simple(),
      transports: [ transport ],
    });
  }

  /**
   * The logger object the application will use for logging.
   */
  protected _log: WinstonLogger;

  /**
   * Getter for the logger object.
   */
  public get log(): WinstonLogger {
    return this._log;
  }

  /**
   * Method to log an information message.
   *
   * @param message The message to be logged.
   * @param meta Various other meta elements passed to the log method.
   */
  public info(message: any, ...meta: any[]): WinstonLogger {
    return this.log.info(message, ...meta);
  }

  /**
   * Method to log an error message.
   *
   * @param message The message to be logged.
   * @param meta Various other meta elements passed to the log method.
   */
  public error(message: any, ...meta: any[]): WinstonLogger {
    return this.log.error(message, ...meta);
  }

  /**
   * Method to log a warning message.
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
 * The console logger that can be used in your application.
 */
export class ConsoleLogger extends Logger {
  /**
   * The constructor of the logger class.
   *
   * @param logLevel The level of logging we will use in our application.
   * @param format The message formatter.
   */
  public constructor(logLevel: LogLevel, format?: Format) {
    super(
      logLevel,
      new transports.Console({
        format,
      }),
    );
  }
}

/**
 * The file logger that can be used in your application.
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
      new transports.File({
        filename: Config.string("logs.filename", "app.log"),
        dirname: Config.string("logs.getModuleFolder", path.join(process.cwd(), "storage", "logs")),
        ...(options || {}),
      }),
    );
  }
}

/**
 * No Logger transport for the NoLogger logger class.
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
 * The NoLogger logger that can be used in your application.
 *
 * Use this logger if you want to disable the logging possibility.
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
 * Logger that can be used to log information in JSON objects. This
 * logger can be used when logging information into AWS, Elastic Search.
 */
export class JSONLogger extends Logger {
  /**
   * The constructor of the logger class.
   *
   * @param logLevel The level of logging we will use in our application.
   * @param isFile If the logger should log the messages in a file.
   * @param options The options passed to the file logger transport.
   */
  public constructor(logLevel: LogLevel, isFile = false, options?: FileTransportOptions) {
    super(logLevel, new NoLoggerTransport());

    let transport;
    if (options) {
      transport = new transports.File({
        filename: Config.string("logs.filename", "app.log"),
        dirname: Config.string("logs.getModuleFolder", path.join(process.cwd(), "storage", "logs")),
        ...(options || {}),
      });
    } else {
      transport = new transports.Console({
        format: format.json(),
      });
    }

    this._log = createLogger({
      level: logLevel ? logLevel.toString() || LogLevel.INFO : LogLevel.INFO,
      format: format.json(),
      transports: [ transport ],
    });
  }
}

/**
 * The default logger of the application.
 */
let DefaultLogger: Logger = new ConsoleLogger(LogLevel[Config.string("logs.level", LogLevel.INFO).toUpperCase()]);

/**
 * Function used to change the default logger of the application.
 *
 * @param newLogger The new logger instance.
 */
export function setDefaultLogger(newLogger: Logger): void {
  DefaultLogger = newLogger;
}

/**
 * Function used to get the default logger of the application.
 */
export function getDefaultLogger(): Logger {
  return DefaultLogger;
}
