import { Logger as WinstonLogger } from "winston";
import * as Transport from "winston-transport";
import { FileTransportOptions } from "winston/lib/winston/transports";
import LogLevel from "./LogLevel";
export declare class Logger {
    constructor(logLevel: LogLevel, transport: Transport);
    private _log;
    get log(): WinstonLogger;
    info(message: any, ...meta: any[]): WinstonLogger;
    error(message: any, ...meta: any[]): WinstonLogger;
    warn(message: any, ...meta: any[]): WinstonLogger;
    debug(message: any, ...meta: any[]): WinstonLogger;
    verbose(message: any, ...meta: any[]): WinstonLogger;
    silly(message: any, ...meta: any[]): WinstonLogger;
}
export declare class ConsoleLogger extends Logger {
    constructor(logLevel: LogLevel);
}
export declare class FileLogger extends Logger {
    constructor(logLevel: LogLevel, options?: FileTransportOptions);
}
declare let DefaultLogger: ConsoleLogger;
export declare function setDefaultLogger(newLogger: Logger): void;
export default DefaultLogger;
