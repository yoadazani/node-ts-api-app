import { Router } from 'express';
import {
    createUser,
    deleteUser,
    getUsers,
    updateUser,
} from '../controllers/UserController';

const router = Router();

router
    .route('/')
    .get(getUsers)
    .post(createUser)
    .put(updateUser)
    .delete(deleteUser);

export default router;
