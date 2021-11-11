import { Application } from "express";
import IMiddleware from "./IMiddleware";
/**
 * The Spark Middleware.
 */
export default class SparkMiddleware implements IMiddleware {
    /**
     * The middleware initialization method.
     *
     * @param app The express application on which we apply the middleware.
     */
    use(app: Application): void;
}
