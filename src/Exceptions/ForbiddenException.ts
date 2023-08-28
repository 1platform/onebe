import HTTPError from "@/Exceptions/HTTPError";
import HTTPStatus from "@/Server/HTTPStatus";

/**
 * Exception thrown when an endpoint has restricted access.
 */
export default class ForbiddenException extends HTTPError {
  /**
   * Constructor of the ForbiddenException.
   */
  public constructor() {
    super("onebe.errors.forbidden", HTTPStatus.FORBIDDEN);
  }
}
