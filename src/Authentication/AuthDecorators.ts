import { NextFunction, Request, Response } from "express";
import passport from "passport";
import signed from "signed";
import app from "@/App";
import { defineMiddleware, Route, RouteDecorator } from "@/Router";
import type { IPayload } from "@/Authentication";
import { AuthenticationMethod, decode, extractToken, verify } from "@/Authentication";
import MetadataStore from "@/Documentation/MetadataStore";
import { QueryParameterType } from "@/Documentation";
import Config from "@/System/Config";

/**
 * Instance of the URL signing utility that can be used to sign requests that
 * return a file - for the situations where the file is available only if the
 * user is authenticated.
 */
const signature = signed({
  secret: Config.string("auth.secret"),
  ttl: 60,
});

/**
 * Decorator used to enable Bearer Authentication for an endpoint.
 *
 * Using this decorator you can restrict the access to an endpoint only to the users
 * that are authenticated. Also, by using this decorator we mark the endpoint as
 * authenticated in the generated documentation files.
 *
 * Using the bearer authentication method, the authentication engine requires that
 * the `Authorization` header be present in the request and have a valid value:
 * the token Bearer followed by a JSON Web Token (JWT).
 *
 * @decorator
 * @param target The target on which we apply the decorator.
 * @param propertyKey The property key on which we apply the decorator.
 * @param descriptor The descriptor of the property we want to decorate.
 */
export const Bearer = (target: Route, propertyKey: string, descriptor: PropertyDescriptor): void => {
  const original = Array.isArray(descriptor.value) ? descriptor.value : [ descriptor.value ];

  MetadataStore.instance.route.endpointAuth(target.constructor.name, propertyKey, AuthenticationMethod.BEARER);
  descriptor.value = [ passport.authenticate("bearer", { session: false }), ...original ];
};

/**
 * Decorator used to enable Basic Authentication for an endpoint.
 *
 * Using this decorator you can restrict the access to an endpoint only to the users
 * that are authenticated. Also, by using this decorator we mark the endpoint as
 * authenticated in the generated documentation files.
 *
 * Using the basic authentication method, the authentication engine requires that
 * the user pass a valid username and password combination to it. The credentials
 * must be passed inside the `Authorization` header after the token `Basic` and
 * in a base64 encoded version.
 *
 * @decorator
 * @param target The target on which we apply the decorator.
 * @param propertyKey The property key on which we apply the decorator.
 * @param descriptor The descriptor of the property we want to decorate.
 */
export const Basic = (target: Route, propertyKey: string, descriptor: PropertyDescriptor): void => {
  const original = Array.isArray(descriptor.value) ? descriptor.value : [ descriptor.value ];

  MetadataStore.instance.route.endpointAuth(target.constructor.name, propertyKey, AuthenticationMethod.BASIC);
  descriptor.value = [ passport.authenticate("basic", { session: false }), ...original ];
};

/**
 * Middleware used to verify if a signed URL is valid.
 *
 * @decorator
 */
export function VerifyURL(): RouteDecorator {
  return (target: Route, propertyKey: string, descriptor: PropertyDescriptor) => {
    const original = Array.isArray(descriptor.value) ? descriptor.value : [ descriptor.value ];
    MetadataStore.instance.route.isSigned(target.constructor.name, propertyKey);
    MetadataStore.instance.route.endpointQuery(target.constructor.name, propertyKey, {
      name: "signed",
      type: QueryParameterType.STRING,
      description: "The hash required to verify if the signed URL is valid.",
    });
    descriptor.value = [ signature.verifier(), ...original ];
  };
}

/**
 * A list with all the options that you can pass to the sign method.
 */
export type SignMethodOptions = {
  /**
   * The method or a list of methods allowed to access the endpoint
   * secured by the signed URL.
   */
  method?: string | string[];
  /**
   * How many seconds should the URL be valid.
   */
  timeToLive?: number;
  /**
   * If you don't specify the Time To Live (TTL) parameter, you can specify a timestamp
   * at which the URL will not be valid.
   */
  expireAt?: number;
  /**
   * If specified, the URL will be valid only when this Address parameter is specified.
   */
  address?: string;
};

/**
 * Function used to create signed URLs.
 *
 * @param url The URL to be signed.
 * @param [options] The options used for the URL signing.
 *
 * @return {string}
 */
export const signURL = (url: string, options?: SignMethodOptions): string =>
  signature.sign(url, {
    method: options?.method,
    ttl: options?.timeToLive,
    exp: options?.expireAt,
    addr: options?.address,
  });

/**
 * Middleware used to extract the user from the request when using Bearer Authentication
 * on a mixed route (Public and Protected).
 *
 * Use this middleware when you have to provide an endpoint that based on the values
 * available in the header, return additional information.
 *
 * @decorator
 * @param target The target on which we apply the decorator.
 * @param propertyKey The property key on which we apply the decorator.
 * @param descriptor The descriptor of the property we want to decorate.
 */
export const ExtractUser = defineMiddleware((req: Request, res: Response, next: NextFunction): void => {
  const token = extractToken(req);
  try {
    if (!verify(token)) {
      return next();
    }
  } catch (err) {
    return next();
  }

  const decodedToken = decode(token) as IPayload;
  if ("deserializeUser" in app) {
    app.deserializeUser(decodedToken, (err, user) => {
      if (!err) {
        req.user = user;
      }

      next();
    });
    return;
  }
  req.user = {
    ...decodedToken,
    id: decodedToken.userId || decodedToken,
  };
  next();
});
