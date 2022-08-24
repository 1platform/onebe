import HTTPStatus from "../HTTP/HTTPStatus";
import HTTPError from "./HTTPError";

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
