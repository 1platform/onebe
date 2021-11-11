import { NextFunction, Request, Response } from "express";
/**
 * Route endpoint Middleware function definition.
 *
 * @param req The request object.
 * @param res The response object.
 * @param next The next callback function in list.
 */
export declare type HTTPMiddleware = (req: Request, res: Response, next?: NextFunction) => void;
