import React from "react";

const DecorationServiceCard = ({ type }) => {
  let data;
  // temporay
  switch (type) {
    case "silver":
      data = {
        title: "Silver",
        point1: "Simple Elegance",
        point2: "Essential Elegance Elements",
        point3: "Event-Ready Elegance",
        point4: "Budget-Friendly Elegance",
        point5: "Effortless Elegance Setup",
        btnTitle: "Book Now",
      };

      break;
    case "gold":
      data = {
        title: "Gold",
        point1: "Customized Elegance",
        point2: "Premium Elegance Elements",
        point3: "Glamorous Highlights",
        point4: "Special Occasion Elegance",
        point5: "Comprehensive Experience",
        btnTitle: "Book Now",
      };

      break;
    default:
      break;
  }
  return (
    <div className="card shadow">
      <ul>
        <li className="pack">{data.title}</li>
        <li className="bottom-bar">{data.point1}</li>
        <li className="bottom-bar">{data.point2}</li>
        <li className="bottom-bar">{data.point3}</li>
        <li className="bottom-bar">{data.point4}</li>
        <li className="bottom-bar">{data.point5}</li>
        <li>
          <button className="btn">{data.btnTitle}</button>
        </li>
      </ul>
    </div>
  );
};

export default DecorationServiceCard;
