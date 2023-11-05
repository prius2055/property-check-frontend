import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import Navigation from './Navigation';
// import Login from './auth/Login';
// import { Link } from 'react-router-dom';

const Dashboard = () => {
  //   handleSuccessfulAuth(data) {
  //     this.props.handleLogin(data);
  //     this.props.history.push('/dashboard');
  //   }

  return (
    <div className="flex h-screen">
      <Navigation />
      <div className="flex flex-col items-center py-8 w-5/6">
        <header className="my-4 font-bold">LATEST PROPERTIES</header>
        <p>Please select a property to book for an inspection</p>
        <div className="flex items-center w-full ml-20">
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            style={{ color: '#9ed714' }}
            size="2xl"
          />
          <div className="flex justify-between mt-28 items-center">
            <div className="text-center w-1/3">
              <img
                src="https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?auto=format&fit=crop&q=80&w=2028&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Omega house, Gwarimpa"
                className="w-80 h-80 rounded-full m-auto"
              />
              <div className="flex justify-center my-6 text-center font-bold border-b-2 border-dotted pb-4 w-1/2 mx-auto ">
                <span className="mr-4 ">Omega house</span>
                <span>OM001</span>
              </div>
              <p className="w-3/4 m-auto">
                Beautiful living Condo surronded by nature. This Condo is
                suitable for anyoune who likes nature and enjoys meditation.
                Located in the heart of Gwarimpa, Seventh avenue
              </p>
            </div>
            <div className="text-center w-1/3">
              <img
                src="https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?auto=format&fit=crop&q=80&w=2028&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Omega house, Gwarimpa"
                className="w-80 h-80 rounded-full m-auto mb-8"
              />
              <div className="flex justify-center my-6 text-center font-bold border-b-2 border-dotted pb-4 w-1/2 mx-auto">
                <span className="mr-4">Omega house</span>
                <span>OM001</span>
              </div>
              <p className="w-3/4 m-auto">
                Beautiful living Condo surronded by nature. This Condo is
                suitable for anyoune who likes nature and enjoys meditation.
                Located in the heart of Gwarimpa, Seventh avenue
              </p>
            </div>
            <div className="text-center w-1/3">
              <img
                src="https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?auto=format&fit=crop&q=80&w=2028&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Omega house, Gwarimpa"
                className="w-80 h-80 rounded-full m-auto mb-8"
              />
              <div className="flex justify-center my-6 text-center font-bold border-b-2 border-dotted pb-4 w-1/2 mx-auto">
                <span className="mr-4">Omega house</span>
                <span>OM001</span>
              </div>
              <p className="w-3/4 m-auto">
                Beautiful living Condo surronded by nature. This Condo is
                suitable for anyoune who likes nature and enjoys meditation.
                Located in the heart of Gwarimpa, Seventh avenue
              </p>
            </div>
          </div>
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            style={{ color: '#9ed714' }}
            size="2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
