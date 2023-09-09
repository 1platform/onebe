import HTTPError from "@/Exceptions/HTTPError";
import HTTPStatus from "@/Server/HTTPStatus";

/**
 * Exception thrown when the passed parameter isn't valid.
 */
export default class InvalidParameterException extends HTTPError {
  /**
   * Constructor of the InvalidParameterException.
   *
   * @param parameter The name of the parameter.
   * @param value The value of the parameter.
   */
  public constructor(parameter: string, value: any) {
    super("onebe.errors.invalid-parameter", HTTPStatus.SERVER_ERROR, { parameter, value });
  }
}
