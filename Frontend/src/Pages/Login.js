import {React, useState} from "react";
import "../Assets/css/form.css";
import sides from "../Assets/images/NicePng_rope-png_45489 (1).png";
import down from "../Assets/images/NicePng_rope-png_45489.png";
import { Link } from "react-router-dom";
import validate from "../LoginValidation";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});


    const handleInput = (e) => {
      setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setErrors(validate(values));
    };


  return (
    <div className="forms">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="sign-log-form">
            <div className="form-heading">
              <p>Login</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="email">
                <input type="text" name="email" placeholder="Email" onChange={handleInput}/>
                {errors.email && <span className="error text-danger">{errors.email}</span>}
              </div>
              <div className="password">
                <input type="text" name="password" placeholder="Password" onChange={handleInput}/>
                {errors.password && <span className="error text-danger">{errors.password}</span>}
              </div>
              <div className="confirm-password">
                <input type="text" name="confirm password" placeholder="Confirm Password" />
                {errors.confirmPassword && <span className="error text-danger">{errors.confirmPassword}</span>}
              </div>
              <div className="form-submit-button">
                <button type="submit">
                  
                    <p>Submit</p>
              
                </button>
              </div>
              <div className="form-para">
                <p>
                  Already have an Account <Link to="/">SignUp</Link>
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

export default Login;
