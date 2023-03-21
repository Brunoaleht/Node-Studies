import { Router } from "express";
import TaskController from "../controllers/TaskController.js";


export const tasksRoutes = Router();

tasksRoutes.get("/add", TaskController.createTask);
tasksRoutes.get("/", TaskController.showTasks);




