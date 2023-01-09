import UserModel from "./UserModel";

export const getUsers = async () => {
    return await UserModel.findAll();
}