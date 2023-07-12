/**
 * A list with the supported HTTP Status codes that can be used
 * in the application.
 *
 * Statuses starting with 2 (200, 201, 202, 204 etc.) are usually
 * sent when you want to show a successful response.
 *
 * Statuses starting with 4 (400, 401, 403 etc.) are usually sent
 * when you want to show that the response has failed, based on the
 * input received from the user.
 *
 * Statuses starting with 5 (500, 501, 503 etc.) are usually sent
 * when you or the server want to show that something failed.
 *
 *  @enum
 */
enum HTTPStatus {
  /**
   * OK HTTP Status Code
   *
   * This status code should be used when you want to return a successful response.
   * It is automatically used when you don't specify any status code.
   */
  OK = 200,
  /**
   * CREATED HTTP Status Code
   *
   * This status code should be used when you want to create a new item in your application.
   */
  CREATED = 201,
  /**
   * ACCEPTED HTTP Status Code
   *
   * This status code should be used when you accept a request and do some asynchronous backend processing.
   */
  ACCEPTED = 202,
  /**
   * NO CONTENT HTTP Status Code
   *
   * This status code should be used when you don't return anything to the user, but the processing was done
   * successfully. For example, when you delete a record, you can use this status code.
   */
  NO_CONTENT = 204,

  /**
   * MOVED PERMANENTLY HTTP Status Code
   *
   * This status code should be used when the endpoint your user wants to access has moved to a new location permanently.
   */
  MOVED_PERMANENTLY = 301,
  /**
   * REDIRECT HTTP Status Code
   *
   * This status code should be used when the endpoint your user wants to access has moved temporary to a new location.
   */
  REDIRECT = 302,

  /**
   * BAD REQUEST HTTP Status Code
   *
   * This status code should be used when you want to return an error triggered by the data sent by the user.
   */
  BAD_REQUEST = 400,
  /**
   * UNAUTHORIZED HTTP Status Code
   *
   * This status code should be used when the user is unauthorized to access an endpoint.
   */
  UNAUTHORIZED = 401,
  /**
   * FORBIDDEN HTTP Status Code
   *
   * This status code should be used when the user doesn't have permission to access an endpoint.
   */
  FORBIDDEN = 403,
  /**
   * NOT FOUND HTTP Status Code
   *
   * This status code should be used when the endpoint accessed by the user doesn't exist.
   */
  NOT_FOUND = 404,
  /**
   * GONE HTTP Status Code
   *
   * This status code should be used when the endpoint accessed by the user was deleted.
   */
  GONE = 410,

  /**
   * SERVER ERROR HTTP Status Code
   *
   * This status code should be used when the server encountered an error, not triggered by the user input.
   * This status is used by default when a server error occured.
   */
  SERVER_ERROR = 500,
  /**
   * BAD GATEWAY HTTP Status Code
   *
   * This status code should be used when the gateway cannot connect to a child (proxy) server.
   */
  BAD_GATEWAY = 502,
  /**
   * SERVER UNAVAILABLE HTTP Status Code
   *
   * This status code should be returned when the server is unavailable to handle a request. This status code
   * is used by default when your code execution takes more than the set timeout period.
   */
  SERVER_UNAVAILABLE = 503,
  /**
   * GATEWAY UNAVAILABLE HTTP Status Code
   *
   * This status code should be used when the gateway is unavailable.
   */
  GATEWAY_UNAVAILABLE = 504,
}

export default HTTPStatus;
