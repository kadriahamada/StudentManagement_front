import { Request, Response, NextFunction } from "express";

export const NotFoundMiddelware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(404).json("The page you are looking for does not exist");
};
