import express from "express";
import { publicRoutes } from "./api-routes/public/index.js";

const router = express.Router();

//Registering the routes with the router (Public Routes)
publicRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
