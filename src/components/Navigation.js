import React, { useEffect } from 'react';
import Logout from '../auth/Logout';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faVimeoV } from '@fortawesome/free-brands-svg-icons';
import { faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../redux/features/usersSlice';

const Navigation = () => {
  const { currentUserData } = useSelector((store) => store.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-between h-screen w-1/6 py-4 pl-4 border-2">
      <div className="flex flex-col font-bold">
        <h1 className="p-4">propInspect</h1>

        <ul className="mt-20 flex flex-col justify-between uppercase cursor-pointer ">
          <Link to="/dashboard" className="p-4 hover:bg-lime-500">
            Properties
          </Link>
          <Link to="/my-inspections" className="p-4 hover:bg-lime-500">
            My inspections
          </Link>

          {currentUserData.admin === true && (
            <Link to="/new-property" className="p-4 hover:bg-lime-500">
              Add property
            </Link>
          )}

          {currentUserData.admin === true && (
            <Link to="/inspections" className="p-4 hover:bg-lime-500">
              All inspections
            </Link>
          )}

          {currentUserData.admin === true && (
            <Link to="/delete-property" className="p-4 hover:bg-lime-500">
              Remove property
            </Link>
          )}
          <Logout />
        </ul>
      </div>

      <div className="flex flex-col justify-start ">
        <div className="flex justify-between mb-4 mr-20">
          <FontAwesomeIcon icon={faXTwitter} style={{ color: '#000000' }} />
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faGooglePlusG} />
          <FontAwesomeIcon icon={faVimeoV} />
          <FontAwesomeIcon icon={faPinterestP} />
        </div>
        <footer className="text-sm">&copy; 2023 PropInspect</footer>
      </div>
    </div>
  );
};

export default Navigation;
