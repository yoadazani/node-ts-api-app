import { Request, Response } from 'express';

const getUser = (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Get user!',
    });
};

const updateUser = (req: Request, res: Response) => {
    res.send('Update user!');
};

const deleteUser = (req: Request, res: Response) => {
    res.send('Delete user!');
};

export { getUser, updateUser, deleteUser };
