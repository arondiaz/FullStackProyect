import express from "express";
import { registrar, perfil } from "../controllers/veterinarioController.js";

const routes = express.Router();

routes.get("/", registrar)

routes.get("/perfil", perfil)

export default routes;
