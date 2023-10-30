import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import Navigation from './Navigation';
// import Login from './auth/Login';
// import { Link } from 'react-router-dom';

const PropertyDetail = () => {
  return (
    <div className="flex h-screen">
      <Navigation />
      <div className="flex justify-evenly items-center py-8 w-5/6 m-auto">
        <div className="flex flex-col items-start">
          <img
            src="https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?auto=format&fit=crop&q=80&w=2028&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Omega house, Gwarimpa"
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
            <span className="mr-4">Omega house</span>
            <span>OM001</span>
          </div>
          <p className="mb-6 text-end">5 bedroom duplex</p>
          <div className="flex justify-between text-center font-bold p-3  bg-gray-200">
            <span className="mr-4 ">Location</span>
            <span>Gwarimpa</span>
          </div>
          <div className="flex justify-between text-center font-bold p-3  ">
            <span className="mr-4 ">Posted</span>
            <span>20/03/2023</span>
          </div>
          <div className="flex justify-between text-center font-bold p-3  bg-gray-200">
            <span className="mr-4 ">Asking</span>
            <span>5,000$</span>
          </div>

          <p>Negotiable</p>

          <p className="mt-6 mb-16">
            Beautiful living Condo surronded by nature. This Condo is suitable
            for anyoune who likes nature and enjoys meditation. Located in the
            heart of Gwarimpa, Seventh avenue
          </p>
          <button className="bg-lime-500 rounded-full p-3 font-bold text-white text-xl cursor-pointer w-1/2 self-end">
            Book inspection
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
