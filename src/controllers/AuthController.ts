import { Request, Response } from 'express';
import { ValidationResult } from 'joi';

import { UserType } from '../types/UserType';
import { AuthError } from '../errors/AuthError';
import * as authServices from '../services/auth';
import { getUserByEmail } from '../modules/AuthModel';
import { loginSchema } from '../schemas/auth/loginSchema';
import { signupSchema } from '../schemas/auth/signupSchema';
import { forgetPasswordSchema } from '../schemas/auth/forgetPasswordSchema';
import { confirmEmailSchema } from '../schemas/auth/confirmEmailSchema';
import { resetPasswordSchema } from '../schemas/auth/resetPasswordSchema';

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const validated: ValidationResult = loginSchema.validate(req.body);

    if (validated.error)
        throw new AuthError(
            validated.error.message || 'Invalid email or password',
        );

    const token = await authServices.login(email, password);

    const cookiesOptions = {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
        sameSite: 'strict' as const,
        secure: false,
        maxAge: 1000 * 60 * 60 * 24,
    };

    res.cookie('accessToken', token, cookiesOptions);

    res.status(200).json({
        message: 'Login user!',
        token,
    });
};

const signup = async (req: Request, res: Response) => {
    const validated: ValidationResult = signupSchema.validate(req.body);

    if (validated.error) throw new AuthError(validated.error.message);

    const newUserCreated: UserType = await authServices.register(req.body);

    res.status(201).json({
        message: 'User created!',
        user: newUserCreated,
    });
};

const logout = async (_req: Request, res: Response) => {
    res.clearCookie('accessToken');

    res.status(200).json({
        message: 'Logout user!',
    });
};

const forgotPassword = async (req: Request, res: Response) => {
    const { email } = req.params;

    const validated: ValidationResult = forgetPasswordSchema.validate(req.body);

    if (validated.error) throw new AuthError(validated.error.message);

    // send email to user with OTP for confirm email
    await authServices.sendEmailWithOTP(email);

    res.status(200).json({
        message:
            'We have sent you an email with an OTP to confirm your email! Please check your email.',
    });
};

const confirmEmail = async (req: Request, res: Response) => {
    const { OTP, email } = req.body;

    const validated: ValidationResult = confirmEmailSchema.validate(req.body);

    if (validated.error) throw new AuthError(validated.error.message);

    const user: UserType | null = await getUserByEmail(email);

    const OTPValid =
        user &&
        authServices.verifyResetPasswordOTP(
            user.resetPasswordOTP!,
            user.resetPasswordExpiration!,
            OTP,
        );

    if (!OTPValid) throw new AuthError('OTP is not valid!');

    res.status(200).json({
        message: 'Your email is confirmed!',
        user,
    });
};

const resetPassword = async (req: Request, res: Response) => {
    const { email, newPassword, userOTP } = req.body;

    const validated: ValidationResult = resetPasswordSchema.validate(req.body);

    if (validated.error) throw new AuthError(validated.error.message);

    const user: UserType | null = await getUserByEmail(email);

    if (
        !user ||
        !authServices.verifyResetPasswordOTP(
            user.resetPasswordOTP!,
            user.resetPasswordExpiration!,
            userOTP,
        )
    ) {
        throw new AuthError('There is an error occurred! Please try again.');
    }

    await authServices.resetPassword(user.id, newPassword);

    await authServices.removeResetPasswordOTP(user.id);

    res.status(200).json('Password changed successfully!');
};

export { login, signup, logout, forgotPassword, resetPassword, confirmEmail };
