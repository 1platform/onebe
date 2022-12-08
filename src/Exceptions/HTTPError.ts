import HTTPStatus from "@/HTTP/HTTPStatus";

/**
 * A Generic Error with HTTP Status Code that can be thrown from your application.
 *
 * Using the HTTPError class you can easily specify the HTTP Status Code of the response
 * when the error is triggered.
 */
export default class HTTPError extends Error {
  /**
   * The HTTP Status code of the error.
   */
  public status: HTTPStatus = HTTPStatus.SERVER_ERROR;
  /**
   * The additional parameters sent to the exception.
   */
  public parameters: any = null;

  /**
   * Constructor of the Generic HTTP Error.
   *
   * @param message The message of the exception.
   * @param status The status code of the exception.
   * @param parameters Some extra parameters sent to the error.
   */
  public constructor(message: string, status = HTTPStatus.SERVER_ERROR, parameters?: any) {
    super(message);
    this.status = status;
    this.parameters = parameters;
  }
}
