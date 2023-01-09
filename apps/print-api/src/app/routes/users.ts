import {Router} from 'express';
import { addUser, getUsers, getUserById, User } from '@g00-print/g00print-lib';



const router = Router();

router.post('/api/auth', async (req, res, next) => {
    try {
        const token = await User.authenticate(req.body.email, req.body.password);
        res.send(token);
    } catch (err) {
        next(err);
    }
});

router.get('/api/users', async (req, res, next) => {
   try {
    const users = await getUsers();
    res.send(users);
    } catch (err) {
        next(err);
    }
});

router.get('/api/user/:id', async (req, res, next) => {
    try {
        const user = await getUserById(req.params.id);
        res.send(user);
    } catch (err) {
        next(err);
    }
}
);

router.post('/api/user', async (req, res, next) => {
    try {
        const user = await addUser(req.body);
        res.send(user);
    } catch (err) {
        next(err);
    }
}
);
router.delete('/api/user/:id', async (req, res, next) => {
    try {
        await User.destroy({where: {id: req.params.id}});
        res.sendStatus(200);
    } catch (err) {
        next(err);
    }
});



export default router;