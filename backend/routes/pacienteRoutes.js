import express from "express";
import { agregarPaciente, obtenerPacientes} from "../controllers/pacienteController.js";
import checkAuth from "../middleware/authMiddleware.js";

const routes = express.Router();

routes.route("/").post(checkAuth, agregarPaciente).get(checkAuth, obtenerPacientes);

export default routes;
