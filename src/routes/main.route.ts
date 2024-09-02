import express from "express";
import userRouter from "./users/user.route";
const MainRouter = express.Router();

MainRouter.use(userRouter);
export default MainRouter;
