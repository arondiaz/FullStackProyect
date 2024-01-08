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

const confirmar = (req, res) => {
  console.log(req.params.token);
  res.json({ url: "confirmar" });
};

export { registrar, perfil, confirmar };
