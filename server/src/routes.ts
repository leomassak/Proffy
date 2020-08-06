import { response } from "express"
import express from 'express';

import db from "./database/connection";
import { convertHoutToMinutes } from "./utils/defaultFunctions";
import ClassesController from './controllers/ClassesController';
import ConnectionController from "./controllers/ConnectionsController";

const routes = express.Router();
const ClassesControllers = new ClassesController();
const ConnectionControllers = new ConnectionController();

routes.post('/classes', ClassesControllers.create);
routes.get('/classes', ClassesControllers.index);

routes.post('/connections', ConnectionControllers.create);
routes.get('/connections', ConnectionControllers.index);

export default routes;