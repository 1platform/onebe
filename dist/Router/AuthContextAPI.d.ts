import { Request } from "express";
/**
 * A class used to expose the Authentication Context information from a request.
 *
 * This context will handle everything related to the authentication and
 * authorisation part of your application.
 */
export default class AuthContextAPI {
    /**
     * The request object for which the Authentication Context is served.
     */
    private readonly _request;
    /**
     * A store with custom data received from the request object.
     */
    private _authStore;
    /**
     * Authentication Context constructor.
     *
     * @param request The Request for which we serve the Authentication Context.
     * @param [baseStore] The store with Authentication Data.
     */
    constructor(request: Request, baseStore?: Record<string, unknown>);
    /**
     * Getter for the User object from the request.
     */
    get user(): Express.User | undefined;
    /**
     * Getter for the Bearer token.
     */
    get token(): string;
    /**
     * Getter for the isAuthenticated flag.
     */
    get isAuthenticated(): boolean;
    /**
     * Method used to log the user out from the application.
     */
    logout(): void;
    /**
     * Getter function for elements from the authentication store.
     *
     * @param key The key for which you need information.
     */
    get<T = any>(key: string): T;
    /**
     * Setter function for elements into the authentication store.
     *
     * @param key The key on which you set information.
     * @param value The value which you want to store.
     */
    set<T = any>(key: string, value: T): void;
}
