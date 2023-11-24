import { Model } from "mongoose";
import { TOrder } from "../order/order.interface";

// FullName Interface
export type TFullName = {
  firstName: string;
  lastName: string;
};

// Address Interface
export type TAddress = {
  street: string;
  city: string;
  country: string;
};

// User Interface
export type TUser = {
  userId: number;
  username: string;
  password: string;
  fullName: TFullName;
  age: number;
  email: string;
  isActive?: boolean;
  hobbies: string[];
  address: TAddress;
  orders?: TOrder[];
};

//user instance method
export interface UserModel extends Model<TUser> {
  isUserIdExists(id: number): Promise<TUser | null>;
  isUserNameExists(userName: string): Promise<TUser | null>;
  isUserEmailExists(email: string): Promise<TUser | null>;
}

// export type UserModel = Model<TUser, Record<string, never>, UserMethods>;
