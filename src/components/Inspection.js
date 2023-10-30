import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import Navigation from './Navigation';
// import Login from './auth/Login';
// import { Link } from 'react-router-dom';

const Inspection = () => {
  return (
    <div className="flex h-screen">
      <Navigation />
      <div className="flex flex-col items-center py-8 w-5/6 bg-lime-500">
        <h1 className="uppercase border-solid border-b border-gray-200 pb-2 font-bold w-1/2 text-center text-3xl text-white tracking-widest">
          Book an inspection
        </h1>

        <div className="w-1/2 my-4">
          <div className="flex justify-end font-bold text-white">
            <span className="mr-4">Omega house</span>
            <span>OM001</span>
          </div>
          <img
            src="https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?auto=format&fit=crop&q=80&w=2028&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Omega house, Gwarimpa"
            className="w-full h-3/4 rounded-lg m-auto"
          />
          <p className="mt-6 mb-2 text-white w-full text-center">
            Beautiful living Condo surronded by nature. This Condo is suitable
            for anyoune who likes nature and enjoys meditation. Located in the
            heart of Gwarimpa, Seventh avenue
          </p>
        </div>

        <div className="flex justify-evenly w-1/3">
          <input
            type="date"
            className="bg-lime-500 text-white border-white border rounded-full px-6 py-3"
          />
          <button className="bg-white rounded-full px-16 py-3 text-lime-600 text-l cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inspection;
