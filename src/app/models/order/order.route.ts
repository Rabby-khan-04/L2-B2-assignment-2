import express, { Router } from "express";
import { OrderController } from "./order.controller";

// Creating the router
const router: Router = express.Router();

router.put("/:userId/orders", OrderController.createOrder);
router.get("/:userId/orders", OrderController.getAllOrders);
router.get("/:userId/orders/total-price", OrderController.getTotalPrice);

export const OrderRouter = router;
