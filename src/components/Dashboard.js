import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import Navigation from './Navigation';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getProperties } from '../redux/features/propertySlice';
import { getCurrentUser } from '../redux/features/currentUserSlice';
// import Login from './auth/Login';
// import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { properties, currentUser } = useSelector((store) => store);

  const { propertyData, isLoading, loadingError } = properties;

  const { currentUserData } = currentUser;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProperties());
    dispatch(getCurrentUser());
  }, [dispatch]);

  if (!currentUserData) {
    navigate('/login');
  }

  if (isLoading) {
    return (
      <div className="m-6">
        <h3>
          <em>loading...</em>
        </h3>
      </div>
    );
  }

  if (loadingError) {
    return (
      <div className="m-6">
        <h3>
          <em>Error loading properties</em>
        </h3>
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      <Navigation />

      <div className="flex flex-col items-center py-8 w-5/6">
        <p className="my-2 font-bold">Welcome, {currentUserData.username}!</p>
        <header className="my-4 font-bold">LATEST PROPERTIES</header>

        {propertyData && (
          <div className="flex flex-col items-center">
            <p>Please select a property to book for an inspection</p>
            <div className="flex items-center w-full ml-20">
              <FontAwesomeIcon
                icon={faCircleChevronLeft}
                style={{ color: '#9ed714' }}
                size="2xl"
              />
              <div className="flex justify-between mt-28 items-center">
                {propertyData.map((property) => (
                  <div className="text-center w-1/3" key={property.id}>
                    <img
                      src={property.image}
                      alt={property.name}
                      className="w-80 h-80 rounded-full m-auto"
                    />
                    <div className="flex justify-center my-6 text-center font-bold border-b-2 border-dotted pb-4 w-1/2 mx-auto ">
                      <span className="mr-4 ">{property.name}</span>
                      <span>PTY00{property.id}</span>
                    </div>
                    <p className="w-3/4 m-auto">{property.description}</p>
                  </div>
                ))}
              </div>
              <FontAwesomeIcon
                icon={faCircleChevronRight}
                style={{ color: '#9ed714' }}
                size="2xl"
              />
            </div>
          </div>
        )}

        {!propertyData && (
          <p>No properties at the moment, please check back later</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
