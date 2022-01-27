import { Application } from "express";
import session from "express-session";
import IMiddleware from "./IMiddleware";
/**
 * Session middleware.
 */
export default class SessionMiddleware implements IMiddleware {
    private static _store;
    static set store(newStore: session.Store);
    /**
     * The middleware initialization method.
     *
     * @param app The express application on which we apply the middleware.
     */
    use(app: Application): void;
}
