import express, { Router } from "express";
import { UserController } from "./user.controller";

// Creating the router
const router: Router = express.Router();

router.post("/", UserController.createNewUser);

export const UserRouter = router;
