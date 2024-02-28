import { Router } from 'express';
import {
    confirmEmail,
    forgotPassword,
    login,
    logout,
    signup,
    resetPassword,
} from '../controllers/AuthController';

declare module 'express-serve-static-core' {
    interface Request {
        locals: Record<string, unknown>;
    }
}

const router = Router();

router.route('/login').get(login);

router.route('/register').post(signup);

router.route('/logout').get(logout);

router.route('/forget-password/:email').get(forgotPassword);

router.route('/confirm-email').post(confirmEmail);

router.route('/reset-password').put(resetPassword);

export default router;
