import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProperty } from '../../redux/features/propertySlice';
// import Login from './auth/Login';

const PropertyDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { propertyData, isLoading, loadingError } = useSelector(
    (store) => store.properties
  );

  useEffect(() => {
    dispatch(getSingleProperty(id));
  }, [dispatch]);

  return (
    <div className="flex h-screen">
      <Navigation />
      <div className="flex justify-evenly items-center py-8 w-5/6 m-auto">
        <div className="flex flex-col items-start">
          <img
            src={propertyData.image}
            alt={`${propertyData.name}`}
            className="w-92 h-92 rounded-lg mb-8"
          />

          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            style={{ color: '#9ed714' }}
            size="2xl"
          />
        </div>
        <div className="flex flex-col ml-10">
          <div className="flex justify-end mt-6 font-bold">
            <span className="mr-4">{propertyData.name}</span>
            <span>{`PTY00${propertyData.id}`}</span>
          </div>
          <p className="mb-6 text-end">{propertyData.house_type}</p>
          <div className="flex justify-between text-center font-bold p-3  bg-gray-200">
            <span className="mr-4 ">Location</span>
            <span>{propertyData.location}</span>
          </div>
          <div className="flex justify-between text-center font-bold p-3  ">
            <span className="mr-4 ">Posted</span>
            <span>{`${new Date(`${propertyData.created_at}`).toLocaleDateString(
              'en-GB'
            )}`}</span>
          </div>
          <div className="flex justify-between text-center font-bold p-3  bg-gray-200">
            <span className="mr-4 ">Asking</span>
            <span>{`$${propertyData.price}M`}</span>
          </div>

          <p>Negotiable</p>

          <p className="mt-6 mb-16">{propertyData.description}</p>
          <Link
            to={'/book-inspection'}
            state={{ propertyDetail: propertyData }}
            className="bg-lime-500 rounded-full p-3 font-bold text-white text-xl cursor-pointer w-1/2 self-end"
          >
            Book inspection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
