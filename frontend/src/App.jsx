import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AuthLayout from "./layout/AuthLayout";
import Login from "./paginas/Login";
import Registrar from "./paginas/Registrar";
import OlvidePassword from "./paginas/OlvidePassword";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";
import NuevoPassword from "./paginas/NuevoPassword";
import { AuthProvider } from "../Context/AuthProvider";
import RutaProtegida from "./layout/RutaProtegida";
import AdministrarPacientes from "./paginas/AdministrarPacientes";
import { PacientesProvider } from "../Context/PacientesProvider";
import EditarPerfil from "./paginas/EditarPerfil";
import CambiarPassword from "./paginas/CambiarPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <PacientesProvider>
          <Routes>
            
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="olvidepassword" element={<OlvidePassword />} />
              <Route path="olvidepassword/:token" element={<NuevoPassword />} />
              <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
            </Route>

            <Route path="/admin" element={<RutaProtegida />}>
              <Route index element={<AdministrarPacientes />} />
              <Route path="perfil" element={<EditarPerfil />} />
              <Route path="cambiarpassword" element={<CambiarPassword />} />
            </Route>

          </Routes>
          </PacientesProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
