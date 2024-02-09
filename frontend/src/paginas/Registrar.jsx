import { Link } from "react-router-dom";

import Alerta from "../components/Alerta";
import axios from "axios";
import useRegisterForm from "../custom-hooks/useRegisterForm";

const Registrar = () => {
  const {validateForm,nombre,setNombre,email,setEmail,password,setPassword,repetirPassword,setRepetirPassword,alerta,setALerta} = useRegisterForm();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/api/veterinarios/`;
      await axios.post(url, { nombre, email, password });

      setALerta({
        msg: "Cuenta creada correctamete, abre tu email",
        error: false,
      });
    } catch (error) {
      setALerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">Crea tu cuenta</h1>
      </div>

      <div className="mt-20 md:mt-5">
        {msg && <Alerta alerta={alerta} />}

        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Nombre
            </label>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              value={repetirPassword}
              onChange={(e) => setRepetirPassword(e.target.value)}
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
