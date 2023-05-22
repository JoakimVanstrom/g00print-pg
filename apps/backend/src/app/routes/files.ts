import { Router } from 'express';
import { addFile, getFiles, deleteFile } from '@g00print-ab/g00print-lib';
import expressFileUpload from 'express-fileupload';


const router = Router();


router.get('/upload', (req, res) => {
    res.send('upload');
})

router.post('/upload', (req, res) => {
    if (req.files) {
        const file = req.files.file as expressFileUpload.UploadedFile;
        const fileName = file.name;
        file.mv('./apps/frontend/src/assets/uploads/' + fileName, (err) => {
            if (err) {
                console.log(err);
                res.send('error occured');
            } else {
                addFile({ name: fileName, creator: req.body.creator, path: './apps/frontend/src/assets/uploads/' + fileName, renderPath: '../../assets/uploads/' + fileName, desc: req.body.desc });
                res.send('Success');
            
            }
        });
    }
});

router.get('/api/gallery', async (req, res) => {
    const files = await getFiles();
    res.send(files);
})

router.delete('/api/gallery/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await deleteFile(id);
    res.sendStatus(200);
})




export default router;