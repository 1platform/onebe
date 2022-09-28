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
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,

  MOVED_PERMANENTLY = 301,
  REDIRECT = 302,
  FOUND = 302,

  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  GONE = 410,

  SERVER_ERROR = 500,
}

export default HTTPStatus;
