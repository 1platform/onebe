import { Application } from "express";
import IMiddleware from "./IMiddleware";
declare global {
    namespace Express {
        interface Request {
            pageURL?: string;
            appURL?: string;
        }
    }
}
export default class PageInfoMiddleware implements IMiddleware {
    use(app: Application): void;
}
