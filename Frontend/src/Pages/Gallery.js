import React from "react";
import "../Assets/css/gallery.css";
import Footer from "../Components/CommonComponent/Footer";
import MakeUpDecoration from "../Components/CommonComponent/MakeUpDecoration";
import Navbr from "../Components/CommonComponent/Nav";
import ShortGallery from "../Components/ShortGallery";
import ReservedTheDate from "../Components/CommonComponent/ReservedTheDate";

const Gallery = () => {
  return (
    <>
      <div className="nav-portion">
        <Navbr />
      </div>
      <div class="hero-section">
        <h1>Gallery</h1>
      </div>
      {/* <div className='gallery-head'>
      <h4>Gallery</h4>
      <p>Checkout our luxury wedding photography, Videography, Makeup & c.	Declaration</p>
    </div> */}
      <div className="short-gallery-portion">
        <ShortGallery />
      </div>
      <div className="makeup-&-decor-portion">
        <MakeUpDecoration />
      </div>
      {/* <ReservedTheDate/> */}
      <div className="foot" style={{ marginTop: "13vh" }}>
        <Footer />
      </div>
    </>
  );
};

export default Gallery;
