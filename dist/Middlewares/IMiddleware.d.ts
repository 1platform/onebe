import { Application } from "express";
export default interface IMiddleware {
    use(app: Application): void;
}
