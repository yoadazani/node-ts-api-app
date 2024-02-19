import { Router } from 'express';
import { createUser, getUsers } from '../controllers/user_controller/Users';
import {
    getUser,
    updateUser,
    deleteUser,
} from '../controllers/user_controller/User';
import { cacheMiddleware } from '../middlewares/cache';

const router = Router();

router.route('/').get(cacheMiddleware, getUsers).post(createUser);

router
    .route('/:id')
    .get(cacheMiddleware, getUser)
    .put(updateUser)
    .delete(deleteUser);

export default router;
