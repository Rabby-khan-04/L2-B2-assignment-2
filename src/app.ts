import express, { Application, Request, Response } from "express";
import cors from "cors";
import { UserRouter } from "./app/models/user/user.route";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", UserRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("hello world!!");
});

export default app;
