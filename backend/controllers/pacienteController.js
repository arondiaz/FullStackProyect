const agregarPaciente = (req, res) => {
  res.json({ msg: "agregando paciente" });
};

const obtenerPacientes = (req, res) => {
  res.json({ msg: "obteniendo paciente" });
};

export {
  agregarPaciente,
  obtenerPacientes,
};
