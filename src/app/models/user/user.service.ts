import { TUser } from "./user.interface";
import { User } from "./user.model";

const createNewUserIntoDB = async (userData: TUser) => {
  const user = new User(userData);
  if (await user.isUserIdExists(userData.userId)) {
    throw new Error(
      "User ID is already in use. Please choose a different User ID.",
    );
  } else if (await user.isUserNameExists(userData.username)) {
    throw new Error(
      "User Name is already in use. Please choose a different User Name.",
    );
  } else if (await user.isUserEmailExists(userData.email)) {
    throw new Error(
      "This Email is already in use. Please choose a different Email.",
    );
  }
  const result = await user.save();
  return result;
};

export const UserServices = {
  createNewUserIntoDB,
};
