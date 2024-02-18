import helmet from 'helmet';
import compression from 'compression';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import express, { Express } from 'express';
import path from 'path';

export const declareMiddlewares = (app: Express) => {
    dotenv.config();

    app.use(helmet());
    app.use(compression());
    app.use(cors());
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static(path.join(__dirname, 'public')));

    return app;
};
