/**
 * A list with the supported HTTP Verbs that can be used in the application.
 *
 * @enum
 */
enum HTTPVerb {
  /**
   * HTTP GET Verb
   *
   * You should use this HTTP Verb when you want to get data from the server.
   */
  GET = "get",
  /**
   * HTTP POST Verb
   *
   * You should use this HTTP Verb when you want to create an item or perform some specific actions on the backend.
   */
  POST = "post",
  /**
   * HTTP PUT Verb
   *
   * You should use this HTTP Verb when you want to update the whole item.
   */
  PUT = "put",
  /**
   * HTTP DELETE Verb
   *
   * You should use this HTTP Verb when you want to delete an item from the server.
   */
  DELETE = "delete",
  /**
   * HTTP PATCH Verb
   *
   * You should use this HTTP Verb when you want to update specific items from the server.
   */
  PATCH = "patch",
}

export default HTTPVerb;
