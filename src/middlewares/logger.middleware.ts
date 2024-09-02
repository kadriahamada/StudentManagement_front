import path from "path";
import fs from "fs";
import e, { NextFunction, Request, Response } from "express";
import { format } from "date-fns";

export const EventLogger = (message: string, filename: string) => {
  const rootPath = path.join(__dirname, "..", "logs");
  const exists = fs.existsSync(rootPath);
  if (!exists) {
    fs.mkdirSync(path.join(__dirname, "..", "logs"));
  }
  const dateTime = format(new Date(), "yyyy-MM-dd HH:mm:ss");
  const NewMessage = `[${dateTime}] ${message} "\n"`;
  const filePath = path.join(rootPath, `${filename}.log`);
  fs.writeFileSync(filePath, NewMessage, { flag: "a" });
};

export const Logger = (req: Request, res: Response, next: NextFunction) => {
  const usr = req.url;
  const origin = req.headers.origin;
  const method = req.method;

  const message = `Url: ${usr} Origin: ${origin} Method: ${method}`;
  EventLogger(message, "logger");
  next();
};
