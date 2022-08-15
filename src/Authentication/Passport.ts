import passport from "passport";
import { BasicStrategy } from "passport-http";
import { Strategy } from "passport-jwt";
import Config from "../System/Config";
import IPayload from "./IPayload";
import IUser from "./IUser";
import { extractToken } from "./JWT";

/**
 * Passport strategy initialisation method options.
 */
export interface IInitStrategyOptions {
  /**
   * The function used for User serialization.
   */
  serializeUser?: (user: IUser) => IPayload;
  /**
   * The function used for Payload deserialization.
   */
  deserializeUser?: (payload: IPayload, done: (err: any, user?: IUser) => void) => void;
  /**
   * The function used for basic authentication.
   */
  basicAuth?: (username: string, password: string, done: (err: any, user?: IUser) => void) => void;
}

/**
 * Passport strategies and serialization/deserialization initialisation function.
 *
 * @param props The properties passed to the init function.
 */
export default function initPassportStrategy(props: IInitStrategyOptions): void {
  passport.serializeUser((user: IUser, done: (err: Error, payload: IPayload) => void): void => {
    done(null, "serializeUser" in props ? props.serializeUser(user) : { userId: user.id });
  });
  passport.deserializeUser(
    "deserializeUser" in props
      ? props.deserializeUser
      : (payload: IPayload, done: (err: any, user?: IUser) => void) => {
        done(null, { id: payload.userId, ...payload });
      }
  );
  passport.use(
    "bearer",
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
        : (username: string, password: string, done: (err: any, user?: IUser) => void) => {
          done(null, { id: username });
        }
    )
  );
}

/**
 * The passport instance used throughout the framework.
 */
export { passport };
