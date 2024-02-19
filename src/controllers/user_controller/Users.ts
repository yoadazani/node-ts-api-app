import { Request, Response } from 'express';

const getUsers = (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Get users!',
    });
};

const createUser = (req: Request, res: Response) => {
    res.send('Create user!');
};

export { getUsers, createUser };
