/**
 * HTTP Status Codes enums
 *
 * @enum
 */
enum HTTPStatus {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,

  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  GONE = 410,

  SERVER_ERROR = 500,
}

export default HTTPStatus;
