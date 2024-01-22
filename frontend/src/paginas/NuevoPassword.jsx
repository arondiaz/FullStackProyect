import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Alerta from "../components/Alerta";

const NuevoPassword = () => {
  const [password, setPassword] = useState();
  const [alerta, setAlerta] = useState({});
  const [valido, SetValido] = useState(true);
  const [loginButton, setLoginButtons] = useState(false);
  const params = useParams();

  const { token } = params;

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        const url = `http://localhost:4000/api/veterinarios/olvide-password/${token}`;
        const { data } = await axios(url, password);
        console.log(data);
        setAlerta({ msg: "Coloca tu nuevo password" });
      } catch (error) {
        SetValido(false);
        setAlerta({ msg: "Enlace no válido", error: true });
      }
    };
    return () => comprobarToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length <= 5) {
      return setAlerta({ msg: "El password debe ser mayor a 5", error: true });
    }
    try {
      const url = `http://localhost:4000/api/veterinarios/olvide-password/${token}`;
      const { data } = await axios.post(url, { password });
      console.log(data);
      setAlerta({ msg: data.msg });
      setLoginButtons(true);
    } catch (error) {
      SetValido(false);
      return setAlerta({ msg: error.response.data.msg, error: true });
    }
  };

  const { msg } = alerta;

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Cambia tu contraseña
        </h1>
      </div>

      <div className="mt-20 md:mt-5">
        {msg && <Alerta alerta={alerta} />}
        {valido && (
          <form onSubmit={handleSubmit}>
            <div className="my-5">
              <label className="uppercase text-gray-600 block text-xl font-bold">
                Nueva contraseña
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Ingresa tu nueva contraseña"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              />
            </div>

            {loginButton && (
              <nav className="mt-10 lg:flex lg:justify-between">
                <p className="text-lg block text-center my-5 text-gray-500">
                  Tienes cuenta?{" "}
                  <Link to="/">
                    <span className="font-bold cursor-pointer hover:text-indigo-800 ">
                      Inicia Sesión
                    </span>
                  </Link>
                </p>
              </nav>
            )}

            <input
              type="submit"
              value="Restablecer"
              className="bg-indigo-700 py-2 px-6 rounded-xl w-full text-white font-bold mt-5 cursor-pointer hover:bg-indigo-800
              md:w-auto"
            />
          </form>
        )}
      </div>
    </>
  );
};

export default NuevoPassword;
