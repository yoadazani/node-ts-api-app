import express, { Express } from 'express';
import { declareMiddlewares } from './middlewares';
import { declareRoutes } from './routes/declare_routes';

const app: Express = express();

declareMiddlewares(app);

const Port = +process.env.PORT! || 3000;

declareRoutes(app);

app.listen(Port, () => {
    console.log(`Server is running on http://localhost:${Port}`);
});

export default app;
