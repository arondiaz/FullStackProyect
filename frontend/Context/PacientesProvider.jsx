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

                const pacientesActualizado = pacientes.map(pacienteState => pacienteState._id === data._id ? data : pacienteState )
          
                setPacientes(pacientesActualizado)
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

    const eliminarPaciente = async (id, paciente) => {
        console.log(paciente);
      const confirmar = confirm(`¿Estás seguro de que quieres eliminar el paciente ${paciente.nombre}?`);

      if(confirmar){
        try {

            const token = localStorage.getItem("token")
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            };
            const url = `http://localhost:4000/api/pacientes/${id}`
            const {data} = await axios.delete(url, config);
        
            const pacientesActualizado = pacientes.filter(pacientesState => pacientesState._id !== id);

            setPacientes(pacientesActualizado);
        } catch (error) {
            console.log(error);
        }
      }
    }

    return(
        <PacientesContext.Provider
        value={{
            pacientes,
            guardarPaciente,
            setEdicion,
            paciente,
            eliminarPaciente
        }}>
            {children}
        </PacientesContext.Provider>
    )
};

export {PacientesProvider}

export default PacientesContext;
