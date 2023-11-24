import { Schema } from "mongoose";
import { TOrder } from "./order.interface";

// order Schema
export const orderSchema = new Schema<TOrder>({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});
