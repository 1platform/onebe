import { Application } from "express";
import IMiddleware from "./IMiddleware";
declare global {
    namespace Express {
        interface Request {
            pageURL?: string;
            appURL?: string;
            sysConfig?: Record<string, string | number | boolean | null>;
        }
    }
}
export default class PageInfoMiddleware implements IMiddleware {
    use(app: Application): void;
}
