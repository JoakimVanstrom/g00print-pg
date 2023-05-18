import FileModel from './FileModel'

export const getFiles = async () => {
    return await FileModel.findAll();
}
