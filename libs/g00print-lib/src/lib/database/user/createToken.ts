import * as jwt from 'jsonwebtoken';

const getToken = "secretNinja"

export const createToken = (name: string, email: string, role: string, id: number) => {
    return jwt.sign({name, email, role, id}, getToken, {expiresIn: '30d'});
}

