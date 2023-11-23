import { Schema, model } from "mongoose";
import {
  TAddress,
  TFullName,
  TOrder,
  TUser,
  UserModel,
} from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../config";

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
const userSchema = new Schema<TUser, UserModel>({
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
userSchema.statics.isUserIdExists = async function (id: number) {
  const exsitingUserId = await User.findOne({ userId: id });
  return exsitingUserId;
};

// method for finding unique username
userSchema.statics.isUserNameExists = async function (username: string) {
  const exsitingUsername = await User.findOne({ username });
  return exsitingUsername;
};

// method for checking is user email exists
userSchema.statics.isUserEmailExists = async function (email: string) {
  const exsitingUserEmail = await User.findOne({ email });
  return exsitingUserEmail;
};

// post middleware
userSchema.pre("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

// Create a Model.
export const User = model<TUser, UserModel>("user", userSchema);
