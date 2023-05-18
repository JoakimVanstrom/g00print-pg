import jwt from 'jsonwebtoken';


interface JwtPayload {
  id: string;
  role: string;
}

export function isAdmin(req, res, next) {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const user = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
        req.user = user;
        if (user.role != "admin") { 
            res.status(401).send({ error: 'You are not an admin' }); 
        } else {
            next();
        }
    } catch (error) {
        res.status(401).send({ error: 'Token is invalid' });
    }
}

export function getUser(req, res, next) {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const user = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Token is invalid' });
    }
}
