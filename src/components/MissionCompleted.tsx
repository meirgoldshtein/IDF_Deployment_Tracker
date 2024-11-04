import React, { useContext } from 'react'
import { DeploymentContext } from '../context/DeploymentContext';

export default function MissionCompleted() {
    const deploymentContext = useContext(DeploymentContext);

    if (!deploymentContext) {
        throw new Error("MissionCompleted must be used within a DeploymentProvider");
    }

    const { units } = deploymentContext;
    const allComplete = Object.values(units).every((value) => value === 'Completed');
  return (
    <div>{allComplete && <h2>כל היחידות נפרסו בהצלחה</h2>}</div>
  )
}
