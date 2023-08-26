import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
            type="email"
            name="email"
            placeholder="Email"
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

        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="password_confirmation"
            placeholder="Password Confirmation"
            required
            // value={this.state.password_confirmation}
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
