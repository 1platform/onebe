import { Application } from "express";
import IMiddleware from "./IMiddleware";
export default class LoggerMiddleware implements IMiddleware {
    use(app: Application): void;
}
