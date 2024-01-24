const Formulario = () => {
  return (
    <>
      <p className="text-lg mb-10 text-center">Añade tus pacientes</p>
    
    <form action=""
    className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md">
        <div className="mb-5">
            <label htmlFor="mascota" className="text-gray-700 uppercase font-bold">Nombre Mascota</label>
            <input type="text"
            id="mascota"
            placeholder="nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"
            />
        </div>

        <div className="mb-5">
            <label htmlFor="propietario" className="text-gray-700 uppercase font-bold">Nombre Propietario</label>
            <input type="text"
            id="propietario"
            placeholder="nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"
            />
        </div>

        <div className="mb-5">
            <label htmlFor="email" className="text-gray-700 uppercase font-bold">Email</label>
            <input type="text"
            id="email"
            placeholder="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"
            />
        </div>

        <div className="mb-5">
            <label htmlFor="fecha" className="text-gray-700 uppercase font-bold">Fecha de Alta</label>
            <input type="date"
            id="fecha"
            className="border-2 w-full p-2 mt-2  rounded-md"
            />
        </div>

        <div className="mb-5">
            <label htmlFor="sintomas" className="text-gray-700 uppercase font-bold">Email</label>
            <textarea
            id="sintomas"
            placeholder="describe los sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"
            />
        </div>

        <input type="submit"
        value="Agregar paciente"
        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-xl hover:bg-indigo-700 transition-colors cursor-pointer"  />
    </form>
    
    </>
  );
};

export default Formulario;
