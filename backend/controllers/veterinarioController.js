import { json } from "express";
import Veterinario from "../models/Veterinario.js";

const registrar = async (req, res) => {
  const { nombre, email, contraseña } = req.body;

  //Comprobar que el usuario ya está registrado
  const existeUsuario = await Veterinario.findOne({ email });
  if (existeUsuario) {
    const error = new Error("El usuario ya está registrado");
    return res.status(400).json({ msg: error.message });
  }

  try {
    const veterinario = new Veterinario(req.body);
    const nuevoVeterinario = await veterinario.save();
    res.json(nuevoVeterinario);
  } catch (error) {
    console.log(error);
  }
};

const perfil = (req, res) => {
  res.json({ url: "api/veterinarios/perfil" });
};

const confirmar = async (req, res) => {
  const { token } = req.params;

  const usuarioConfirmar = await Veterinario.findOne({ token });
  if (!usuarioConfirmar) {
    const error = new Error("Usuario no confirmado");
    return res.status(400).json({ msg: error.message });
  }
  try {
    usuarioConfirmar.token = null;
    usuarioConfirmar.confirmado = true;
    await usuarioConfirmar.save();
    res.json({ msg: "Usuario confirmado" });
  } catch (error) {
    console.log(error);
  }
};

export { registrar, perfil, confirmar };
