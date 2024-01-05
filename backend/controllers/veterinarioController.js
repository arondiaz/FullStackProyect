const registrar = (req, res) => {
  res.json({msg: "registrando usuario"});
};

const perfil = (req, res) => {
    res.json({url: "api/veterinarios/perfil"});
  };
  

export { registrar, perfil };
