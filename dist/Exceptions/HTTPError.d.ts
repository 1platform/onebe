import HTTPStatus from "../HTTP/HTTPStatus";
/**
 * A Generic Error with HTTP Status Code that can be thrown from your application.
 *
 * Using the HTTPError class you can easily specify the HTTP Status Code of the response
 * when the error is triggered.
 */
export default class HTTPError extends Error {
    /**
     * The HTTP Status code of the error.
     */
    status: HTTPStatus;
    /**
     * The additional parameters sent to the exception.
     */
    parameters: any;
    /**
     * Constructor of the Generic HTTP Error.
     *
     * @param message The message of the exception.
     * @param status The status code of the exception.
     * @param parameters Some extra parameters sent to the error.
     */
    constructor(message: string, status?: HTTPStatus, parameters?: any);
}
