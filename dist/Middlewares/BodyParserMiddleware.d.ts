import { Application } from "express";
import IMiddleware from "./IMiddleware";
export default class BodyParserMiddleware implements IMiddleware {
    use(app: Application): void;
}
