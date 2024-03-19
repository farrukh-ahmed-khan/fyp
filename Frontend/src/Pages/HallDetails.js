import React,{useState} from "react";
import "../Assets/css/halldetails.css";

import Carosel from "../Components/CommonComponent/Carosel";
import Navbr from "../Components/CommonComponent/Nav";
import Footer from "../Components/CommonComponent/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";

function HallDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const hallDetails = location.state.hallDetails;
  const handleDetailsClick = (hallDetails) => {
    navigate("/checkout", { state: { hallDetails } });
  };

  const handleAddFavorite = () => {
    // Send a request to the backend to add the venue to favorites
    // You need to pass userId and venueId in the request body
    // You can get userId from your authentication system or from the state
    const userId = getUserIdFromAuthentication(); // Implement this function
    const venueId = hallDetails.id; // Assuming there is an id property in hallDetails
    fetch("/addFavorite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, venueId }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Update state or show a success message to the user
        setIsFavorite(true);
      })
      .catch((error) => {
        console.error("Error adding favorite:", error);
        // Handle error or show error message to the user
      });
  };
  return (
    <>
      <Navbr />
      <div className="image-slider">
        <Carosel />
      </div>
      <div className="container">
        <div className="heading " style={{marginTop: "150px",}}>
          <h1>{hallDetails.hallName}</h1>
          <p>
            {hallDetails.city} | {hallDetails.area} | {hallDetails.phone}
          </p>
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
            Venue Capacity: <span>{hallDetails.guests}</span>
          </h3>
        </div>

        <div className="buttons">
          <button
            className="btn1"
            onClick={() => handleDetailsClick(hallDetails)}
          >
            Book Now
          </button>

          <button className="btn2" onClick={handleAddFavorite} disabled={isFavorite}>
            {isFavorite ? "Added to Favorites" : "Add to Favorites"}
          </button>
        </div>

        <div className="location-section mb-3">
          <h3>Venue Location</h3>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.671921781032!2d67.0461785742498!3d24.94324404194211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3408030039581%3A0x5787d44ab04d6226!2sAl-Mehmil%20Banquet%20Hall!5e0!3m2!1sen!2s!4v1699361799157!5m2!1sen!2s"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mb-5 mt-2"
          /> */}
          <span>
            {hallDetails.city} | {hallDetails.area}
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HallDetails;
