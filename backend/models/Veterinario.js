import mongoose from "mongoose";
import generarId from "../helpers/generarId.js";
import bcrypt from "bcrypt";

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

veterinarioSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();

  // const salt = await bcrypt.genSalt(10)
  // this.password = await bcrypt.hash(this.password, salt)
});

const Veterinario = mongoose.model("Veterinario", veterinarioSchema);
export default Veterinario;
