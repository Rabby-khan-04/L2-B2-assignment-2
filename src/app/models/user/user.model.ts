import { Schema, model } from "mongoose";
import {
  TAddress,
  TFullName,
  TOrder,
  TUser,
  UserMethods,
  UserModel,
} from "./user.interface";

// Create a Schema corresponding to the document interface.

// fullName Schema
const fullNameSchema = new Schema<TFullName>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

// address Schema
const addressSchema = new Schema<TAddress>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

// order Schema
const orderSchema = new Schema<TOrder>({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

// user Schema
const userSchema = new Schema<TUser, UserModel, UserMethods>({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: fullNameSchema, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  isActive: { type: Boolean, default: true },
  hobbies: { type: [String], required: true },
  address: { type: addressSchema, required: true },
  orders: { type: [orderSchema] },
});

// Method for finding Unique Id
userSchema.methods.isUserIdExists = async function (id: number) {
  const exsitingUser = await User.findOne({ userId: id });
  return exsitingUser;
};

// method for finding unique username
userSchema.methods.isUserNameExists = async function (username: string) {
  const exsitingUser = await User.findOne({ username });
  return exsitingUser;
};

// Create a Model.
export const User = model<TUser, UserModel>("user", userSchema);
