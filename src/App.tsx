import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { DeploymentProvider } from './context/DeploymentContext';
import MissionCompleted from './components/MissionCompleted';
import UnitList from './components/UnitList';
import Home from './pages/Home';
import UnitsPage from './pages/UnitsPage';
import AboutUnit from './pages/AboutUnit';
import NavBar from './components/NavBar';



const App: React.FC = () => {
  return (
    <DeploymentProvider>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <Router>
          <NavBar />
          <h1>מעקב פריסות יחידות צהל</h1>
          <button onClick={() => window.location.reload()}>רענן</button>
          
          <MissionCompleted />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/UnitsPage" element={<UnitsPage />} />
            <Route path="/units/:unit" element={<AboutUnit />} />
          </Routes>
        </Router>
      </div>
    </DeploymentProvider>
  );
};
export default App;


