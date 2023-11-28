import React from "react";
import Navbr from "../Components/CommonComponent/Nav";
import "../Assets/css/service.css";
import Footer from "../Components/CommonComponent/Footer";
import img from "../Assets/images/service.png";
import PhotographyServiceCard from "../Components/photographyServiceCard";
import PhotographyCardActive from "../Components/PhotographyCardActive";
import MakeupServiceCard from "../Components/MakeupServiceCard";
import MakeupActiveCard from "../Components/MakeupActiveCard";
import DecorationServiceCard from "../Components/DecorationServiceCard";
import DecorationActiveCard from "../Components/DecorationActiveCard";

const Service = () => {
  return (
    <>
    {/* Navbar */}
      <div>
        <Navbr />
      </div>

      {/* Service Wrapper */}
      <div className="container">
        <div className="service-wrapper">
          <div className="row">
            <div className="col-lg-6 mt-5">
              <h3>
                <span>| </span>SERVICES
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

      {/* Photography Section */}

      <div className="photography-section my-5">
        <div className="container">
          <h3 className="mt-3 mb-5">
            <span>| </span>PHOTOGRAPHY
          </h3>
          <div className="row">
            <div className="cards">
              <PhotographyServiceCard type="silver" />
              <PhotographyCardActive type="platinum"/>           
              <PhotographyServiceCard type="gold" />            
            </div>
          </div>
        </div>
      </div>


      {/* Makeup Section */}
      <div className="makeup-section my-5">
        <div className="container">
          <h3 className="mt-3 mb-5">
            <span>| </span>MAKEUP
          </h3>
          <div className="row">
            <div className="cards">
              <MakeupServiceCard type="silver" />
              <MakeupActiveCard type="platinum"/>           
              <MakeupServiceCard type="gold" />            
            </div>
          </div>
        </div>
      </div>

      {/* Decoration Section */}

      <div className="decoration-section my-5">
        <div className="container">
          <h3 className="mt-3 mb-5">
            <span>| </span>DECORATION
          </h3>
          <div className="row">
            <div className="cards">
              <DecorationServiceCard type="silver" />
              <DecorationActiveCard type="platinum"/>           
              <DecorationServiceCard type="gold" />            
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Service;
