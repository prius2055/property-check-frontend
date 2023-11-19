import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

const SplashPage = () => {
  return (
    <div className="bg-gradient-to-tr from-yellow-800 to-yellow-800 h-24 min-h-full relative">
      <img
        src="https://images.unsplash.com/photo-1470615619213-fdd3985a40e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2054&q=80"
        alt='background'
        className="w-full h-full object-cover mix-blend-overlay absolute"
      />
      <div className="h-screen flex items-center justify-center flex-col absolute w-full">
        <h1 className="text-6xl font-bold text-white">
          Welcome to propInspect
        </h1>
        <p className="text-3xl my-8 text-white">
          Your one-stop showroom for real estate properties
        </p>
        <div className="text-white text-xl font-bold bg-lime-500 py-2 px-4 rounded-full cursor-pointer flex items-center justify-between w-32">
          <Link to="/login">Sign in</Link>
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            style={{ color: '#ffffff' }}
          />
        </div>
      </div>
    </div>
  );
};

export default SplashPage;
