import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {

    const {cerrarSesion} = useAuth()

  return (
    <>
      <header className="py-10 bg-indigo-600">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="font-bold text-2xl text-indigo-200">
            Administrador de Pacientes
          </h1>

          <nav className="flex gap-4">
            <Link
              to="/pacientes"
              className="text-white text-md font-bold uppercase"
            >
              Pacientes
            </Link>
            <Link
              to="/admin/perfil"
              className="text-white text-md font-bold uppercase"
            >
              Perfil
            </Link>

            <button
              type="button"
              className="text-white text-sm uppercase font-bold"
              onClick={cerrarSesion}
            >
              Cerrar Sesión
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
