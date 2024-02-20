import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const useLoginFetch = async () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  
  const loginUser = async (email, password, setMostrarAlerta, setAlerta) => {
    try {
      const url = `http://localhost:4000/api/veterinarios/login`;
      const { data } = await axios.post(url, { email, password });

      localStorage.setItem("token", data.token);

      await setAuth(data);
      navigate("/admin");
    } catch (error) {
      setMostrarAlerta(true);
      return setAlerta({ msg: error.response.data.msg, error: true });
    }

    setMostrarAlerta(false);
  };

  return {
    loginUser,
  };
};

export default useLoginFetch;
