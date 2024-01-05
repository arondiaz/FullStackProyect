import express from "express";
import { registrar } from "../controllers/veterinarioController.js";

const routes = express.Router();

routes.get("/", registrar)

export default routes;
