import passport from "passport";
import { BasicStrategy } from "passport-http";
import { Strategy } from "passport-jwt";
import Config from "../System/Config";
import IPayload from "./IPayload";
import { IUser } from "./IUser";
import { extractToken } from "./JWT";

export interface IInitStrategyOptions {
  serializeUser?: (user: IUser) => IPayload;
  deserializeUser?: (
    payload: IPayload,
    done: (err: any, user?: IUser) => void
  ) => void;
  basicAuth?: (
    username: string,
    password: string,
    done: (err: any, user?: IUser) => void
  ) => void;
}

export default function initPassportStrategy(
  props: IInitStrategyOptions
): void {
  passport.serializeUser(
    (user: IUser, done: (err: Error, payload: IPayload) => void): void => {
      done(
        null,
        "serializeUser" in props
          ? props.serializeUser(user)
          : { userId: user.id }
      );
    }
  );
  passport.deserializeUser(
    "deserializeUser" in props
      ? props.deserializeUser
      : (payload: IPayload, done: (err: any, user?: IUser) => void) => {
        done(null, { id: payload.userId, ...payload });
      }
  );
  passport.use(
    "jwt",
    new Strategy(
      {
        secretOrKey: Config.string("auth.jwt.secret"),
        issuer: Config.string("auth.jwt.issuer", "onebe.sprk.dev"),
        audience: Config.string("auth.jwt.audience", "onebe.sprk.dev"),
        jwtFromRequest: extractToken,
        ignoreExpiration: false,
      },
      "deserializeUser" in props
        ? props.deserializeUser
        : (payload: IPayload, done: (err: any, user?: IUser) => void) => {
          done(null, { id: payload.userId, ...payload });
        }
    )
  );
  passport.use(
    "basic",
    new BasicStrategy(
      "basicAuth" in props
        ? props.basicAuth
        : (
          username: string,
          password: string,
          done: (err: any, user?: IUser) => void
        ) => {
          done(null, { id: username });
        }
    )
  );
}

export { passport };
