import Veterinario from "../models/Veterinario.js";

const registrar = async (req, res) => {
  const { nombre, email, contraseña } = req.body;

  //Comprobar que el usuario ya está registrado
  const existeUsuario = Veterinario.findOne({ email });
  if (existeUsuario) {
    const error = new Error("El usuario ya está registrado");
    return res.status(400).json({msg: error.message});
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

export { registrar, perfil };
