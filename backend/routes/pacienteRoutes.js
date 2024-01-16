import express from "express";
import { agregarPaciente, obtenerPacientes} from "../controllers/pacienteController.js";

const routes = express.Router();

routes.route("/").post(agregarPaciente).get(obtenerPacientes);

export default routes;
