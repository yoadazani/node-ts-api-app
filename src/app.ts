import express, { Express } from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';
import { declareMiddlewares } from './middlewares';
import { declareRoutes } from './routes/declare_routes';
import nodeConfig from '../config/nodeConfig';

dotenv.config();

const { port } = nodeConfig;

const app: Express = express();

declareMiddlewares(app);

declareRoutes(app);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

export default app;
