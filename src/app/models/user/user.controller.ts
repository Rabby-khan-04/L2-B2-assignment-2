import { Request, Response } from "express";
import { userValidationSchema } from "./user.validation";
import { UserServices } from "./user.service";

// Create a new user
const createNewUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;
    const validUserData = userValidationSchema.parse(userData); // Validating input data

    const data = await UserServices.createNewUserIntoDB(validUserData);
    res.status(200).json({
      success: true,
      message: "User Created successfully!",
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

// Get all user
const getAllUser = async (req: Request, res: Response) => {
  try {
    const data = await UserServices.getAllUserFromDB();
    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
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

// Get single user
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const data = await UserServices.getSingleUserFromDb(parseFloat(userId));
    res.status(200).json({
      success: true,
      message: "User fetched successfully!",
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

export const UserController = {
  createNewUser,
  getAllUser,
  getSingleUser,
};
