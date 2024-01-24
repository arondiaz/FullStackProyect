import { useState } from "react";
import Alerta from "./Alerta";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState(Date.now());
  const [sintomas, setSintomas] = useState("");

  const [alerta, setAlerta] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
       setAlerta({
        msg: "Campos vacíos",
        error: true,
      });

      return setTimeout(() => {
        setAlerta({})
      }, 3000);
    }

  
  }

  const { msg } = alerta;

  return (
    <>
      <p className="text-lg mb-10 text-center">Añade tus pacientes</p>

      <form
        onSubmit={handleSubmit}
        action=""
        className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md">
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>
          <input
            type="text"
            id="mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"/>
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="text-gray-700 uppercase font-bold">
            Nombre Propietario
          </label>
          <input
            type="text"
            id="propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            placeholder="nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"/>
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-gray-700 uppercase font-bold">
            Email
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"/>
        </div>

        <div className="mb-5">
          <label htmlFor="fecha" className="text-gray-700 uppercase font-bold">
            Fecha de Alta
          </label>
          <input
            type="date"
            id="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="border-2 w-full p-2 mt-2  rounded-md"/>
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            placeholder="describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"/>
        </div>

        <input
          type="submit"
          value="Agregar paciente"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-xl hover:bg-indigo-700 transition-colors cursor-pointer"/>
      </form>
      {msg && <Alerta alerta={alerta} />}
    </>
  );
};

export default Formulario;
