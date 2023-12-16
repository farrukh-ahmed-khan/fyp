import { React, useState } from "react";
import "../Assets/css/form.css";
import logo from "../Assets/images/The-Wedding-Spot1.png";
import sidePanel from "../Assets/images/side-panel-img.png";
import { Link, useNavigate } from "react-router-dom";
import validate from "../Validation/LoginValidation";
import axios from "axios";

const Login = () => {
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
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          if (res.data === "Login Successful") {
            // Save user information to local storage
            localStorage.setItem("user", JSON.stringify(values));
            alert("Login Successful");

            navigate("/");
          } else {
            alert("No record existed");
          }
        })
        .catch((err) => console.log(err));
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
                <p>Login</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="email">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
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

                <div className="form-submit-button">
                  <button type="submit">Login</button>
                </div>
                <div className="form-para">
                  <p>
                    Don't have an account? <Link to="/Signup">SignUp</Link>
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

export default Login;
