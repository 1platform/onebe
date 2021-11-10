import { Application } from "express";
import IMiddleware from "./IMiddleware";
/**
 * Passport middleware.
 */
export default class PassportMiddleware implements IMiddleware {
    /**
     * The middleware initialization method.
     *
     * @param app The express application on which we apply the middleware.
     */
    use(app: Application): void;
}
