import { Application } from "express";
import IMiddleware from "./IMiddleware";
/**
 * Middleware used to enable the Internationalisation (i18n) support for the application endpoints.
 * Since you might want to have the messages translated to the language chosen by the user
 * when the request was made, the i18n support needs to be added to the request object.
 */
export default class I18nMiddleware implements IMiddleware {
    /**
     * The middleware initialization method.
     *
     * @param app The express application on which we apply the middleware.
     */
    use(app: Application): void;
}
