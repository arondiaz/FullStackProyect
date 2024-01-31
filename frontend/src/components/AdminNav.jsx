import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <nav className="flex gap-8 text-xl mt-4">
      <Link to="/admin/perfil" className="ml-8 font-bold uppercase text-gray-500">
        Perfil
      </Link>

      <Link
        to="/admin/cambiarpassword"
        className="font-bold uppercase text-gray-500"
      >
        Cambiar Password
      </Link>
    </nav>
  );
};

export default AdminNav;
