import { Application } from "express";
import { IUser } from "../Authentication/IUser";
import IMiddleware from "./IMiddleware";
declare global {
    namespace Express {
        interface User extends IUser {
        }
        interface Request {
            user?: User;
        }
    }
}
export default class PassportMiddleware implements IMiddleware {
    use(app: Application): void;
}
