import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import SplashPage from './components/SplashPage';
import Registration from './auth/Registration';
import Login from './auth/Login';
import axios from 'axios';

import './App.css';

function App() {
  // const navigate = useNavigate();
  // const [loggedInStatus, setLoggedInStatus] = useState({
  //   isLoggedIn: false,
  //   user: {},
  // });

  // const checkLoginStatus = () => {
  //   axios
  //     .get('http://localhost:3000/login')
  //     .then((response) => {
  //       if (
  //         response.data.status.data.username &&
  //         loggedInStatus.isLoggedIn === false
  //       ) {
  //         setLoggedInStatus({
  //           ...loggedInStatus,
  //           isLoggedIn: true,
  //         });
  //         navigate('/dashboard');
  //       } else if (
  //         !response.data.status.data.username &&
  //         loggedInStatus.isLoggedIn === true
  //       ) {
  //         setLoggedInStatus({
  //           ...loggedInStatus,
  //           isLoggedIn: false,
  //         });
  //         navigate('/');
  //       }
  //     })
  //     .catch((error) => {
  //       console.log('login error', error);
  //     });
  // };

  // useEffect(() => {
  //   checkLoginStatus();
  // }, []);

  // const [appDisplay, setAppDisplay] = useState({
  //   showHomePage: true,
  //   showDashboard: false,
  // });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

