import React from "react";
import { Link } from "react-router-dom";

const PhotographyCardActive = ({ type }) => {
  let data;
  // temporay
  switch (type) {
    case "platinum":
      data = {
        title: "Platinum",
        point1: "3 Wedding Photograher",
        point2: "Bride & Groom Photoshoot",
        point3: "30 MATT Sheets",
        point4: "Full Event Video Coverage",
        point5: "500 Soft Copies on USB",
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

export default PhotographyCardActive;
