import HTTPStatus from "../HTTP/HTTPStatus";

/**
 * Generic Exception with HTTP Status Code.
 */
export default class HTTPError extends Error {
  /**
   * The HTTP Status code.
   */
  public status: HTTPStatus = HTTPStatus.SERVER_ERROR;
  /**
   * The additional parameters sent to the exception.
   */
  public parameters: any = null;

  /**
   * Constructor of the HTTPError.
   *
   * @param message The message of the exception.
   * @param status The status code of the exception.
   * @param parameters Some extra parameters sent to the error.
   */
  public constructor(
    message: string,
    status = HTTPStatus.SERVER_ERROR,
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    parameters?: any
  ) {
    super(message);
    this.status = status;
    this.parameters = parameters;
  }
}
