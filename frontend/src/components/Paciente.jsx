import usePacientes from "../../hooks/usePacientes";

const Paciente = ({ paciente }) => {
  const { nombre, email, fecha, propietario, _id, sintomas } = paciente;

  const { setEdicion } = usePacientes();

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold uppercase text-indigo-800">
        Nombre:{" "}
        <span className="font-normal normal-case text-black">{nombre}</span>
      </p>
      <p className="font-bold uppercase text-indigo-800">
        Propietario:{" "}
        <span className="font-normal normal-case text-black">
          {propietario}
        </span>
      </p>
      <p className="font-bold uppercase text-indigo-800">
        email:{" "}
        <span className="font-normal normal-case text-black">{email}</span>
      </p>
      <p className="font-bold uppercase text-indigo-800">
        Fecha de alta:{" "}
        <span className="font-normal normal-case text-black">{fecha}</span>
      </p>
      <p className="font-bold uppercase text-indigo-800">
        Sintomas:{" "}
        <span className="font-normal normal-case text-black">{sintomas}</span>
      </p>

      <div className="flex justify-between my-5">
        <button className="bg-indigo-600 text-white uppercase font-bold rounded-md py-2 px-4 hover:bg-indigo-700"
        onClick={()=> setEdicion(paciente)}
        >
          Editar
        </button>

        <button className="bg-red-600 text-white uppercase font-bold rounded-md py-2 px-4 hover:bg-red-700">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
