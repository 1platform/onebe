import { NextFunction, Request, Response } from "express";
/**
 * Route endpoint Middleware function definition.
 *
 * @param req The request object.
 * @param res The response object.
 * @param next The next callback function in list.
 */
export declare type HTTPMiddleware = (req: Request, res: Response, next?: NextFunction) => void;
/**
 * Re-exported Request Express type/interface.
 */
export declare type ExpressRequest = Request;
/**
 * Re-exported Response Express type/interface.
 */
export declare type ExpressResponse = Response;
/**
 * Re-exported NextFunction Express type/interface.
 */
export declare type ExpressNextFunction = NextFunction;
