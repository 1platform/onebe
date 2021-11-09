import { NextFunction, Request, Response } from "express";

export type HTTPMiddleware = (
  req: Request,
  res: Response,
  next?: NextFunction
) => void;
