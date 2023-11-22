import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PropertyDetail from './components/property/PropertyDetail';
import NewProperty from './components/property/NewProperty';
import SplashPage from './components/SplashPage';
import PropertyFlash from './flashPages/PropertyFlash';
import InspectionFlash from './flashPages/InspectionFlash';
import Registration from './auth/Registration';
import Login from './auth/Login';
import NewInspection from './components/inspection/NewInspection';
import Inspections from './components/inspection/Inspections';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/property-detail/:id" element={<PropertyDetail />} />
        <Route path="/new-property" element={<NewProperty />} />
        <Route path="/property-flash" element={<PropertyFlash />} />
        <Route path="/inspection-flash" element={<InspectionFlash />} />
        <Route path="/book-inspection" element={<NewInspection />} />
        <Route path="/inspections" element={<Inspections />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
