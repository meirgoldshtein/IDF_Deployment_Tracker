import React from 'react'
import UnitsDetails from '../components/UnitsDetails'
import { useParams } from 'react-router-dom';

export default function AboutUnit() {
    const { unit } = useParams();
  return (
    <div>
        <h2> שם היחידה: {unit}</h2>
        <UnitsDetails/>
    </div>


  )
}
