import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const navigate = useNavigate();

  const newUserObj = {
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  };

  const [newUser, setNewUser] = useState(newUserObj);

  const handleChange = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      user: {
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
        password_confirmation: newUser.password_confirmation,
      },
    };

    axios
      .post('https://propcheck-api.onrender.com/signup', userData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate('/dashboard', {
            state: { userDetail: response.data.data.username },
          });
        }
      })
      .catch((error) => {
        console.log('registration error', error.response.data);
      });
  };

  return (
    <div className="flex relative h-full w-full">
      <div className="bg-gradient-to-tr from-yellow-800 to-yellow-800 h-24 min-h-full w-1/2">
        <img
          src="https://images.unsplash.com/photo-1470615619213-fdd3985a40e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2054&q=80"
          alt="Registration background"
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
          value={newUser.username}
          onChange={handleChange}
        />

        <input
          className="w-3/4 rounded-md border-0 py-1.5 pl-5 pr-20 mx-auto my-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 focus:outline-0 sm:text-sm sm:leading-6"
          type="email"
          name="email"
          placeholder="Email"
          required
          value={newUser.email}
          onChange={handleChange}
        />

        <input
          className="w-3/4 rounded-md border-0 py-1.5 pl-5 pr-20 mx-auto my-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 focus:outline-0 sm:text-sm sm:leading-6"
          type="password"
          name="password"
          placeholder="Password"
          required
          value={newUser.password}
          onChange={handleChange}
        />

        <input
          className="w-3/4 rounded-md border-0 py-1.5 pl-5 pr-20 mx-auto my-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 focus:outline-0 sm:text-sm sm:leading-6"
          type="password"
          name="password_confirmation"
          placeholder="Password Confirmation"
          required
          value={newUser.password_confirmation}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-2/4 rounded-md bg-lime-600 px-3 py-2 mx-auto text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
        >
          Register
        </button>
        <p className="mx-auto w-2/4 text-center my-4">
          Have an account?{' '}
          <Link to="/login" className="underline text-yellow-900">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
