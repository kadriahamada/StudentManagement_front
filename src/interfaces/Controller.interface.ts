import { Request, Response } from "express";

export interface IContrroler {
  Update?(req: Request, res: Response): void;
  Delete?(req: Request, res: Response): void;
  ViewAll(req: Request, res: Response): void;
  FindOne?(req: Request, res: Response): void;
  Create(req: Request, res: Response): void;
}
