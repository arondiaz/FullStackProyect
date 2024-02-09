import { useState } from "react";

const useRegisterForm = () => {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [alerta, setALerta] = useState({});

  const validateForm = () => {
    if ([email, nombre, password].includes("")) {
      setALerta({ msg: "Campos vacíos", error: true });
      return false;
    }

    if (password !== repetirPassword) {
      setALerta({ msg: "Las contraseñas no coinciden", error: true });
      return false;
    }

    if (password.length <= 5) {
      setALerta({
        msg: "La contraseña debe tener más de 5 caracteres",
        error: true,
      });

      return false;
    }

    console.log("paso las validaciones");

    setALerta({});
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
    setALerta,
    validateForm,
  };
};

export default useRegisterForm;
