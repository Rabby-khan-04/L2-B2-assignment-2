import { User } from "../user/user.model";
import { TOrder } from "./order.interface";

// Create or add order to user info
const createOrderIntoDb = async (userId: number, orderData: TOrder) => {
  if (await User.isUserIdExists(userId)) {
    const result = await User.updateOne(
      { userId },
      {
        $push: {
          orders: orderData,
        },
      },
    );
    return result;
  } else {
    throw new Error("User not found!");
  }
};

// Get all order of a user
const getAllOrdersFromDB = async (userId: number) => {
  if (await User.isUserIdExists(userId)) {
    const result = await User.findOne({ userId }, { _id: 0, orders: 1 });

    return result;
  } else {
    throw new Error("User not found!");
  }
};

// Get total price from orders
const getTotalPriceFromDB = async (userId: number) => {
  if (await User.isUserIdExists(userId)) {
    const result = await User.aggregate([
      {
        $match: { userId },
      },
      {
        $unwind: "$orders",
      },
      {
        $group: {
          _id: null,
          totalPrice: {
            $sum: { $multiply: ["$orders.price", "$orders.quantity"] },
          },
        },
      },
      {
        $project: { _id: 0, totalPrice: 1 },
      },
    ]);

    return result;
  } else {
    throw new Error("User not found!");
  }
};

export const OrderServices = {
  createOrderIntoDb,
  getAllOrdersFromDB,
  getTotalPriceFromDB,
};
