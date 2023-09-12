import { Link } from 'react-router-dom';
import Login from '../auth/Login';

const SplashPage = () => {
  return (
    <div>
      <h1>Welcome to propInspect</h1>
      <p>Your one-stop showroom for real estate properties</p>
      <Login />
      <div>
        <p>Dont have an account?</p>
        <Link to="/registration">Register</Link>
      </div>
    </div>
  );
};

export default SplashPage;
