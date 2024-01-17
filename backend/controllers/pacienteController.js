import Paciente from "../models/Pacientes.js";

const agregarPaciente = async (req, res) => {
  const paciente = new Paciente(req.body);

  paciente.veterinario = req.veterinario._id;
  try {
    const pacienteAlmacenado = await paciente.save();
    res.json(pacienteAlmacenado);
  } catch (error) {
    console.log(error);
  }
};

const obtenerPacientes = async (req, res) => {
  const pacientes = await Paciente.find().where("veterinario").equals(req.veterinario);

  res.json(pacientes);
};

const obtenerPaciente = async (req, res) => {
  const {id} = req.params;

  const paciente = await Paciente.findById(id)

  console.log(req.veterinario._id);
  console.log(paciente.veterinario._id);

  if(req.veterinario._id.toString() !== paciente.veterinario._id.toString()){
    return res.status(401).json("Acción no válida");
  };

  res.json(paciente);
}


const actualizarPaciente = async (req, res) => {
  const {id} = req.params;

  const paciente = await Paciente.findById(id);

  if(req.veterinario._id.toString() !== paciente.veterinario._id.toString()){
    return res.status(401).json("Acción no válida");
  };

  paciente.nombre = req.body.nombre || paciente.nombre;
  paciente.email = req.body.email || paciente.email;
  paciente.sintomas = req.body.sintomas || paciente.sintomas;
  paciente.propietario = req.body.propietario || paciente.propietario;
  paciente.fecha = req.body.fecha || paciente.fecha;

  try {
    const pacienteActualizado = await paciente.save();
    res.json(pacienteActualizado);
  } catch (error) {
    console.log(error);
    res.status(404).json({msg: "Error al actualizar"})
  }
  
}

const eliminarPaciente = async (req, res) => {

}

export { agregarPaciente, obtenerPacientes, obtenerPaciente, actualizarPaciente, eliminarPaciente };
