import React, { useContext } from 'react'
import { DeploymentContext } from '../context/DeploymentContext';
import { Link } from 'react-router-dom';
interface UnitStatusProps {
    unitName: string
}

export default function UnitStatus({ unitName }: UnitStatusProps) {
    const deploymentContext = useContext(DeploymentContext);
    if (!deploymentContext) {
        throw new Error("UnitStatus must be used within a DeploymentProvider");
        }
        const { units } = deploymentContext;
  return (
    <div className= {'unit ' + units[unitName]}>
      <Link to={`/units/${unitName}`}>{unitName}</Link>
        <p>status :  {units[unitName]}</p>
    </div>
  )
}
