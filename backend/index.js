import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import veterinarioRoutes from "./routes/veterinarioRoutes.js";
import pacientesRoutes from "./routes/pacienteRoutes.js";

const app = express();

//Habilitando la lectura del body request
app.use(express.json());

dotenv.config();

connectDB();

const port = 4000;

app.use("/api/veterinarios", veterinarioRoutes);
app.use("/api/pacientes", pacientesRoutes);

app.listen(port, () => {
  console.log(`Servidor funcionando en ${port}`);
});
