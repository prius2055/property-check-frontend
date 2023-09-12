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
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="username"
            placeholder="Username"
            required
            value={user.username}
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
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-sm">
          Login
        </button>
        <p>
          Don't have an account? <Link to="/registration">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
