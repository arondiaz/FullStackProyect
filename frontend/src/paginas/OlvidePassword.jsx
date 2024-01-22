import { Link } from "react-router-dom";
import { useState} from "react";
import axios from "axios"
import Alerta from "../components/Alerta";

const OlvidePassword = () => {
  const [email, setEmail] = useState("");
  const [alerta, setAlerta] = useState({})
  

  async function handleSubmit (e) {
    e.preventDefault();

    if([email].includes("")){
      return setAlerta({msg: "Campo obligatorio", error:true});
    }

    try {
      const url = `http://localhost:4000/api/veterinarios/olvide-password`
      const {data} = await axios.post(url, {email})
     setAlerta({msg: data.msg})
    } catch (error) {
     setAlerta({msg: error.response.data.msg, error: true})
    }
  }

   const {msg} = alerta

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Recuperar Contraseña
        </h1>
      </div>

      <div className="mt-20 md:mt-5">
        {msg && <Alerta alerta={alerta}/>}
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

          <nav className="mt-10 lg:flex lg:justify-between">
            <p className="text-lg block text-center my-5 text-gray-500">
              No tienes cuenta?{" "}
              <Link to="/registrar">
                <span className="font-bold cursor-pointer hover:text-indigo-800 ">
                  Regístrate
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
            value="Siguiente"
            className="bg-indigo-700 py-2 px-6 rounded-xl w-full text-white font-bold mt-5 cursor-pointer hover:bg-indigo-800
            md:w-auto"
          />
        </form>
      </div>
    </>
  );
};

export default OlvidePassword;
