import HTTPStatus from "../HTTP/HTTPStatus";
import HTTPError from "./HTTPError";

/**
 * Exception thrown when an endpoint has restricted access.
 */
export default class ForbiddenException extends HTTPError {
  /**
   * Constructor of the ForbiddenException.
   */
  public constructor() {
    super("errors.default.forbidden", HTTPStatus.FORBIDDEN);
  }
}
