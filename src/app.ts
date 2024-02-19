import express, { Express } from 'express';
import dotenv from 'dotenv';
import { declareMiddlewares } from './middlewares';
import { declareRoutes } from './routes/declare_routes';

dotenv.config();

const Port = +process.env.PORT! || 3000;

const app: Express = express();

declareMiddlewares(app);

declareRoutes(app);

app.listen(Port, () => {
    console.log(`Server is running on http://localhost:${Port}`);
});

export default app;
