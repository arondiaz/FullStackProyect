import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import veterinarioRoutes from "./routes/veterinarioRoutes.js";
import pacientesRoutes from "./routes/pacienteRoutes.js";
import cors from "cors";

const app = express();

//Habilitando la lectura del body request
app.use(express.json());

dotenv.config();

connectDB();

const dominiosPermitidos = ["http://localhost:4000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (dominiosPermitidos.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  },
};

app.use(cors({ origin: '*' }));

const port = 4000;

app.use("/api/veterinarios", veterinarioRoutes);
app.use("/api/pacientes", pacientesRoutes);

app.listen(port, () => {
  console.log(`Servidor funcionando en ${port}`);
});
