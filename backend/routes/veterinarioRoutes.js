import express from "express";
import { registrar, perfil, confirmar, login } from "../controllers/veterinarioController.js";
import checkAuth from "../middleware/authMiddleware.js";

const routes = express.Router();

routes.post("/", registrar)
routes.get("/confirmar/:token", confirmar)
routes.post("/login", login)

routes.get("/perfil", checkAuth, perfil)

export default routes;
