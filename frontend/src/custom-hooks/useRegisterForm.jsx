import { useState } from "react";

const useRegisterForm = () => {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const validateForm = () => {
    if ([email, nombre, password].includes("")) {
      setAlerta({ msg: "Campos vacíos", error: true });
      return false;
    }

    if (password !== repetirPassword) {
      setAlerta({ msg: "Las contraseñas no coinciden", error: true });
      return false;
    }

    if (password.length <= 5) {
      setAlerta({
        msg: "La contraseña debe tener más de 5 caracteres",
        error: true,
      });

      return false;
    }

    console.log("paso las validaciones");

    setAlerta({});
    return true;
  };
  return {
    nombre,
    setNombre,
    email,
    setEmail,
    password,
    setPassword,
    repetirPassword,
    setRepetirPassword,
    alerta,
    setAlerta,
    validateForm,
  };
};

export default useRegisterForm;
