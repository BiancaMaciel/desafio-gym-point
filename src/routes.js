import Router from 'express';

import SessionController from './app/controllers/SessionController';

import StudentController from './app/controllers/StudentController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.post('/create-student', authMiddleware, StudentController.store);
routes.put('/update-student', authMiddleware, StudentController.update);
export default routes;
