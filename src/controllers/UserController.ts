import { Request, Response } from 'express';

export const getUsers = (req: Request, res: Response) => {
    res.status(200).send('Get Users!');
};

export const createUser = (req: Request, res: Response) => {
    res.send('Create User!');
};

export const updateUser = (req: Request, res: Response) => {
    res.send('Update User!');
};

export const deleteUser = (req: Request, res: Response) => {
    res.send('Delete User!');
};
