import HTTPStatus from "../HTTP/HTTPStatus";
import HTTPError from "./HTTPError";

/**
 * Exception thrown when an endpoint is not found.
 */
export default class PageNotFoundException extends HTTPError {
  /**
   * Constructor of the PageNotFoundException.
   */
  public constructor() {
    super("errors.default.page-not-found", HTTPStatus.NOT_FOUND);
  }
}
