import express from "express";
import { registrar, perfil, confirmar, login, olvidePassword, comprobarToken, nuevoPassword, actualizarPerfil, actualizarPassword } from "../controllers/veterinarioController.js";
import checkAuth from "../middleware/authMiddleware.js";

const routes = express.Router();

//public
routes.post("/", registrar)
routes.get("/confirmar/:token", confirmar)
routes.post("/login", login)
routes.post("/olvide-password", olvidePassword)
routes.get("/olvide-password/:token", comprobarToken)
routes.post("/olvide-password/:token", nuevoPassword)

//private
routes.get("/perfil", checkAuth, perfil)
routes.put("/perfil/:id", checkAuth, actualizarPerfil)
routes.put("/actualizarpassword", checkAuth, actualizarPassword)

export default routes;
