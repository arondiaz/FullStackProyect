import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Alerta from "../components/Alerta";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      setMostrarAlerta(true);
      return setAlerta({ msg: "Campos obligatorios", error: true });
    }

    try {
      const url = `http://localhost:4000/api/veterinarios/login`;
      const { data } = await axios.post(url, { email, password });

      localStorage.setItem("token", data.token);

      setAuth(data);
      navigate("/admin");
    } catch (error) {
      setMostrarAlerta(true);
      return setAlerta({ msg: error.response.data.msg, error: true });
    }

    setMostrarAlerta(false);
  };

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">Inicia Sesión</h1>
      </div>

      <div className="mt-20 md:mt-5">
        {mostrarAlerta && <Alerta alerta={alerta} />}
        <form onSubmit={handleSubmit}>
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
              No tienes cuenta?{" "}
              <Link to="/registrar">
                <span className="font-bold cursor-pointer hover:text-indigo-800 ">
                  Regístrate
                </span>
              </Link>
            </p>
          </nav>

          <input
            type="submit"
            value="Iniciar sesión"
            className="bg-indigo-700 py-2 px-6 rounded-xl w-full text-white font-bold mt-5 cursor-pointer hover:bg-indigo-800
            md:w-auto"
          />
        </form>
      </div>
    </>
  );
};

export default Login;
