import express, { Application, Request, Response } from "express";
import cors from "cors";
import { UserRouter } from "./app/models/user/user.route";
import { OrderRouter } from "./app/models/order/order.route";

const app: Application = express(); // Creating the express app

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

// middleware
app.use(cors(corsOptions));

// parsers
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", UserRouter);
app.use("/api/users", OrderRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("hello world!!");
});

export default app;
