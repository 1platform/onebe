import HTTPStatus from "../HTTP/HTTPStatus";
import HTTPError from "./HTTPError";

/**
 * Exception thrown when an endpoint is not found or there is no data for
 * the given parameters.
 */
export default class PageNotFoundException extends HTTPError {
  /**
   * Constructor of the PageNotFoundException.
   */
  public constructor() {
    super("onebe.errors.page-not-found", HTTPStatus.NOT_FOUND);
  }
}
