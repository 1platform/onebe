import { Application } from "express";
import passport from "passport";
import { IUser } from "../Authentication/IUser";
import IMiddleware from "./IMiddleware";

declare global {
  namespace Express {
    export interface User extends IUser {}

    export interface Request {
      user?: User;
    }
  }
}

export default class PassportMiddleware implements IMiddleware {
  use(app: Application): void {
    app.use(passport.initialize());
    app.use(passport.session());
  }
}
