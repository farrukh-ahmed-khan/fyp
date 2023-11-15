import { React } from "react";
import "../Assets/css/contact.css";
import Navbar from "../Components/CommonComponent/Nav";
import Footer from "../Components/CommonComponent/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div class="banner-section">
        <h1>Welcome To Contact Page</h1>
      </div>
      <h1 className="text-center contact-heading">Contact US</h1>
      <div className="contact-us">
        <center>
          <div className="form">
            <form>
              <input  className="name-field" type="text" placeholder="Enter Your Name" required="" />
              <br />
              <input  className="email-field" type="email" placeholder="Enter Your Email" required="" />
              <br />
              <input
                type="text"
                placeholder="Enter Your Phone No"
                required=""
                className="phone-field"
              />
              <br />
              <textarea
                cols={70}
                rows={8}
                placeholder="Type Your Messege Here...."
                defaultValue={""}
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
              <a href="" style={{ backgroundColor: "#274274" }}>
                <i className="fab fa-facebook fa-lg" />
              </a>
            </li>
            <li>
              <a href="" style={{ backgroundColor: "#5ea1d4" }}>
                <i className="fab fa-twitter fa-lg" />
              </a>
            </li>
            <li>
              <a href="" style={{ backgroundColor: "#0a411f" }}>
                <i className="fab fa-whatsapp fa-lg" />
              </a>
            </li>
            <li>
              <a href="" style={{ backgroundColor: "#cf3b56" }}>
                <i className="fab fa-instagram fa-lg" />
              </a>
            </li>
          </ul>
        </div>
      </center>

      <Footer />
    </>
  );
};

export default Contact;
