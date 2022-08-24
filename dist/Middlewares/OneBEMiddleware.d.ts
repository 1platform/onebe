import { Application } from "express";
import IMiddleware from "./IMiddleware";
/**
 * Middleware used to add information about the framework.
 */
export default class OneBEMiddleware implements IMiddleware {
    /**
     * The middleware initialization method.
     *
     * @param app The express application on which we apply the middleware.
     */
    use(app: Application): void;
}
