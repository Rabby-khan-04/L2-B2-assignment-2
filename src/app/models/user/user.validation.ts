import { z } from "zod";

// Validation schema for FullName
export const fullNameValidationSchema = z.object({
  firstName: z
    .string({
      required_error: "First name is required",
      invalid_type_error: "Name must be a string",
    })
    .max(20, { message: "Must be 20 or fewer characters long" }),
  lastName: z
    .string({
      required_error: "Last name is required",
      invalid_type_error: "Name must be a string",
    })
    .max(20, { message: "Must be 20 or fewer characters long" }),
});

// Validation schema for Address
export const addressValidationSchema = z.object({
  street: z.string({ required_error: "Street is required" }),
  city: z.string({ required_error: "City is required" }),
  country: z.string({ required_error: "Country is required" }),
});

// Validation schema for Order
export const orderValidationSchema = z.object({
  productName: z.string({ required_error: "Product name is required" }),
  price: z.number({ required_error: "Price is required" }),
  quantity: z.number({ required_error: "Quantity is required" }),
});

// Validation schema for User
export const userValidationSchema = z.object({
  userId: z.number({ required_error: "User ID is required" }),
  username: z.string({ required_error: "Username is required" }),
  password: z.string({ required_error: "Password is required" }),
  fullName: fullNameValidationSchema.required({
    firstName: true,
    lastName: true,
  }),
  age: z.number({ required_error: "Age is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" }),
  isActive: z
    .boolean({ required_error: "isActive is required" })
    .default(true)
    .optional(),
  hobbies: z.array(z.string({ required_error: "Hobbies are required" })),
  address: addressValidationSchema.required({
    street: true,
    city: true,
    country: true,
  }),
  orders: z.array(orderValidationSchema).optional(),
});
