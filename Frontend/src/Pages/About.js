import React from "react";
import "../Assets/css/about.css";
import Navbr from "../Components/CommonComponent/Nav";
import Footer from "../Components/CommonComponent/Footer";
import aboutImg from "../Assets/images/about.png";
import WhyUsCard from "../Components/WhyUsCard";
const About = () => {
  return (
    <>
      {/* Navbar */}
      <div>
        <Navbr />
      </div>
      {/* About Section */}
      <div
        className=" mt-5"
        style={{ marginLeft: "85px", marginRight: "85px" }}
      >
        <div className="about-section">
          <div className="row">
            <div className="col-lg-6">
              <h1>ABOUT US</h1>
              <p>
                Wedding Spot is a user-friendly online platform revolutionizing
                wedding planning by offering a seamless booking experience for
                venues. With an extensive database of diverse wedding locations,
                couples can explore and visualize potential venues through the
                website, making the decision-making process efficient and
                convenient. The platform provides detailed information, pricing,
                and virtual tours, enabling couples to plan their dream wedding
                with ease while enjoying the flexibility of online bookings.
              </p>
            </div>

            <div className="col-lg-3 offset-md-3">
              <img className="aboutImg" src={aboutImg} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <hr />
      </div>

      <div>
        <h1 className="text-center my-4 why-us-heading">Why Choose US?</h1>
        <div className="container-fluid ">
          <div className=" why-us-section">
            <div className="card-section">
              <WhyUsCard type="venues" />
              <WhyUsCard type="easy_booking" />
              <WhyUsCard type="trustworthy_platform" />
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <hr />
      </div>

      {/* Story */}
      <div
        className=" mt-5"
        style={{ marginLeft: "85px", marginRight: "85px" }}
      >
        <h1 className="text-center my-4 why-us-heading">ABOUT US</h1>
        <div className="container-fluid ">
          <div className=" why-us-section">
            <div className="card-section">
              <div className="row mb-3">
                <div className="col-lg-6">
                  <div className="story-card ">
                    <h3 className="text-center">Our Story</h3>
                    <p className="text-center">
                      Welcome to the enchanting world of The Wedding Spot. Our
                      journey began with a passion for turning dreams into
                      reality and creating unforgettable moments. At the heart
                      of our story is the celebration of love, and it all
                      started with a vision to make every wedding a unique and
                      magical experience. Founded in 2023, we embarked on a
                      mission to craft weddings that reflect the individuality
                      of each couple
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  {" "}
                  <div className="mission-card ">
                    <h3 className="text-center">Our Mission</h3>
                    <p className="text-center">
                      At The Wedding Spot, our mission is to transform your
                      wedding day into a timeless and extraordinary celebration
                      of love. We are driven by the belief that every couple
                      deserves a wedding that is a true reflection of their
                      unique story and shared dreams. We strive to be more than
                      just wedding planners, we are your partners in crafting a
                      day that encapsulates the essence of your love,
                      personality, and style
                    </p>
                  </div>
                </div>
              </div>
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

export default About;
