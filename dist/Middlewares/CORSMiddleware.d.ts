import { Application } from "express";
import IMiddleware from "./IMiddleware";
/**
 * Middleware used to enable the Cross-Origin Resource Sharing functionality for
 * your application.
 */
export default class CORSMiddleware implements IMiddleware {
    /**
     * The middleware initialization method.
     *
     * @param app The express application on which we apply the middleware.
     */
    use(app: Application): void;
}
