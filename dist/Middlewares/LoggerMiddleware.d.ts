import { Application } from "express";
import IMiddleware from "./IMiddleware";
/**
 * Middleware used to add logging support to the Express application.
 */
export default class LoggerMiddleware implements IMiddleware {
    /**
     * The middleware initialization method.
     *
     * @param app The express application on which we apply the middleware.
     */
    use(app: Application): void;
}
