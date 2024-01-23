import { Outlet } from "react-router-dom";

const RutaProtegida = () => {
  return (
    <>
      <h1>Esta es un ruta protegida</h1>

      <Outlet />
    </>
  );
};

export default RutaProtegida;
