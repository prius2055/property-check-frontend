import React, { useState, useEffect } from 'react';
import Navigation from '../Navigation';
import { useLocation, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addInspection } from '../../redux/features/inspectionSlice';

const NewInspection = () => {
  const location = useLocation();

  const property = location.state ? location.state.propertyDetail : null;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // const { currentUserData } = useSelector((state) => state.currentUser);

  const { user } = JSON.parse(localStorage.getItem('user'));

  // useEffect(() => {
  //   dispatch(getCurrentUser());
  // }, [dispatch]);

  const [newInspection, setNewInspection] = useState({
    inspection_date: '',
    inspection_time: '',
    property_id: property.id,
    user_id: user.id,
  });

  // console.log(currentUserData.id);

  const handleChange = (e) => {
    setNewInspection({
      // property_id: property.id,
      ...newInspection,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const response = dispatch(addInspection(newInspection));

    response
      .then((result) => {
        const { status } = result.payload;
        if (status === 'Success') {
          navigate('/inspection-flash');
        }
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(newInspection);
  };

  return (
    <div className="flex h-screen">
      <Navigation />
      <div className="flex flex-col items-center py-8 w-5/6 bg-lime-500">
        <h1 className="uppercase border-solid border-b border-gray-200 pb-2 font-bold w-1/2 text-center text-3xl text-white tracking-widest">
          Book an inspection
        </h1>

        <div className="w-1/2 my-4">
          <div className="flex justify-end font-bold text-white">
            <span className="mr-4">{property.name}</span>
            <span>{`PTY00${property.id}`}</span>
          </div>
          <img
            src={property.image}
            alt={`${property.name}`}
            className="w-full h-3/4 rounded-lg m-auto"
          />
          <p className="mt-6 mb-2 text-white w-full text-center">
            {property.description}
          </p>
        </div>

        <form className="flex justify-evenly w-1/3" onSubmit={submitHandler}>
          <input
            type="date"
            className="bg-lime-500 text-white border-white border rounded-full px-6 py-3"
            name="inspection_date"
            onChange={handleChange}
          />

          <input
            type="time"
            className="bg-lime-500 text-white border-white border rounded-full px-6 py-3"
            name="inspection_time"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-white rounded-full px-16 py-3 text-lime-600 text-l cursor-pointer"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewInspection;
