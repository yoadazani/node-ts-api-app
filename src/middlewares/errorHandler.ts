import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../errors/CustomError';

const errorHandler = (
    err: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
) => {
    if (err instanceof CustomError) {
        return res
            .status(err.statusCode)
            .json({ message: err.serializeErrors() });
    }

    res.status(500).json({
        message: err.message,
    });

    return next();
};

export { errorHandler };
