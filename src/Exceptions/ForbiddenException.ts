import HTTPStatus from "../HTTP/HTTPStatus";
import HTTPError from "./HTTPError";

export default class PageNotFoundException extends HTTPError {
  public constructor() {
    super("errors.default.forbidden", HTTPStatus.FORBIDDEN);
  }
}
