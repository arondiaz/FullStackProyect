import mongoose from "mongoose";
import generarId from "../helpers/generarId.js";

const veterinarioSchema = mongoose.Schema({
  nombre: {
    type: String,
    requeried: true,
    trim: true,
  },
  apellido: {
    type: String,
    requeried: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    requeried: true,
    trim: true,
  },
  password: {
    type: String,
    requerid: true,
  },
  telefono: {
    type: String,
    requerid: false,
    trim: true,
  },
  web: {
    type: String,
    requerid: false,
  },
  token: {
    type: String,
    default: generarId(),
  },
  confirmado: {
    type: Boolean,
    default: false,
  },
});

const Veterinario = mongoose.model("Veterinario", veterinarioSchema);
export default Veterinario;
