import { NextFunction, Request, Response } from "express";
import passport from "passport";
import app from "../App";
import { defineMiddleware, Route } from "../Router";
import IPayload from "./IPayload";
import { decode, extractToken, verify } from "./JWT";
import MetadataStore from "../Documentation/MetadataStore";
import AuthenticationMethod from "./AuthenticationMethod";

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
export const extractUser = defineMiddleware((req: Request, res: Response, next: NextFunction): void => {
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
