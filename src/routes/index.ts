import { Router } from 'express';

import objectiveRouter from './objective.routes';

const routes = Router();

routes.use('/transactions', objectiveRouter);

export default routes;
