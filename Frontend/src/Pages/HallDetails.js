import React from "react";
import "../Assets/css/halldetails.css";

import Carosel from "../Components/CommonComponent/Carosel";
import Navbr from "../Components/CommonComponent/Nav";
import Footer from "../Components/CommonComponent/Footer";
import { Link, useLocation ,useNavigate} from "react-router-dom";

function HallDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const hallDetails = location.state.hallDetails;
  const handleDetailsClick = (hallDetails) => {
    navigate("/checkout", { state: { hallDetails } });
  };
  
  return (
    <>
      <Navbr />
      <div className="image-slider">
        <Carosel />
      </div>
      <div className="container">
        <div className="heading my-5">
          <h1>{hallDetails.hallName}</h1>
          <p>{hallDetails.city} | {hallDetails.area} | {hallDetails.phone}</p>
        </div>
        
        <div className="services-section">
          <h3>Amenties & Requirement</h3>
          <div className="services">
            {hallDetails.services.map((service) => {
              return <p>{service}</p>;
            })}
            
          </div>
        </div>

        <div className="requirement-section">
          <h3>Requirements</h3>
          <ul>
          {hallDetails.requirements.map((req) => {
              return <li>{req}</li>;
            })}
           
          </ul>
        </div>

        <div className="capacity">
          <h3>
            Venue Capacity: <span>Upto 400</span>
          </h3>
        
        </div>

        <div className="buttons">
         
          <button className="btn1"   onClick={() => handleDetailsClick(hallDetails)}>Book Now</button>
          
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
