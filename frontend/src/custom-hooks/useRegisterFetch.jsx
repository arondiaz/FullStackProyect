import axios from "axios";

const useRegisterFetch = () => {

  const registerFetch = async (nombre, email, password, setAlerta) => {
    
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/api/veterinarios/`;
      await axios.post(url, { nombre, email, password });

      setAlerta({
        msg: "Cuenta creada correctamete, abre tu email",
        error: false,
      });
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  return {
    registerFetch,
  };
};

export default useRegisterFetch;
