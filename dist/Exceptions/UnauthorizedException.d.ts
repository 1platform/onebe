import HTTPError from "./HTTPError";
/**
 * Exception thrown when a user isn't authorized to perform the action.
 */
export default class UnauthorizedException extends HTTPError {
    /**
     * Constructor of the UnauthorizedException.
     */
    constructor();
}
