import express, { Router } from "express";
import { UserController } from "./user.controller";

// Creating the router
const router: Router = express.Router();

router.post("/", UserController.createNewUser);
router.get("/", UserController.getAllUser);
router.get("/:userId", UserController.getSingleUser);
router.put("/:userId", UserController.updateUserData);
router.delete("/:userId", UserController.deleteUserData);

export const UserRouter = router;
