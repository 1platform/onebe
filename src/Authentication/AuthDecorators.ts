import { NextFunction, Request, Response } from "express";
import passport from "passport";
import app from "../App";
import Route from "../Router/Route";
import { defineMiddleware } from "../Router/RouteUtils";
import IPayload from "./IPayload";
import { decode, extractToken, verify } from "./JWT";

export const jwt = (
  target: Route,
  propertyKey: string,
  descriptor: PropertyDescriptor
): void => {
  const original = Array.isArray(descriptor.value)
    ? descriptor.value
    : [ descriptor.value ];

  Reflect.defineMetadata("route:auth", true, target, propertyKey);
  Reflect.defineMetadata("route:auth:jwt", true, target, propertyKey);
  descriptor.value = [
    passport.authenticate("jwt", { session: false }),
    ...original,
  ];
};

export const basic = (
  target: Route,
  propertyKey: string,
  descriptor: PropertyDescriptor
): void => {
  const original = Array.isArray(descriptor.value)
    ? descriptor.value
    : [ descriptor.value ];

  Reflect.defineMetadata("route:auth", true, target, propertyKey);
  Reflect.defineMetadata("route:auth:basic", true, target, propertyKey);
  descriptor.value = [
    passport.authenticate("basic", { session: false }),
    ...original,
  ];
};

export const extractUser = defineMiddleware(
  (req: Request, res: Response, next: NextFunction): void => {
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
  }
);
