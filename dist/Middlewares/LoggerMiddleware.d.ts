import { Application } from "express";
import IMiddleware from "./IMiddleware";
/**
 * The logger middleware.
 */
export default class LoggerMiddleware implements IMiddleware {
    /**
     * The middleware initialization method.
     *
     * @param app The express application on which we apply the middleware.
     */
    use(app: Application): void;
}
