import React from "react";
import "../Assets/css/form.css";
import sides from "../Assets/images/NicePng_rope-png_45489 (1).png";
import down from "../Assets/images/NicePng_rope-png_45489.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="forms">
      <div className="container">
        <div className="row ">
          
          <div className="sign-log-form">
            <div className="form-heading">
              <p>Login</p>
            </div>
            <div className="email">
              <input type="text" placeholder="Email" />
            </div>
            <div className="password">
              <input type="text" placeholder="Password" />
            </div>
            <div className="confirm-password">
              <input type="text" placeholder="Confirm Password" />
            </div>
            <div className="form-submit-button">
              <button>
                <Link to="/home">

                <p>Submit</p>
                </Link>
              </button>
            </div>
            <div className="form-para">
              <p>
                Already have an Account <Link to="/">SignUp</Link>
              </p>
            </div>
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
