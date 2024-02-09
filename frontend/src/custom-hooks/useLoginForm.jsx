import { useState } from "react";

const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const validation = () => {
    if ([email, password].includes("")) {
      setMostrarAlerta(true);
      setAlerta({ msg: "Campos obligatorios", error: true });
      return false;
    }

    return true
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    alerta,
    setAlerta,
    mostrarAlerta,
    setMostrarAlerta,
    validation,
  };
};

export default useLoginForm;
