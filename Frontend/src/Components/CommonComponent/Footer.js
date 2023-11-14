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
                  <h5>Menus</h5>
                </div>
                <ul class="footerLinks">
                  <li>
                    <Link class="active" href="./">
                      home
                    </Link>
                  </li>
                  <li>
                    <Link href="#">About</Link>
                  </li>
                  <li>
                    <Link href="#">Services</Link>
                  </li>
                  <li>
                    <Link href="#">Testimonials</Link>
                  </li>
                  <li>
                    <Link href="#">Contact</Link>
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
                      Photoshoot
                    </Link>
                  </li>
                  <li>
                    <Link href="#">Makeup</Link>
                  </li>
                  <li>
                    <Link href="#">Venue Finding</Link>
                  </li>
                  <li>
                    <Link href="#">Test 3</Link>
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
                      +123 1213 21345
                    </Link>
                  </li>
                  <li>
                    <Link to="mailto:Wedplaner1@gmail.com">
                      Wedplaner1@gmail.com
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
                Copyright © 2020 site name All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
