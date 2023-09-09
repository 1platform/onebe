/**
 * A list with the supported logging levels.
 */
enum LogLevel {
  /**
   * ERROR Log Level
   *
   * Use this log level if you want to see the messages from the "error" level up.
   */
  ERROR = "error",
  /**
   * WARN Log Level
   *
   * Use this log level if you want to see the messages from the "warn" level up.
   */
  WARN = "warn",
  /**
   * INFO Log Level
   *
   * Use this log level if you want to see the messages from the "info" level up.
   */
  INFO = "info",
  /**
   * HTTP Log Level
   *
   * Use this log level if you want to see the messages from the "http" level up.
   */
  HTTP = "http",
  /**
   * VERBOSE Log Level
   *
   * Use this log level if you want to see the messages from the "verbose" level up.
   */
  VERBOSE = "verbose",
  /**
   * DEBUG Log Level
   *
   * Use this log level if you want to see the messages from the "debug" level up.
   */
  DEBUG = "debug",
  /**
   * SILLY Log Level
   *
   * Use this log level if you want to see the messages from the "silly" level up.
   */
  SILLY = "silly",
}

export default LogLevel;
