import FileModel from './FileModel'

export const addFile = async (file: any) => {
    return await FileModel.create(file)
}