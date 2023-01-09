import UserModel from './UserModel';

export const getUserById = async (id: string) => {
  return await UserModel.findByPk(id);
};
