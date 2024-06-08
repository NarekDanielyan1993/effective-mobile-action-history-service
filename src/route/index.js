import express from 'express';
import historyRoutes from './history/index';

const routes = express.Router();

routes.use(historyRoutes);

export default routes;
