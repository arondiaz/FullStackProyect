const registrar = (req, res) => {
  res.send("desde api/veterinarios Inicio");
};

const perfil = (req, res) => {
    res.send("desde api/veterinarios/perfil PERFIL");
  };
  

export { registrar, perfil };
