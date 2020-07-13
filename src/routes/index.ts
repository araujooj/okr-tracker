import { Router } from 'express';
import objectiveRouter from './objectives.routes';
import userRouter from './users.routes';
import sessionRouter from './sessions.routes';

const routes = Router();

routes.use('/objectives', objectiveRouter);
routes.use('/users', userRouter);
routes.use('/sessions', sessionRouter);

export default routes;
