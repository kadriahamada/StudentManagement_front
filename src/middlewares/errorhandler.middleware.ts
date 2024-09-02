import { Request, Response, NextFunction } from "express";

export const ErrorHandlerMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(404).json({ error: err });
};
