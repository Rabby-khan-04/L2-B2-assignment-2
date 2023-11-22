import { Request, Response } from "express";
import { userValidationSchema } from "./user.validation";
import { UserServices } from "./user.service";

const createNewUser = async (req: Request, res: Response) => {
  try {
    const { userData } = req.body;
    const validUserData = userValidationSchema.parse(userData);

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
      error,
    });
  }
};

export const UserController = {
  createNewUser,
};
