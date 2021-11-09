import HTTPStatus from "../HTTP/HTTPStatus";

export default class HTTPError extends Error {
  public status = 500;
  public parameters: any = null;

  public constructor(
    message: string,
    status = HTTPStatus.SERVER_ERROR,
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    parameters?: any
  ) {
    super(message);
    this.status = status;
    this.parameters = parameters;
  }
}
