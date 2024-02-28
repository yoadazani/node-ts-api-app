import { Express } from 'express';

import authRoute from '../AuthRoute';
import { errorHandler } from '../../middlewares/errorHandler';

export const declareRoutes = (app: Express) => {
    app.use('/auth', authRoute);

    app.use('*', errorHandler);
};
