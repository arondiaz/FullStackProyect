import AdminNav from "../components/AdminNav";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import Alerta from "../components/Alerta";

const EditarPerfil = () => {
  const { auth, actualizarPerfil } = useAuth();
  const [perfil, setPerfil] = useState({});
  const [alerta, setAlerta] = useState({});

  useEffect(() => {
    setPerfil(auth);
  }, [auth]);

  function handleSubmit(e) {
    e.preventDefault();

    const { nombre, email } = perfil;

    if ([nombre, email].includes("")) {
      setAlerta({
        msg: "Nombre y email son obligatorios",
        error: true,
      });
      return;
    }

    actualizarPerfil();
  }

  const { msg } = alerta;

  return (
    <>
      <AdminNav />

      <h2 className="font-black text-3xl text-center mt-10">Editar Perfil</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Modifica tu{" "}
        <span className="text-indigo-600 font-bold">Información</span>
      </p>

      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
          {msg && <Alerta alerta={alerta} />}
          <form action="" onSubmit={handleSubmit}>
            <div className="my-3">
              <label className="uppercase font-bold text-gray-600" htmlFor="">
                Nombre
              </label>
              <input
                type="text"
                className="border bg-gray-50 w-full rounded-lg"
                name="nombre"
                value={perfil.nombre || ""}
                onChange={(e) =>
                  setPerfil({
                    ...perfil,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>

            <div className="my-3">
              <label className="uppercase font-bold text-gray-600" htmlFor="">
                Email
              </label>
              <input
                type="text"
                className="border bg-gray-50 w-full rounded-lg"
                name="email"
                value={perfil.email || ""}
                onChange={(e) =>
                  setPerfil({
                    ...perfil,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>

            <input
              type="submit"
              value="Guardar cambios"
              className="bg-indigo-700 px-10 py-3 font-bold w-full text-white rounded-xl cursor-pointer hover:bg-indigo-800 transition-all"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default EditarPerfil;
