import { React, useState } from 'react';
import '../Assets/css/form.css';
import sides from '../Assets/images/NicePng_rope-png_45489 (1).png';
import down from '../Assets/images/NicePng_rope-png_45489.png';
import { Link, useNavigate } from 'react-router-dom';
import validate from '../Validation/SignupValidation';
import axios from 'axios';

const Signup = () => {
  const [values, setValues] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));

    if (
      !errors.fname &&
    !errors.lname &&
    !errors.email &&
    !errors.password
    ) {
      console.log(values);
      navigate('/login');
      axios.post('http://localhost:8081/signup', values);
    }
  };

  return (
    <div className="forms">
      <div className="container">
        <div className="row ">
          <div className="sign-log-form">
            <div className="form-heading">
              <p>Signup</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="email">
                <input
                  type="text"
                  placeholder="First name"
                  className="first-name"
                  name="fname"
                  onChange={handleInput}
                />
                {errors.fname && (
                  <span className="error text-danger">{errors.fname}</span>
                )}
              </div>
              <div className="email">
                <input
                  type="text"
                  placeholder="last name"
                  className="first-name"
                  name="lname"
                  onChange={handleInput}
                />
                {errors.lname && (
                  <span className="error text-danger">{errors.lname}</span>
                )}
              </div>
              <div className="email">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleInput}
                />
                {errors.email && (
                  <span className="error text-danger">{errors.email}</span>
                )}
              </div>
              <div className="password">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleInput}
                />
                {errors.password && (
                  <span className="error text-danger">{errors.password}</span>
                )}
              </div>
              <div className="confirm-password">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  onChange={handleInput}
                />
                {errors.confirmPassword && (
                  <span className="error text-danger">
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
              <div className="form-submit-button">
                <button type="submit">
                  <p>Submit </p>
                </button>
              </div>
              <div className="form-para">
                <p>
                  Already have an Account <Link to="/login">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="upper-image">
        <img src={sides} />
      </div>

      <div className="lower-image">
        <img src={down} />
      </div>
    </div>
  );
};

export default Signup;
