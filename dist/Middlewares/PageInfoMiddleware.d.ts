import { Application } from "express";
import IMiddleware from "./IMiddleware";
/**
 * Middleware that adds additional information to the request object. Through this
 * middleware you get access to the full App URL string and to the specific path your user
 * tried to access.
 */
export default class PageInfoMiddleware implements IMiddleware {
    /**
     * The middleware initialization method.
     *
     * @param app The express application on which we apply the middleware.
     */
    use(app: Application): void;
}
