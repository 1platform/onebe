import { Request } from "express";
import jwt from "jsonwebtoken";
import { ExtractJwt } from "passport-jwt";
import { parse } from "passport-jwt/lib/auth_header";
import Config from "../System/Config";
import IPayload from "./IPayload";

/**
 * Signs in a user with the given payload.
 *
 * @param payload The payload to authenticate.
 * @param rememberMe Should the token be remembered for a longer period.
 */
export function sign(payload: IPayload | string, rememberMe = false): string {
  return jwt.sign(
    // eslint-disable-next-line @typescript-eslint/ban-types
    payload as object | string,
    Config.string("auth.jwt.secret"),
    {
      expiresIn: rememberMe
        ? Config.string("auth.jwt.rememberMeTime", "1d")
        : Config.string("auth.jwt.expireTime", "1d"),
      issuer: Config.string("auth.jwt.issuer", "onebe.sprk.dev"),
      audience: Config.string("auth.jwt.audience", "onebe.sprk.dev"),
    }
  );
}

/**
 * Signs in an application with the given payload.
 *
 * @param payload The payload to authenticate.
 */
export function shortLiveToken(payload: IPayload | string): string {
  return jwt.sign(
    // eslint-disable-next-line @typescript-eslint/ban-types
    payload as object | string,
    Config.string("auth.jwt.secret"),
    {
      expiresIn: "1m",
      issuer: Config.string("auth.jwt.issuer", "onebe.sprk.dev"),
      audience: Config.string("auth.jwt.audience", "onebe.sprk.dev"),
    }
  );
}

/**
 * Verifies if the given token is valid or not.
 *
 * @param token The token to be verified.
 */
export function verify(token: string): boolean {
  return (
    token !== "" &&
    !!jwt.verify(token, Config.string("auth.jwt.secret"), {
      issuer: Config.string("auth.jwt.issuer", "onebe.sprk.dev"),
      audience: Config.string("auth.jwt.audience", "onebe.sprk.dev"),
    })
  );
}

/**
 * Decodes the given token.
 *
 * @param token The token to be token.
 */
export function decode(token: string): IPayload | string {
  return jwt.decode(token) as IPayload | string;
}

/**
 * Extracts the token from the request object.
 *
 * @param req The request object.
 */
export function extractToken(req: Request): string {
  let authParams = parse(req.headers.authorization);
  if (authParams && authParams.scheme.toLowerCase() === "bearer") {
    return authParams.value;
  }

  authParams = ExtractJwt.fromUrlQueryParameter("bearer")(req);
  return authParams || "";
}
