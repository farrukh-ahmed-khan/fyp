import React,{useState, useEffect} from "react";
import "../Assets/css/halldetails.css";

import Carosel from "../Components/CommonComponent/Carosel";
import Navbr from "../Components/CommonComponent/Nav";
import Footer from "../Components/CommonComponent/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from '../AuthContext';
import { Pannellum } from "pannellum-react";
import pn1 from "../Assets/images/pn1.jpeg";

function HallDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { getUserIdFromAuthentication } = useAuth();
  const [isFavorite, setIsFavorite] = useState(false);
  const hallDetails = location.state.hallDetails;
  const handleDetailsClick = (hallDetails) => {
    navigate("/checkout", { state: { hallDetails } });
  };
  const userId = getUserIdFromAuthentication(); 
  useEffect(() => {
    // Check if the venue is in the user's favorites when component mounts
    checkFavoriteStatus();
  }, []);
  const checkFavoriteStatus = () => {
    // Fetch the user's favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    // Check if the current venue is in the favorites list for the logged-in user
    const isFavorited = favorites.some(venue => venue.userId === userId && venue.id === hallDetails.id);
    // Update the state accordingly
    setIsFavorite(isFavorited);
  };
  const handleAddFavorite = () => {
    const venueId = hallDetails.id; 
    fetch("http://localhost:8081/addFavorite", {
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

      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const existingFavoriteIndex = favorites.findIndex(venue => venue.userId === userId && venue.id === hallDetails.id);
    if (existingFavoriteIndex !== -1) {
      // Remove the venue from favorites
      favorites.splice(existingFavoriteIndex, 1);
    } else {
      // Add the venue to favorites
      favorites.push({ userId, ...hallDetails });
    }
    // Update the favorites in localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
    // Update the state to reflect the change
    setIsFavorite(!isFavorite);
  };
  return (
    <>
      <Navbr />
      <div className="image-slider">
        {/* <Carosel /> */}
{
    console.log(hallDetails)
}
        <Pannellum
          width="100%"
          height="500px"
          image={`http://localhost:8081/${hallDetails.panoramaImg}`}
          pitch={10}
          yaw={180}
          hfov={110}
          autoLoad
          author="Your Author"
          title="Your Title"
        />
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
