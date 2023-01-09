import UserModel from "./UserModel";
// import { UserInterface } from "./user-lib";



export const addUser = async (user: any) => {
    return await UserModel.create(user);
}