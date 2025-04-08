import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import {
  getCompletedTasks,
  getDueTasks,
  getOngoingTasks,
  getPendingTasks,
} from "../controllers/dashboard.controller.js";

const dashboardRoutes = Router();

dashboardRoutes.get("/pending", isAuthenticated, getPendingTasks);
dashboardRoutes.get("/completed", isAuthenticated, getCompletedTasks);
dashboardRoutes.get("/ongoing", isAuthenticated, getOngoingTasks);
dashboardRoutes.get("/due", isAuthenticated, getDueTasks);

export default dashboardRoutes;
