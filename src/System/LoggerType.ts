/**
 * A list with supported loggers from the application.
 */
enum LoggerType {
  /**
   * CONSOLE Logger type.
   *
   * Use this when you want to output the log in the Console using a standard format.
   */
  CONSOLE = "console",
  /**
   * FILE Logger type.
   *
   * Use this when you want to output the log in a file using a standard format.
   */
  FILE = "file",
  /**
   * JSON Logger type.
   *
   * Use this when you want to output the log in the Console using JSON format.
   */
  JSON = "json",
  /**
   * JSON_FILE Logger type.
   *
   * Use this when you want to output the log in a file using JSON format.
   */
  JSON_FILE = "json_file",
  /**
   * NO_LOGGER Logger type.
   *
   * Use this when you don't to log anything from the application.
   */
  NO_LOGGER = "no_logger",
}

export default LoggerType;
