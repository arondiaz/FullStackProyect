import { createContext, useState, useEffect } from "react";
import axios from "axios";

const PacientesContext = createContext();

const PacientesProvider = ({children}) => {

    return(
        <PacientesContext.Provider
        value={{
            
        }}>
            {children}
        </PacientesContext.Provider>
    )
};

export {PacientesProvider}

export default PacientesContext;
