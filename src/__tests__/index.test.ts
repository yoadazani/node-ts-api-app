import { Request, Response } from 'express';
import { AuthError } from '../errors/AuthError';
import { me } from '../controllers/AuthController';
import * as authServices from '../modules/AuthModel';

it('should throw AuthError when getUserById function throws error', async () => {
    const req = {
        locals: {
            userId: '123',
        },
    } as unknown as Request;
    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
    };
    const getUserByIdMock = jest
        .spyOn(authServices, 'getUserById')
        .mockRejectedValue(new AuthError('Database error'));

    await expect(
        me(req as unknown as Request, res as unknown as Response),
    ).rejects.toThrow(AuthError);
    expect(getUserByIdMock).toHaveBeenCalledWith('123');
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
});
