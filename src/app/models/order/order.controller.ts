import { Request, Response } from "express";
import { OrderServices } from "./order.service";

// Create new order
const createOrder = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { order } = req.body;
    await OrderServices.createOrderIntoDb(parseFloat(userId), order);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: null,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error || null,
    });
  }
};

// Get all orders
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const data = await OrderServices.getAllOrdersFromDB(parseFloat(userId));
    res.status(200).json({
      success: true,
      message: "Order fetched successfully!",
      data: data,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error || null,
    });
  }
};

// Get total price from orders
const getTotalPrice = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const data = await OrderServices.getTotalPriceFromDB(parseFloat(userId));
    res.status(200).json({
      success: true,
      message: "Total price calculated successfully!",
      data,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error || null,
    });
  }
};

export const OrderController = { createOrder, getAllOrders, getTotalPrice };
