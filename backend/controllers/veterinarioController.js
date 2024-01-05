const registrar = (req, res) => {
  const { nombre, email, contraseña } = req.body;

  console.log(nombre);
  console.log(email);
  console.log(contraseña);

  res.json({ msg: "registrando usuario" });
};

const perfil = (req, res) => {
  res.json({ url: "api/veterinarios/perfil" });
};

export { registrar, perfil };
