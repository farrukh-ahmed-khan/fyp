import { React, useState } from "react";
import "../Assets/css/contact.css";
import fbIcon from "../Assets/images/facebook-icon.png";
import instaIcon from "../Assets/images/instagram-icon.png";
import twitterIcon from "../Assets/images/whatsapp-icon.png";
import whatsappIcon from "../Assets/images/twitter-icon.png";
import img from "../Assets/images/contact.png";
import Navbar from "../Components/CommonComponent/Nav";
import Footer from "../Components/CommonComponent/Footer";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, email, message } = values;

    if (email && phone && name && message) {
      axios
        .post("http://localhost:8081/contact", values)
        .then((res) => {
          if (!res.data.error) {
            navigate("/Thankyou");
          }
        })
        .catch((err) => {
          console.error(err);
          toast.error("Message not sent successfully!");
        });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="service-wrapper">
          <div className="row">
            <div className="col-lg-6 mt-5">
              <h3>
                <span>| </span>CONTACT
              </h3>
              <p>
                Welcome to the wedding spot, where we don't just provide spaces
                but create an entire experience. Elevate your event with our
                comprehensive services. Our talented photographers skillfully
                capture every fleeting moment, ensuring memories that last a
                lifetime. Transform into your most radiant self with our expert
                makeup artists, who bring out your natural beauty. Let our
                decorators weave magic, turning your chosen venue into a
                personalized masterpiece. Together, these services harmonize to
                craft an unforgettable celebration, where every detail is a
                testament to your unique style and joyous moments are
                immortalized with grace.
              </p>
            </div>
            <div className="col-lg-6 ml-1">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      {/* <div class="banner-section">
        <h1>Welcome To Contact Page</h1>
      </div> */}
      <h1 className="text-center contact-heading">Contact US</h1>
      <div className="contact-us">
        <center>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <input
                className="name-field"
                type="text"
                placeholder="Enter Your Name"
                required=""
                name="name"
                onChange={handleInput}
              />
              <br />
              <input
                className="email-field"
                type="email"
                placeholder="Enter Your Email"
                name="email"
                required=""
                onChange={handleInput}
              />
              <br />
              <input
                type="text"
                placeholder="Enter Your Phone No"
                required=""
                className="phone-field"
                name="phone"
                onChange={handleInput}
              />
              <br />
              <textarea
                cols={70}
                rows={8}
                placeholder="Type Your Messege Here...."
                defaultValue={""}
                className="messege-field"
                name="message"
                onChange={handleInput}
              />
              <br />
              <input className="submit-btn" type="submit" defaultValue="SEND" />
            </form>
          </div>
        </center>
      </div>
      <div className="container mt-5">
        <hr />
      </div>

      <center>
        <div className="social">
          <h2>GET SOCIAL</h2>
          <p>Contact us Via...</p>
          <ul className="list">
            <li>
              {/* <a href="" style={{ backgroundColor: "#274274" }}>
                <i className="fab fa-facebook fa-lg" />
              </a> */}
              <img src={fbIcon} />
            </li>
            <li>
              {/* <a href="" style={{ backgroundColor: "#5ea1d4" }}>
                <i className="fab fa-twitter fa-lg" />
              </a> */}
              <img src={instaIcon} />
            </li>
            <li>
              {/* <a href="" style={{ backgroundColor: "#0a411f" }}>
                <i className="fab fa-whatsapp fa-lg" />
              </a> */}
              <img src={twitterIcon} />
            </li>
            <li>
              {/* <a href="" style={{ backgroundColor: "#cf3b56" }}>
                <i className="fab fa-instagram fa-lg" />
              </a> */}
              <img src={whatsappIcon} />
            </li>
          </ul>
        </div>
      </center>

      <Footer />
    </>
  );
};

export default Contact;
