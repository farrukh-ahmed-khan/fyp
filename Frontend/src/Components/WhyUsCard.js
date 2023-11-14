import React from "react";
import "../Assets/css/whyuscard.css";
import whycard_img1 from "../Assets/images/whycard-image1.png";
import whycard_img2 from "../Assets/images/whycard-image2.png";
import whycard_img3 from "../Assets/images/whycard-image3.png";

const WhyUsCard = ({ type }) => {
  let data;
  // temporay
  switch (type) {
    case "venues":
      data = {
        img: (
          <img src={whycard_img1} style={{ height: "80px", width: "80px" }} />
        ),
        title: "Wide Variety of Venues",
        description:
          "Discover a diverse range of venues to suit every occasion. From elegant batnquet halls to trendy event spaces, we offer a curated selection of venues to make your event truly special.",
      };

      break;
    case "easy_booking":
      data = {
        img: (
          <img src={whycard_img2} style={{ height: "80px", width: "80px" }} />
        ),
        title: "Easy Booking",
        description:
          "Experience a hassle-free booking process with our user-friendly platform. Navigate through our intuitive interface and secure your ideal venue in just a few clicks. Booking events has never been this simple.",
      };

      break;
    case "trustworthy_platform":
      data = {
        img: (
          <img src={whycard_img3} style={{ height: "80px", width: "80px" }} />
        ),
        title: "Trustworthy Platform",
        description:
          "Experience a hassle-free booking process with our user-friendly platform. Navigate through our intuitive interface and secure your ideal venue in just a few clicks. Booking events has never been this simple.",
      };

      break;
    default:
      break;
  }
  return (
    <div className="card">
      <div className="card-description">
        <div className="image-portion">{data.img}</div>
        <div className="service-portion">
          <p>{data.title}</p>
        </div>
        <div className="service-description">
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsCard;
