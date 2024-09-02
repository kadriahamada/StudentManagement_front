import express from "express";
import { UserController } from "src/controllers/users/user.controller";
const userRouter = express.Router();
const controller = new UserController();

userRouter.route("/").post(controller.Create);
export default userRouter;
