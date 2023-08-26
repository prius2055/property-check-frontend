import React, { useState } from 'react';
import Login from '../auth/Login';
import Registration from '../auth/Registration';
// import Login from './auth/Login';
// import { Link } from 'react-router-dom';

const Home = () => {
  const [homePageDisplay, setHomePageDisplay] = useState({
    showLoginPage: true,
    showRegistrationPage: false,
  });

  //   handleSuccessfulAuth(data) {
  //     this.props.handleLogin(data);
  //     this.props.history.push('/dashboard');
  //   }

  return (
    <div>
      <h1>Home</h1>
      {/* <h1>Status: {this.props.loggedInStatus}</h1> */}
      {/* <Login handleSuccessfulAuth={this.handleSuccessfulAuth} /> */}
      {homePageDisplay.showLoginPage && <Login />}
      {homePageDisplay.showRegistrationPage && <Registration />}
    </div>
  );
};

export default Home;
