import HTTPError from "@/Exceptions/HTTPError";
import HTTPStatus from "@/Server/HTTPStatus";

/**
 * Exception thrown when the application cannot read the contents of a folder.
 */
export default class UnableToReadFolderException extends HTTPError {
  /**
   * Constructor of the UnableToReadFolderException.
   *
   * @param folderName The name of the folder.
   */
  public constructor(folderName: string) {
    super("onebe.errors.utils.unable-to-read-folder", HTTPStatus.SERVER_ERROR, { folderName });
  }
}
