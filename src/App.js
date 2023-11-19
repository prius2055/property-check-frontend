import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PropertyDetail from './components/property/PropertyDetail';
import SplashPage from './components/SplashPage';
import PropertyFlash from './flashPages/PropertyFlash';
import Registration from './auth/Registration';
import Login from './auth/Login';
import Inspection from './components/Inspection';
import AddNewProperty from './components/property/AddNewProperty';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/property-detail" element={<PropertyDetail />} />
        <Route path="/new-property" element={<AddNewProperty />} />
        <Route path="/property-flash" element={<PropertyFlash />} />
        <Route path="/book-inspection" element={<Inspection />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
