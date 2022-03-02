import { Logger as WinstonLogger } from "winston";
import Transport from "winston-transport";
import { FileTransportOptions } from "winston/lib/winston/transports";
import LogLevel from "./LogLevel";
import * as logform from "logform";
/**
 * The base logger class.
 */
export declare class Logger {
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
    constructor(logLevel: LogLevel, transport: Transport);
    /**
     * Getter for the logger object.
     */
    get log(): WinstonLogger;
    /**
     * Method to log a info message.
     *
     * @param message The message to be logged.
     * @param meta Various other meta elements passed to the log method.
     */
    info(message: any, ...meta: any[]): WinstonLogger;
    /**
     * Method to log a error message.
     *
     * @param message The message to be logged.
     * @param meta Various other meta elements passed to the log method.
     */
    error(message: any, ...meta: any[]): WinstonLogger;
    /**
     * Method to log a warn message.
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
 * The console logger that can be used in our application.
 */
export declare class ConsoleLogger extends Logger {
    /**
     * The constructor of the logger class.
     *
     * @param logLevel The level of logging we will use in our application.
     * @param format The message formatter.
     */
    constructor(logLevel: LogLevel, format?: logform.Format);
}
/**
 * The file logger that can be used in our application.
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
 * The no logger logger that can be used in our application.
 */
export declare class NoLogger extends Logger {
    /**
     * The constructor of the logger class.
     */
    constructor();
}
/**
 * The default logger of the application.
 */
declare let DefaultLogger: Logger;
/**
 * Function used to change the default logger of the application.
 *
 * @param newLogger The new logger instance.
 */
export declare function setDefaultLogger(newLogger: Logger): void;
export default DefaultLogger;
