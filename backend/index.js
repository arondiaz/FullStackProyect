import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import veterinarioRoutes from "./routes/veterinarioRoutes.js";

const app = express();

dotenv.config();

connectDB();

const port = 4000;

app.use("/api/veterinarios", veterinarioRoutes);

app.listen(port, () => {
  console.log(`Servidor funcionando en ${port}`);
});
