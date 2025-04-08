import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import {
  createTasks,
  deleteTask,
  getAllTasks,
  updateTask,
} from "../controllers/task.controller.js";

const taskRoutes = Router();

taskRoutes.get("/", isAuthenticated, getAllTasks);

taskRoutes.post("/add", isAuthenticated, createTasks);
taskRoutes.delete("/delete/:id", isAuthenticated, deleteTask);
taskRoutes.put("/update/:id", isAuthenticated, updateTask);

export default taskRoutes;
