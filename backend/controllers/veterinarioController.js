import Veterinario from "../models/Veterinario.js";
import generarJWT from "../helpers/generarJWT.js";

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
  const { veterinario } = req;

  res.json({ veterinario });
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

const login = async (req, res) => {
  const { email, password } = req.body;

  //Comprobar si el mail existe en la base da datos
  const usuario = await Veterinario.findOne({ email });
  if (!usuario) {
    const error = new Error("El mail no existe");
    return res.status(401).json({ msg: error.message });
  }

  //Comprobar si el usuario fue confirmado
  if (!usuario.confirmado) {
    const error = new Error("El usuario no fue confirmado");
    return res.status(403).json({ msg: error.message });
  }

  //Validar password ingresada con la de la base de datos
  if (await usuario.validatePassword(password)) {
    res.json({ token: generarJWT(usuario.id) });
  } else {
    const error = new Error("El password es incorrecto");
    return res.status(401).json({ msg: error.message });
  }
};

const olvidePassword = (req, res) => {
  res.json("olvide pass")
}

const comprobarToken = (req, res) => {
  res.json("olvide pass")
}

const nuevoPassword = (req, res) => {
  res.json("olvide pass")
}
export { registrar, perfil, confirmar, login, olvidePassword, comprobarToken, nuevoPassword };
