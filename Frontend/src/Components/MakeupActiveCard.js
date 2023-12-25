import React from "react";
import { Link } from "react-router-dom";

const MakeupActiveCard = ({ type }) => {
  let data;
  // temporay
  switch (type) {
    case "platinum":
      data = {
        title: "Platinum",
        point1: "VIP Radiance Consultation",
        point2: "Exquisite Radiance Products",
        point3: "Exclusive Radiance Artist",
        point4: "Luxurious Full-Day Radiance",
        point5: "Elegant Radiance Gift Set",
        btnTitle: "Book Now",
      };

    default:
      break;
  }
  return (
    <div className="card active">
      <ul>
        <li className="pack text-white">{data.title}</li>
        <li className="bottom-bar">{data.point1}</li>
        <li className="bottom-bar">{data.point2}</li>
        <li className="bottom-bar">{data.point3}</li>
        <li className="bottom-bar">{data.point4}</li>
        <li className="bottom-bar">{data.point5}</li>
        <Link to="/servicecheckout">
        <li>
          <button className="btn active-btn">{data.btnTitle}</button>
        </li>
        </Link>
      </ul>
    </div>
  );
};

export default MakeupActiveCard;
