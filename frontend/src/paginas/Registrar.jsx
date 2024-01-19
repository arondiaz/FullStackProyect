import { Link } from "react-router-dom";

const Registrar = () => {
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">Crea tu cuenta</h1>
      </div>

      <div className="mt-20 md:mt-5">
        <form>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Ingresa tu nombre"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
          </div>

          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Email
            </label>
            <input
              type="text"
              placeholder="Ingresa tu email"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
          </div>

          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Password
            </label>
            <input
              type="password"
              placeholder="Ingresa tu password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
          </div>

          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Comprobar Password
            </label>
            <input
              type="password"
              placeholder="Repite tu password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
          </div>
          <nav className="mt-10 lg:flex lg:justify-between">
            <p className="text-lg block text-center my-5 text-gray-500">
              Olvidaste tu contraseña?{" "}
              <Link to="/olvidepassword">
                <span className="font-bold cursor-pointer hover:text-indigo-800 ">
                  Cambiar
                </span>
              </Link>
            </p>

            <p className="text-lg block text-center my-5 text-gray-500">
              Tienes cuenta?{" "}
              <Link to="/">
                <span className="font-bold cursor-pointer hover:text-indigo-800 ">
                  Inicia Sesión
                </span>
              </Link>
            </p>
          </nav>

          <input
            type="submit"
            value="Regístrate"
            className="bg-indigo-700 py-2 px-6 rounded-xl w-full text-white font-bold mt-5 cursor-pointer hover:bg-indigo-800
            md:w-auto"
          />
        </form>
      </div>
    </>
  );
};

export default Registrar;
