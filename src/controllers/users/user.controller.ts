import { Request, Response } from "express";
import { IContrroler } from "src/interfaces/Controller.interface";
import { UserModel } from "src/models/users/user.model";

export class UserController implements IContrroler {
  constructor(private model = new UserModel()) {}
  Create(req: Request, res: Response): void {}
  ViewAll(req: Request, res: Response): void {}
}
