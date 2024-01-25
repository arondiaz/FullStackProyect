import usePacientes from "../../hooks/usePacientes";
import Paciente from "./Paciente";
const ListadoPacientes = () => {
  const { pacientes } = usePacientes();
  console.log(pacientes);

  return (
    <>
      {pacientes.length ? (
        <>
          {" "}
          <p className="text-lg mb-10 text-center mt-5">Listado de pacientes</p>{" "}
          {pacientes.map(paciente => (
          <Paciente
            key={paciente._id}
            paciente={paciente}
          />      
    
          ))}
        </>
      ) : (
        <>
          <h2>No hay pacientes</h2>
        </>
      )}
    </>
  );
};

export default ListadoPacientes;
