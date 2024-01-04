import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();

connectDB();

const port = 4000;

app.get("/", (req, res) => {
  res.send("Hola");
});

app.listen(port, () => {
  console.log(`Servidor funcionando en ${port}`);
});
