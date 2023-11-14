import React from "react";
import "../Assets/css/halldetails.css";
import Carosel from "../Components/CommonComponent/Carosel";
import Navbr from "../Components/CommonComponent/Nav";
import Footer from "../Components/CommonComponent/Footer";
import { useLocation } from "react-router-dom";

function HallDetails() {
  const location = useLocation();
  const hallDetails = location.state.hallDetails;

  console.log(hallDetails);
  return (
    <>
      <Navbr />
      <div className="image-slider">
        <Carosel />
      </div>
      <div className="container">
        <div className="heading my-5">
          <h1>AL-Mehfil Banquet</h1>
          <p>Karachi | North Naizmabad | 021-3663-0000</p>
        </div>
        <div className="overview-section">
          <h3>Overview</h3>
          <p>
            <span>AL-Mehfil</span> is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularized in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="services-section">
          <h3>Amenties & Requirement</h3>
          <div className="services">
            <p>Bride Dressing Area</p>
            <p>Dance Floor</p>
            <p>Groom's Dressing Area</p>
            <p>Public Parking</p>
            <p>Tables & Chairs Provided</p>
            <p>Kitchen's for serve only</p>
          </div>
        </div>

        <div className="requirement-section">
          <h3>Requirements</h3>
          <ul>
            <li>
              - A permit is required for any open flame (candles, cooking,
              sterno, etc.)
            </li>
            <li>- A permit is required for events with 200+ people</li>
            <li>- Meal must be served by licensed caterer</li>
            <li>- Amplified music OK indoors only</li>
            <li>- Approved outside caterer allowed</li>
            <li>- General liability insurance required</li>
            <li>- Music must end by 11:00PM</li>
            <li>- No rice, birdseed, confetti, etc.</li>
            <li>- Smoking in designated areas only</li>
            <li>- Venue must approve all decorations</li>
          </ul>
        </div>

        <div className="capacity">
          <h3>
            Venue Capacity: <span>Upto 400</span>
          </h3>
          <h3>
            Services: <span>Ceremony / Reception</span>
          </h3>
        </div>

        <div className="buttons">
          <button className="btn1">Price Venue</button>
          <button className="btn2">Add to Favorite</button>
        </div>

        <div className="location-section">
          <h3>Venue Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.671921781032!2d67.0461785742498!3d24.94324404194211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3408030039581%3A0x5787d44ab04d6226!2sAl-Mehmil%20Banquet%20Hall!5e0!3m2!1sen!2s!4v1699361799157!5m2!1sen!2s"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mb-5 mt-2"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HallDetails;
