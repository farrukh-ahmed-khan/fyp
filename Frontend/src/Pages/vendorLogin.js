import { React, useState } from "react";
import "../Assets/css/form.css";
import logo from "../Assets/images/The-Wedding-Spot1.png";
import sidePanel from "../Assets/images/side-panel-img.png";
import { Link, useNavigate } from "react-router-dom";
import validate from "../Validation/LoginVendorValidation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const VendorLogin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate(values);
    setErrors(err);
  
    if (!err.email && !err.password) {
      console.log("Sending login request with data:", values); // Add this line for logging
      axios
        .post("http://localhost:8081/vendorlogin", values)
        .then((res) => {
          console.log("Login response:", res.data); // Add this line for logging
          if (res.data === "Login Successful") {
            localStorage.setItem("vendor", values.email);
            toast.success("Login Successfully!!");
            setTimeout(() => {
              navigate("/Add-Venue");
            }, 1000);
          } else {
            toast.error("No Record Existed!");
          }
        })
        .catch((err) => {
          console.log("Login error:", err); // Add this line for logging
          toast.error("Error logging in!");
        });
    }
  };
  

  return (
    <div className="forms">
      <div className="container-fluid">
        <div className="row d-flex align-items-center">
          <div className="col-lg-4" style={{ height: "100%" }}>
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
          <div className="col-lg-8" style={{ height: "100%" }}>
            <div className="sign-log-form">
              <div className="form-heading">
                <p>Login as Vendor</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="email">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleInput}
                    maxLength={30}
                  />
                  {errors.email && (
                    <span className="error text-danger">{errors.email}</span>
                  )}
                </div>
                {/* <div className="password">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleInput}
                  />
                  {errors.password && (
                    <span className="error text-danger">{errors.password}</span>
                  )}
                </div> */}

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

                <div className="form-submit-button">
                  <button type="submit">Login</button>
                </div>
                <div className="form-para">
                  <p>
                    Don't have an account?{" "}
                    <Link to="/VendorSignup">SignUp</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default VendorLogin;
