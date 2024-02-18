import { Express } from 'express';

import userRoute from '../UserRoute';

export const declareRoutes = (app: Express) => {
    app.use('/users', userRoute);
};
