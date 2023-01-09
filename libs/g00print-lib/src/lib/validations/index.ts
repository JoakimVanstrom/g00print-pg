import {check, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

const validator = (validations: any) => async (req: Request, res: Response, next: NextFunction) => {
    for(const validation of validations) {
        const result = await validation.run(req);
        if(result.errors.length) break;
    }


    const errors = validationResult(req);
    if(errors.isEmpty()) {
        return next();  
    } 

    res.status(400).json({ errors: errors.array() });
}

module.exports = {
    login: validator([
        check('email').exists().withMessage('Email is not valid'),
        check('password').exists().withMessage('Missing password'),
    ]),
    register: validator([
        //email
        check('email').isEmail().withMessage('Invalid email format'),
        // name 
        check('name').isLength({min: 2, max:30}).withMessage('Name must be between 2 and 30 characters'),
        // passowrd
        check('password').exists().withMessage('Missing password'),
        check('password').isLength({min: 8}).withMessage('Password must be at least 8 characters long'),
        check('password').matches(/\d/).withMessage('Password must contain at least one number'),
        check('password').matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter'),
        check('password').matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter'),
        check('password').matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Password must contain at least one special character'),
        // confirm password
        check('confirmPassword').exists().withMessage('Missing confirm password'),
        check('confirmPassword').custom((value, {req}) => {
            if(value !== req.body.password) {
                throw new Error('Passwords do not match');
            }
            return true;
        }
        ),
        // address
        check('adress').exists().withMessage('Missing address'),
        check('address').isLength({min: 5, max: 50}).withMessage('Address must be between 5 and 50 characters'),
        // zip code
        check('zipCode').exists().withMessage('Missing zip code'),
        check('zipCode').isLength({min: 5, max: 5}).withMessage('Zip code must be 5 characters long'),
        // city
        check('city').exists().withMessage('Missing city'),
        check('city').isLength({min: 2, max: 30}).withMessage('City must be between 2 and 30 characters'),
    ]),

}
