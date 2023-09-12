import { Link } from 'react-router-dom';
// import Image from '../img/yellow_building-removebg.png'

import './SplashPage.css';

const SplashPage = () => {
  return (
    <div className="bg-gradient-to-tr from-yellow-500 to-yellow-500 h-24 min-h-full relative">
      <img
        src="https://images.unsplash.com/photo-1470615619213-fdd3985a40e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2054&q=80"
        className="w-full h-full object-cover mix-blend-overlay absolute"
      />
      <div className="h-screen flex items-center justify-center flex-col">
        <h1 className="text-6xl font-bold ">Welcome to propInspect</h1>
        <p className="text-6l font-bold my-8">
          Your one-stop showroom for real estate properties
        </p>
        <div className="text-white font-bold bg-lime-900 py-2 px-12 rounded-full cursor-pointer">
          <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;
