import React from "react";

const MakeupServiceCard = ({ type }) => {
  let data;
  // temporay
  switch (type) {
    case "silver":
      data = {
        title: "Silver",
        point1: "Subtle Radiance",
        point2: "Effortless Radiance Products",
        point3: "Everyday Enhancement",
        point4: "Casual Event Radiance",
        point5: "Budget-Friendly Radiance",
        btnTitle: "Book Now",
      };

      break;
    case "gold":
      data = {
        title: "Gold",
        point1: "Personalized Radiance",
        point2: "Premium Radiance Products",
        point3: "Glamorous Radiance Lashes",
        point4: "Radiant Special Occasions",
        point5: "Elegant Radiance Fix Kit",
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

export default MakeupServiceCard;
