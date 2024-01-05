import mongoose from "mongoose";

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
  },
  confirmado: {
    type: Boolean,
    default: false,
  },
});

const Veterinario = mongoose.model("Veterinario", veterinarioSchema);
export default Veterinario;
