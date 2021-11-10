import HTTPStatus from "../HTTP/HTTPStatus";
/**
 * Generic Exception with HTTP Status Code.
 */
export default class HTTPError extends Error {
    /**
     * The HTTP Status code.
     */
    status: HTTPStatus;
    /**
     * The additional parameters sent to the exception.
     */
    parameters: any;
    /**
     * Constructor of the HTTPError.
     *
     * @param message The message of the exception.
     * @param status The status code of the exception.
     * @param parameters Some extra parameters sent to the error.
     */
    constructor(message: string, status?: HTTPStatus, parameters?: any);
}
