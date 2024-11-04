import React, { useContext, useState } from 'react'
import { DeploymentContext } from '../context/DeploymentContext';
import Status from '../types/status';

type ChangeStatusProps = {
    unitName: string
}
export default function ChangeStatus({ unitName }: ChangeStatusProps) {
    const deploymentContext = useContext(DeploymentContext);
    const [index, setIndex] = useState(1);

    if (!deploymentContext) {
        throw new Error("ChangeStatus must be used within a DeploymentProvider");
    }

    const updateStatus = () => {

        index < 2  ? setIndex(index + 1) : setIndex(0);

        deploymentContext.setUnitStatus(unitName, Status[index]);
    };
    const { setUnitStatus } = deploymentContext;
  return (
    <button onClick={() => updateStatus()}>פרוס את יחידת - {unitName}</button>
  )
}
