import HTTPError from "@/Exceptions/HTTPError";
import HTTPStatus from "@/Server/HTTPStatus";

/**
 * Exception thrown when we get an invalid filter definition.
 */
export default class InvalidFilterDefinitionException extends HTTPError {
  /**
   * Constructor of the InvalidFilterDefinitionException.
   */
  public constructor() {
    super("onebe.errors.utils.invalid-filter-definition", HTTPStatus.SERVER_ERROR);
  }
}
