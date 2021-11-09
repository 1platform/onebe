import { Application } from "express";
import IMiddleware from "./IMiddleware";
export default class SparkMiddleware implements IMiddleware {
    use(app: Application): void;
}
