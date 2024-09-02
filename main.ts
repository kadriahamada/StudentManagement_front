import dotenv from "dotenv";
dotenv.config();

import express from "express";
import "express-async-errors";
import { Logger } from "./src/middlewares/logger.middleware";
import { ErrorHandlerMiddleware } from "./src/middlewares/errorhandler.middleware";
import { NotFoundMiddelware } from "./src/middlewares/notfoundmiddleware";

// import MainRouter from "src/routes/main.route";

const app = express();
// app.use(MainRouter);
app.use(Logger);

app.get("/", (req, res) => {
  res.json("Log your app");
});
app.use(NotFoundMiddelware);
app.use(ErrorHandlerMiddleware);

app.listen(4000, () => {
  console.log("Surver is running on port 4000");
});
