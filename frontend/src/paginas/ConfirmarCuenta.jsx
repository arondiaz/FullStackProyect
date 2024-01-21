import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Alerta from "../components/Alerta";

const ConfirmarCuenta = () => {
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [alerta, setAlerta] = useState();

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `${
          import.meta.env.VITE_BACKEND_URL}/api/veterinarios/confirmar/${id}`;
        const { data } = await axios.get(url);
        setCuentaConfirmada(true);
        setAlerta({
          msg: data.msg,
          error: false,
        });
      } catch (error) {
        setAlerta({ msg: error.response.data.msg, error: true });
      }
      setCargando(false);
    };

    return () => confirmarCuenta();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Confirma tu cuenta
        </h1>
      </div>

      <div className="mt-20 md:mt-5">
        {!cargando && <Alerta alerta={alerta} />}

        {cuentaConfirmada && (
          <Link to="/" className="text-lg block text-center my-5 text-gray-500">
            Iniciar Sesión{" "}
          </Link>
        )}
      </div>
    </>
  );
};

export default ConfirmarCuenta;
