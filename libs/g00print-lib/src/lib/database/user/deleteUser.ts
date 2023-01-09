import User from './UserModel';

export const deleteUser = async (id: number) => {
    const user = await User.findOne({where: {id}});
    if (!user) {
        throw new Error('User not found');
    }
    await user.destroy();
    return user;
}