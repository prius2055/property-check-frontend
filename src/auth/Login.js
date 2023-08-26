import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
            // value={newUser.email}
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
            // value={this.state.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-sm">
          Login
        </button>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
