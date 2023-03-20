import { Router, Request } from 'express';
import {
    addUser,
  getUsers,
  User,
} from '@g00-print/g00print-lib';
import {isAdmin, getUser} from '../middleware/AuthMiddleware';
import { UserInterface } from '@g00-print/g00print-lib';


const router = Router();

interface CustomRequest extends Request {
    user: UserInterface;
}

router.post('/api/login', async (req, res, next) => {
  try {
      const token = await User.authenticate(req.body.email, req.body.password);
      res.send(token);
  } catch (err) {
      next(err);
  }
});

router.get('/api/users', isAdmin, async (req, res, next) => {
     try {
    const users = await getUsers();
    res.send(users);
  } catch (err) {
    next(err);
  }
});


router.get('/api/user', getUser, async (req: CustomRequest, res, next) => {
    try {
        const user = await User.findOne({ where: { id: req.user.id }, attributes: { exclude: ['password'] } });
        console.log(user);
        res.send(user);
    } catch (err) {
        next(err);
    }
});


router.post('/api/add/user', async (req, res, next) => {
    try {
        const user = await addUser(req.body);
        res.send(user);
    } catch (err) {
        next(err);
    }
});

router.delete('/api/user/:id', async (req, res, next) => {
  try {
    await User.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

export default router;
