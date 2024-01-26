import { createContext, useState, useEffect } from "react";
import axios from "axios";

const PacientesContext = createContext();

const PacientesProvider = ({children}) => {

    const [pacientes, setPacientes] = useState([])

    const [paciente, setPaciente] = useState({})

    useEffect(() => {

        const obtenerPacientes = async () => {
            try {
                const token = localStorage.getItem("token")
                if(!token) return
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const url = "http://localhost:4000/api/pacientes/"

                const {data} = await axios.get(url, config)
                

                setPacientes(data);
            } catch (error) {
                console.log(error);
            }
        }

        return () => obtenerPacientes()
    },[])

    const guardarPaciente = async (paciente)=> {
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        
        if(paciente.id){
            try {
                const url = `http://localhost:4000/api/pacientes/${paciente.id}`
                const {data} = await axios.put(url, paciente, config)
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }else{
            
        try {
      
            const url = "http://localhost:4000/api/pacientes/"
            const {data} = await axios.post(url, paciente, config)
            const {createdAt, updateAt, __v, ...pacienteAlmacenado} = data

            setPacientes([pacienteAlmacenado, paciente])
        } catch (error) {
            console.log(error);
        }
        }
    }

    const setEdicion = (paciente) => {
        setPaciente(paciente)
    }

    return(
        <PacientesContext.Provider
        value={{
            pacientes,
            guardarPaciente,
            setEdicion,
            paciente
        }}>
            {children}
        </PacientesContext.Provider>
    )
};

export {PacientesProvider}

export default PacientesContext;
