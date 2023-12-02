import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import Navigation from './Navigation';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProperties } from '../redux/features/propertySlice';
import { getCurrentUser } from '../redux/features/usersSlice';

const Dashboard = () => {
  const { properties, users } = useSelector((store) => store);

  const { propertyData, isLoading, loadingError } = properties;

  const [page, setPage] = useState(1);

  const { currentUserData } = users;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const itemsPerPage = 3;

  const pages = propertyData?.length / itemsPerPage;

  const skip = page * itemsPerPage - itemsPerPage;

  const prevHandler = (e) => {
    e.preventDefault();
    if (page !== 1) {
      setPage((prev) => prev - 1);
    } else {
      return;
    }
  };

  const nextHandler = (e) => {
    e.preventDefault();
    if (page !== pages) {
      setPage((prev) => prev + 1);
    } else {
      return;
    }
  };

  useEffect(() => {
    dispatch(getProperties());
    dispatch(getCurrentUser());
  }, [dispatch]);

  if (currentUserData.email === '') {
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
    <div className="flex">
      <Navigation />

      <div className="flex flex-col items-center py-8 w-5/6">
        <p className="my-2 font-bold">Welcome, {currentUserData.username}!</p>
        <header className="my-4 font-bold">LATEST PROPERTIES</header>

        {propertyData.length !== 0 && (
          <div className="flex flex-col items-center">
            <p>Please select a property to book for an inspection</p>
            <div className="flex items-center w-full px-12">
              <FontAwesomeIcon
                icon={faCircleChevronLeft}
                style={{ color: '#9ed714' }}
                size="2xl"
                className="cursor-pointer"
                onClick={prevHandler}
              />
              <div className="flex mt-12 items-start px-2">
                {propertyData
                  ?.slice(skip, skip + itemsPerPage)
                  .map((property) => (
                    <Link
                      to={`/property-detail/${property.id}`}
                      className="flex flex-col items-center text-center w-1/3"
                      key={property.id}
                    >
                      <img
                        src={property.image}
                        alt={property.name}
                        className="w-96 h-96 rounded-full"
                      />
                      <div className="flex justify-center my-6 text-center font-bold border-b-2 border-dotted pb-4 mx-8">
                        <span className="mr-4 ">{property.name}</span>
                        <span>PTY00{property.id}</span>
                      </div>
                      <p className="w-3/4 m-auto">{property.description}</p>
                    </Link>
                  ))}
              </div>
              <FontAwesomeIcon
                icon={faCircleChevronRight}
                style={{ color: '#9ed714' }}
                size="2xl"
                className="cursor-pointer"
                onClick={nextHandler}
              />
            </div>
          </div>
        )}

        {propertyData.length === 0 && (
          <p>No properties at the moment, please check back later</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
