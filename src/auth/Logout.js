import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

const Logout = () => {
  const navigate = useNavigate();

  const logoutHandler = async (e) => {
    const url = 'https://propcheck-api.onrender.com/logout';
    const authToken = localStorage.getItem('token');
    try {
      const response = await axios.delete(url, {
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
          authorization: authToken,
        },
      });

      if (response.status === 200) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    } catch (error) {
      throw new Error(error);
    }

    navigate('/');
  };

  return (
    <div className="p-2 hover:bg-lime-500 cursor-pointer">
      <input
        type="button"
        value="Logout"
        onClick={logoutHandler}
        className="p-4 hover:bg-lime-500 cursor-pointer"
      />
    </div>
  );
};
export default Logout;
