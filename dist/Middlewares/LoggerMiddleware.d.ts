import { Application } from "express";
import IMiddleware from "./IMiddleware";
declare global {
    namespace Express {
        interface Request {
            version?: string;
        }
    }
}
export default class LoggerMiddleware implements IMiddleware {
    use(app: Application): void;
}
