import UserModel from "./UserModel";
import { User } from "./user-lib";



export const addUser = async (user: any) => {
    const findUser = await User.findOne({ where: { email: user.email } });
    if (findUser) {
        throw new Error('User already exists');
    }
    return await UserModel.create(user);
}