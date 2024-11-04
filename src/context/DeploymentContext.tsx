import { createContext, useState } from "react";
import React from "react";
import { DeploymentContextType, DeploymentProviderProps } from "../types/deployment";



const DeploymentContext = createContext<DeploymentContextType | undefined>(undefined);

const DeploymentProvider: React.FC<DeploymentProviderProps> = ({children}) => {

    const [units, setUnits] = useState({
        Golani: 'Idle', Paratroopers: 'Idle',
        Givati: 'Idle',
        gunners: 'Idle',
        tankers: 'Idle',
        navy: 'Idle',

    });

    const setUnitStatus = (unit: string, status: string) => {

        setUnits({ ...units, [unit]: status });

    };
    return (
        <DeploymentContext.Provider value={{ units, setUnitStatus }}>
            {children}
        </DeploymentContext.Provider>
    );
};
export { DeploymentContext, DeploymentProvider };