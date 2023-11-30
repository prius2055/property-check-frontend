import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../redux/features/usersSlice';

function Login() {
  const { currentUserData } = useSelector((store) => store.users);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  if (currentUserData) {
    navigate('/dashboard');
  }

  const userObj = {
    email: '',
    password: '',
  };
 
  const [user, setUser] = useState(userObj);

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    const userInfo = {
      user: {
        email: user.email,
        password: user.password,
      },
    };

    const url = 'https://propcheck-api.onrender.com/login';
    try {
      const response = await axios.post(url, userInfo, {
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
        },
      });

      if (response.status === 200) {
        const { data } = response;
        const { status } = data;
        localStorage.setItem('token', response.headers.get('Authorization'));
        localStorage.setItem('user', JSON.stringify(status.data));
        navigate('/dashboard', {
          state: { userDetail: status.data.user.username },
        });
      }
    } catch (error) {
      throw new Error(error);
    }
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
        onSubmit={loginHandler}
        className="mx-20 my-auto py-60 border-2 border-yellow-500 flex flex-col w-1/2 rounded-md"
      >
        <input
          className="w-3/4 rounded-md border-0 py-1.5 pl-5 pr-20 mx-auto my-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 focus:outline-0 sm:text-sm sm:leading-6"
          type="email"
          name="email"
          placeholder="Username"
          required
          value={user.email}
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
          Don't have an account?{' '}
          <Link to="/registration" className="underline text-yellow-900">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
