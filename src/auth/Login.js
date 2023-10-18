import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const userObj = {
    username: '',
    password: '',
  };

  const [user, setUser] = useState(userObj);

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        'http://localhost:3000/login',
        {
          user: {
            username: user.username,
            password: user.password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.logged_in && response.data.patient) {
          this.props.handleSuccessfulAuth(response.data);
        } else {
          this.props.handleSuccessfulDoctorAuth(response.data);
        }
      })
      .catch((error) => {
        console.log('login error', error);
      });
    console.log(user);
  };

  return (
    <div className="flex relative h-full w-full">
      <div className="bg-gradient-to-tr from-yellow-800 to-yellow-800 h-24 min-h-full w-1/2">
        <img
          src="https://images.unsplash.com/photo-1470615619213-fdd3985a40e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2054&q=80"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-20 my-auto py-60 border-2 border-yellow-500 flex flex-col w-1/2 rounded-md"
      >
     
        <input
          className="w-3/4 rounded-md border-0 py-1.5 pl-5 pr-20 mx-auto my-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 focus:outline-0 sm:text-sm sm:leading-6"
          type="text"
          name="username"
          placeholder="Username"
          required
          value={user.username}
          onChange={handleChange}
        />

        <input
          className="w-3/4 rounded-md border-0 py-1.5 pl-5 pr-20 mx-auto my-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-0 sm:text-sm sm:leading-6"
          type="password"
          name="password"
          placeholder="Password"
          required
          value={user.password}
          onChange={handleChange}
        />
    

        <button
          type="submit"
          className="w-2/4 rounded-md bg-lime-600 px-3 py-2 mx-auto text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
        >
          Login
        </button>
        <p className="mx-auto w-2/4 text-center my-4">
          Don't have an account? <Link to="/registration" className='underline text-yellow-900'>Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
