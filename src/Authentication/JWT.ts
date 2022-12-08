import { Request } from "express";
import jwt from "jsonwebtoken";
import { ExtractJwt } from "passport-jwt";
import { parse } from "passport-jwt/lib/auth_header";
import Config from "@/System/Config";
import type IPayload from "@/Authentication/IPayload";

/**
 * Creates a signed JWT Token that can be sent to the user and used
 * for the Bearer authentication method.
 *
 * @param payload The payload we want to sign.
 * @param rememberMe Should the token be valid for a longer period.
 */
export function sign(payload: IPayload | string, rememberMe = false): string {
  return jwt.sign(payload as any, Config.string("auth.jwt.secret"), {
    expiresIn: rememberMe ? Config.string("auth.jwt.rememberMeTime", "1d") : Config.string("auth.jwt.expireTime", "1d"),
    issuer: Config.string("auth.jwt.issuer", "onebe.sprk.dev"),
    audience: Config.string("auth.jwt.audience", "onebe.sprk.dev"),
  });
}

/**
 * Creates a short timed signed JWT Token that can be sent to the user and used
 * for the Bearer authentication method.
 *
 * @param payload The payload we want to sign.
 */
export function shortLiveToken(payload: IPayload | string): string {
  return jwt.sign(payload as any, Config.string("auth.jwt.secret"), {
    expiresIn: "1m",
    issuer: Config.string("auth.jwt.issuer", "onebe.sprk.dev"),
    audience: Config.string("auth.jwt.audience", "onebe.sprk.dev"),
  });
}

/**
 * Checks if the given token is valid or not.
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
 * @param token The token to be decoded.
 */
export function decode(token: string): IPayload | string {
  return jwt.decode(token) as IPayload | string;
}

/**
 * Extracts the token from the request object.
 *
 * @param request The request object.
 */
export function extractToken(request: Request): string {
  let authParams = parse(request.headers.authorization);
  if (authParams && authParams.scheme.toLowerCase() === "bearer") {
    return authParams.value;
  }

  authParams = ExtractJwt.fromUrlQueryParameter("bearer")(request);
  return authParams || "";
}
