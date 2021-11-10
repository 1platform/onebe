import { Application } from "express";
/**
 * The base definition of a middleware class.
 */
export default interface IMiddleware {
    /**
     * The middleware initialization method.
     *
     * @param app The express application on which we apply the middleware.
     */
    use(app: Application): void;
}
