import { useContext } from "react";
import PacientesContext from "../Context/PacientesProvider";

const usePacientes = () => {
  return useContext(PacientesContext);
};

export default usePacientes;
