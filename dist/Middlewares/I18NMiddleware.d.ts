import { Application } from "express";
import IMiddleware from "./IMiddleware";
export default class I18nMiddleware implements IMiddleware {
    use(app: Application): void;
}
