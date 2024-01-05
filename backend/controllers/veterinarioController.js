import Veterinario from "../models/Veterinario.js";

const registrar = async (req, res) => {
  const { nombre, email, contraseña } = req.body;

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
