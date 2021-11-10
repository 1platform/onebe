import { Application } from "express";
import IMiddleware from "./IMiddleware";
/**
 * Page information middleware
 */
export default class PageInfoMiddleware implements IMiddleware {
    /**
     * The middleware initialization method.
     *
     * @param app The express application on which we apply the middleware.
     */
    use(app: Application): void;
}
