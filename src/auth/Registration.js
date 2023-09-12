import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Registration() {
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
    console.log(newUser);

    const userData = {
      user: {
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
        password_confirmation: newUser.password_confirmation,
      },
    };

    // const d = JSON.stringify(userData);

    console.log(userData.user.user);

    axios
      .post(
        'http://localhost:3000/signup',
        {
          username: newUser.username,
          email: newUser.email,
          password: newUser.password,
          password_confirmation: newUser.password_confirmation,
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            // Authorization: 'Bearer ' + token, // if you use token
          },
        }

        // header:{'Content-Type': 'application/json'}
        // { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === 'created') {
          console.log('Registration data', response.data);
        }
      })
      .catch((error) => {
        console.log('registration error', error.response.data);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="username"
            placeholder="Username"
            required
            value={newUser.username}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
            required
            value={newUser.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
            required
            value={newUser.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="password_confirmation"
            placeholder="Password Confirmation"
            required
            value={newUser.password_confirmation}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-sm">
          Register
        </button>
        <p>
          Have an account? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Registration;
