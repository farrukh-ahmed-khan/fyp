import React from "react";
import logo from "../../Assets/images/logo.png";
import "../../Assets/css/footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-3 ">
              <div class="ftr-lt">
                <figure>
                  <img src={logo} alt="logo" />
                  {/* <p className="logo">The Wedding Spot</p> */}
                </figure>
                <div class="p1">
                  <p>Social Media</p>
                </div>
                <ul class="socialIcon">
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faFacebook} />
                    </span>
                  </li>

                  <li>
                    <span>
                      <FontAwesomeIcon icon={faTwitter} />
                    </span>
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon icon={faInstagram} />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="ftr-md1">
                <div class="m4-h">
                  <h5>Helpful Links</h5>
                </div>
                <ul class="footerLinks">
                  <li>
                    <Link class="active" to="/">
                      home
                    </Link>
                  </li>
                  <li>
                    <Link to="/About">About</Link>
                  </li>
                  <li>
                    <Link to="/Service">Services</Link>
                  </li>
                  <li>
                    <Link to="/venue-booking">Venue Booking</Link>
                  </li>
                  <li>
                    <Link to="/Contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="ftr-md1">
                <div class="m4-h">
                  <h5>Services</h5>
                </div>
                <ul class="footerLinks">
                  <li>
                    <Link class="active" href="./">
                      Photography
                    </Link>
                  </li>
                  <li>
                    <Link href="#">Makeup</Link>
                  </li>
                  <li>
                    <Link href="#">Decoration</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-md-3">
              <div class="ftr-md1">
                <div class="m4-h">
                  <h5>Contact Us</h5>
                </div>
                <ul class="footerLinks">
                  <li>
                    <Link class="active" to="tel:8552247575">
                      +92 3151115974
                    </Link>
                  </li>
                  <li>
                    <Link to="mailto:Theweddingspot@gmail.com">
                      theweddingspot@gmail.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="copyright text-center">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <p className="copyright-footer">
                Copyright © 2024 site name All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
