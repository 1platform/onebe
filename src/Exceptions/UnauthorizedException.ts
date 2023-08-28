import HTTPError from "@/Exceptions/HTTPError";
import HTTPStatus from "@/Server/HTTPStatus";

/**
 * Exception thrown when a user isn't authorized to perform the action.
 */
export default class UnauthorizedException extends HTTPError {
  /**
   * Constructor of the UnauthorizedException.
   */
  public constructor() {
    super("onebe.errors.unauthorized", HTTPStatus.UNAUTHORIZED);
  }
}
