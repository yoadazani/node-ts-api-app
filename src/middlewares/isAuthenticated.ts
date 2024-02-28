import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UserType } from '../types/UserType';

export const isAuthenticated = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { accessToken } = req.cookies;

        const { id } = jwt.verify(
            accessToken,
            process.env.JWT_SECRET!,
        ) as Partial<UserType>;

        req.locals = { userId: id };

        next();
    } catch (error) {
        res.clearCookie('accessToken');

        throw new Error('User not authenticated!');
    }
};
