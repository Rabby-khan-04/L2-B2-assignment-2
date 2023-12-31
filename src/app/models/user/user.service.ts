import { TUser } from "./user.interface";
import { User } from "./user.model";

// Create a new user into data base
const createNewUserIntoDB = async (userData: TUser) => {
  if (await User.isUserIdExists(userData.userId)) {
    throw new Error(
      "User ID is already in use. Please choose a different User ID.",
    );
  } else if (await User.isUserNameExists(userData.username)) {
    throw new Error(
      "User Name is already in use. Please choose a different User Name.",
    );
  } else if (await User.isUserEmailExists(userData.email)) {
    throw new Error(
      "This Email is already in use. Please choose a different Email.",
    );
  }
  const result = await User.create(userData);
  return result;
};

// Get all users form database
const getAllUserFromDB = async () => {
  const result = await User.aggregate([
    {
      $project: {
        _id: 0,
        username: 1,
        fullName: 1,
        age: 1,
        email: 1,
        address: 1,
      },
    },
  ]); // Aggregation pipeline for filtring user data
  return result;
};

// Get a single user from data base
const getSingleUserFromDb = async (id: number) => {
  if (await User.isUserIdExists(id)) {
    const result = await User.aggregate([
      {
        $match: { userId: id },
      },
      {
        $project: { _id: 0, password: 0, orders: 0 },
      },
    ]); // Aggregation pipeline for get single user

    return result.length > 0 ? result[0] : null;
  } else {
    throw new Error("User not found!");
  }
};

// Update user info
const updateUserDataIntoDB = async (userId: number, userData: TUser) => {
  if (await User.isUserIdExists(userId)) {
    const reuslt = await User.findOneAndUpdate({ userId }, userData);
    return reuslt;
  } else {
    throw new Error("User not found!");
  }
};

// delete user info
const deleteUserDataFromDB = async (userId: number) => {
  if (await User.isUserIdExists(userId)) {
    const reuslt = await User.deleteOne({ userId });
    return reuslt;
  } else {
    throw new Error("User not found!");
  }
};

export const UserServices = {
  createNewUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDb,
  updateUserDataIntoDB,
  deleteUserDataFromDB,
};
