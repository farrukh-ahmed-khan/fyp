import { React, useState } from "react";
import "../Assets/css/form.css";
import logo from "../Assets/images/The-Wedding-Spot1.png";
import sidePanel from "../Assets/images/side-panel-img.png";
import sides from "../Assets/images/NicePng_rope-png_45489 (1).png";
import down from "../Assets/images/NicePng_rope-png_45489.png";
import { Link, useNavigate } from "react-router-dom";
import validate from "../Validation/SignupVendorValidation";
import axios from "axios";

const Signup = () => {
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showconfPassword, setShowconfPassword] = useState(false);

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleToggleconfPassword = () => {
    setShowconfPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setErrors(validate(values));
    const err = validate(values);
    setErrors(err);

    if (
      !err.fname &&
      !err.lname &&
      !err.email &&
      !err.password &&
      !err.confirmPassword
    ) {
      console.log("values", values);
      axios
        .post("http://localhost:8081/vendors", values)
        .then((res) => {
          console.log(res.data);
          navigate("/login");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="forms">
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-4 col-md-12" style={{ height: "100%" }}>
            <div className="logo-wrapper">
              <img src={logo} />
            </div>
            <div className="side-panel-form">
              <h4>
                Book your <span>venue</span> online
                <br></br> & <br></br>
                save your time
              </h4>
              <div className="side-panel-img-wrapper float">
                <img src={sidePanel} alt="" srcset="" />
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12" style={{ height: "100%" }}>
            <div className="sign-log-form">
              <div className="form-heading">
                <p>Vendor Signup</p>
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
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    onChange={handleInput}
                  />
                  <i
                    className={`eye-icon ${
                      showPassword ? "fa fa-eye" : "fa fa-eye-slash"
                    }`}
                    onClick={handleTogglePassword}
                  />
                  {errors.password && (
                    <span className="error text-danger">{errors.password}</span>
                  )}
                </div>
                <div className="confirm-password">
                  <input
                    type={showconfPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    onChange={handleInput}
                  />
                  <i
                    className={`eye-icon ${
                      showconfPassword ? "fa fa-eye" : "fa fa-eye-slash"
                    }`}
                    onClick={handleToggleconfPassword}
                  />
                  {errors.confirmPassword && (
                    <span className="error text-danger">
                      {errors.confirmPassword}
                    </span>
                  )}
                </div>
                <div className="form-submit-button">
                  <button type="submit">Signup</button>
                </div>
                <div className="form-para">
                  <p>
                    Already have an Account?{" "}
                    <Link to="/Vendorlogin">Login</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
