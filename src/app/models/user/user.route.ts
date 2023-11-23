import express, { Router } from "express";
import { UserController } from "./user.controller";

// Creating the router
const router: Router = express.Router();

router.post("/", UserController.createNewUser);
router.get("/", UserController.getAllUser);
router.get("/:userId", UserController.getSingleUser);
router.put("/:userId", UserController.updateUserData);
router.delete("/:userId", UserController.deleteUserData);
router.put("/:userId/orders", UserController.createOrder);
router.get("/:userId/orders", UserController.getAllOrders);

export const UserRouter = router;
