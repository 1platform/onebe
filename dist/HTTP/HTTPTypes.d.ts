import { NextFunction, Request, Response } from "express";
export declare type HTTPMiddleware = (req: Request, res: Response, next?: NextFunction) => void;
