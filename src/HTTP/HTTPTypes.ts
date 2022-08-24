import { NextFunction, Request, Response } from "express";

/**
 * Definition of how a Middleware Function should look like.
 *
 * @param request The request object.
 * @param response The response object.
 * @param next The next callback function in list.
 */
export type HTTPMiddleware = (request: Request, response: Response, next?: NextFunction) => void;

/**
 * Re-exported Request Express type/interface.
 */
export type ExpressRequest = Request;
/**
 * Re-exported Response Express type/interface.
 */
export type ExpressResponse = Response;
/**
 * Re-exported NextFunction Express type/interface.
 */
export type ExpressNextFunction = NextFunction;
