import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import express, { Express } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import { loggerMiddleware } from './loggerMiddleWare';

export const declareMiddlewares = (app: Express) => {
    // Middlewares
    app.use(cookieParser());
    app.use(helmet());
    app.use(compression());
    app.use(cors());
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(loggerMiddleware);

    return app;
};
