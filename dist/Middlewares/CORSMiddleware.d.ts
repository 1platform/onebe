import { Application } from "express";
import IMiddleware from "./IMiddleware";
export default class CORSMiddleware implements IMiddleware {
    use(app: Application): void;
}
