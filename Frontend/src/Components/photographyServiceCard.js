import React from "react";

const PhotographyServiceCard = ({ type }) => {
  let data;
  // temporay
  switch (type) {
    case "silver":
      data = {
        title: "Silver",
        point1: "1 Wedding Photograher",
        point2: "Bride & Groom Photoshoot",
        point3: "10 MATT Sheets",
        point4: "Full Event Video Coverage",
        point5: "200 Soft Copies on USB",
        btnTitle: "Book Now",
      };

      break;
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

      break;
    case "gold":
      data = {
        title: "Gold",
        point1: "2 Wedding Photograher",
        point2: "Bride & Groom Photoshoot",
        point3: "20 MATT Sheets",
        point4: "Full Event Video Coverage",
        point5: "300 Soft Copies on USB",
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

export default PhotographyServiceCard;
