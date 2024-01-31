import AdminNav from "../components/AdminNav";
import { useState } from "react";
import Alerta from "../components/Alerta";
import useAuth from "../../hooks/useAuth";

const CambiarPassword = () => {
  const { guardarPassword } = useAuth();
  const [alerta, setAlerta] = useState({});
  const [password, setPassword] = useState({
    oldpass: "",
    newpass: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(password).some((campo) => campo === "")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    if (password.newpass.length < 6) {
      setAlerta({
        msg: "El password debe tener 6 carácteres",
        error: true,
      });
      return;
    }

    const respuesta = await guardarPassword(password);

    setAlerta(respuesta);
  };

  const { msg } = alerta;

  return (
    <>
      <AdminNav />

      <h2 className="font-black text-3xl text-center mt-10">
        Cambiar tu contraseña
      </h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Modifica tu{" "}
        <span className="text-indigo-600 font-bold">Contraseña</span>
      </p>

      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
          {msg && <Alerta alerta={alerta} />}
          <form action="" onSubmit={handleSubmit}>
            <div className="my-3">
              <label className="uppercase font-bold text-gray-600" htmlFor="">
                Password Actual
              </label>
              <input
                type="text"
                className="border bg-gray-50 w-full rounded-lg"
                name="oldpass"
                onChange={(e) =>
                  setPassword({
                    ...password,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>

            <div className="my-3">
              <label className="uppercase font-bold text-gray-600" htmlFor="">
                Nuevo Password
              </label>
              <input
                type="text"
                className="border bg-gray-50 w-full rounded-lg"
                name="newpass"
                onChange={(e) =>
                  setPassword({
                    ...password,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>

            <input
              type="submit"
              value="Cambiar contraseña"
              className="bg-indigo-700 px-10 py-3 font-bold w-full text-white rounded-xl cursor-pointer hover:bg-indigo-800 transition-all"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default CambiarPassword;
