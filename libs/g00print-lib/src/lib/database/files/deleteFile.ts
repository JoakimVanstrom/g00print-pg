import File from './FileModel'

export const deleteFile = async (id: number) => {
    const file = await File.findOne({where: {id}});
    if (!file) {
        throw new Error('File not found');
    }
    await file.destroy();
    return file;
}