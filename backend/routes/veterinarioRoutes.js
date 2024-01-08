import express from "express";
import { registrar, perfil, confirmar } from "../controllers/veterinarioController.js";

const routes = express.Router();

routes.post("/", registrar)

routes.get("/perfil", perfil)

routes.get("/confirmar/:token", confirmar)

export default routes;
