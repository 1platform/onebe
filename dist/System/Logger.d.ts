import { Logger as WinstonLogger } from "winston";
import Transport from "winston-transport";
import { FileTransportOptions } from "winston/lib/winston/transports";
import LogLevel from "./LogLevel";
import { Format } from "logform";
/**
 * The base logger class to be used in the application.
 *
 * This class is the base of the available loggers in the application. In order
 * to use this class you need a transport and the level of information you
 * want to log.
 */
export declare abstract class Logger {
    /**
     * The constructor of the logger class.
     *
     * @param logLevel The level of logging we will use in our application.
     * @param transport The transport used for the winston logger.
     */
    constructor(logLevel: LogLevel, transport: Transport);
    /**
     * The logger object the application will use for logging.
     */
    protected _log: WinstonLogger;
    /**
     * Getter for the logger object.
     */
    get log(): WinstonLogger;
    /**
     * Method to log an information message.
     *
     * @param message The message to be logged.
     * @param meta Various other meta elements passed to the log method.
     */
    info(message: any, ...meta: any[]): WinstonLogger;
    /**
     * Method to log an error message.
     *
     * @param message The message to be logged.
     * @param meta Various other meta elements passed to the log method.
     */
    error(message: any, ...meta: any[]): WinstonLogger;
    /**
     * Method to log a warning message.
     *
     * @param message The message to be logged.
     * @param meta Various other meta elements passed to the log method.
     */
    warn(message: any, ...meta: any[]): WinstonLogger;
    /**
     * Method to log a debug message.
     *
     * @param message The message to be logged.
     * @param meta Various other meta elements passed to the log method.
     */
    debug(message: any, ...meta: any[]): WinstonLogger;
    /**
     * Method to log a verbose message.
     *
     * @param message The message to be logged.
     * @param meta Various other meta elements passed to the log method.
     */
    verbose(message: any, ...meta: any[]): WinstonLogger;
    /**
     * Method to log a silly message.
     *
     * @param message The message to be logged.
     * @param meta Various other meta elements passed to the log method.
     */
    silly(message: any, ...meta: any[]): WinstonLogger;
}
/**
 * The console logger that can be used in your application.
 */
export declare class ConsoleLogger extends Logger {
    /**
     * The constructor of the logger class.
     *
     * @param logLevel The level of logging we will use in our application.
     * @param format The message formatter.
     */
    constructor(logLevel: LogLevel, format?: Format);
}
/**
 * The file logger that can be used in your application.
 */
export declare class FileLogger extends Logger {
    /**
     * The constructor of the logger class.
     *
     * @param logLevel The level of logging we will use in our application.
     * @param options The options passed to the file logger transport.
     */
    constructor(logLevel: LogLevel, options?: FileTransportOptions);
}
/**
 * The NoLogger logger that can be used in your application.
 *
 * Use this logger if you want to disable the logging possibility.
 */
export declare class NoLogger extends Logger {
    /**
     * The constructor of the logger class.
     */
    constructor();
}
/**
 * Logger that can be used to log information in JSON objects. This
 * logger can be used when logging information into AWS, Elastic Search.
 */
export declare class JSONLogger extends Logger {
    /**
     * The constructor of the logger class.
     *
     * @param logLevel The level of logging we will use in our application.
     * @param isFile If the logger should log the messages in a file.
     * @param options The options passed to the file logger transport.
     */
    constructor(logLevel: LogLevel, isFile?: boolean, options?: FileTransportOptions);
}
/**
 * Function used to change the default logger of the application.
 *
 * @param newLogger The new logger instance.
 */
export declare function setDefaultLogger(newLogger: Logger): void;
/**
 * Function used to get the default logger of the application.
 */
export declare function getDefaultLogger(): Logger;
