import { Router } from 'express';
import DroneController from './app/controllers/DroneController';

const routes = new Router();

routes.get('/api/drone/handshake');

export default routes;
