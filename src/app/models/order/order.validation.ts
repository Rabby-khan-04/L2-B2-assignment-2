import { z } from "zod";

// Validation schema for Order
export const orderValidationSchema = z.object({
  productName: z.string({ required_error: "Product name is required" }),
  price: z.number({ required_error: "Price is required" }),
  quantity: z.number({ required_error: "Quantity is required" }),
});
