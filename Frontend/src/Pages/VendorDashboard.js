import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbr from "../Components/CommonComponent/Nav";
import Footer from "../Components/CommonComponent/Footer";
import "../Assets/css/vendor-dashboard.css";

const VendorDashboard = () => {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const vendorData = localStorage.getItem("vendor");

    if (vendorData) {
      axios
        .get(`http://localhost:8081/vendor-venues?email=${vendorData}`)
        .then((response) => {
          setVenues(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching vendor venues:", error);
          setLoading(false);
        });
    }
  }, []);

  const handleEditVenue = (venueId) => {
    const selectedVenue = venues.find((venue) => venue.id === venueId);
    navigate(`/edit-venue/${venueId}`, { state: { venueData: selectedVenue } });
  };

  const handleDeleteVenue = async (venueId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8081/delete-venue/${venueId}`
      );

      if (response.status === 200) {
        console.log(`Venue with ID ${venueId} deleted successfully`);
        const updatedVenues = venues.filter((venue) => venue.id !== venueId);
        setVenues(updatedVenues);
      } else {
        console.error(`Failed to delete venue with ID ${venueId}`);
      }
    } catch (error) {
      console.error("Error deleting venue:", error);
    }
  };

  return (
    <div>
      <Navbr />
      <h1 className="dashboard-heading">Vendor Dashboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="vendorInfoSection">
          {venues.length > 0 ? (
            <ul className="venue-list-section">
              {venues.map((venue) => (
                <li key={venue.id} className="vendorInfoList">
                  <strong>{venue.hallName}</strong> - {venue.city}, {venue.area}
                  <br />
                  <b>Services:</b> {venue.services.join(", ")}
                  <br />
                  <b>Requirements:</b> {venue.requirements.join(", ")}
                  <br />
                  <div className="vendorBtnSection">
                    <button
                      className="vendonrEditBtn"
                      onClick={() => handleEditVenue(venue.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="vendonrDelBtn"
                      onClick={() => handleDeleteVenue(venue.id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No venues entered yet.</p>
          )}
        </div>
      )}
      <Link to="/">
        <p
          style={{
            textTransform: "uppercase",
            textAlign: "center",
            fontWeight: "600",
            color: "#6443A9",
            fontSize: "20px",
          }}
        >
          Go back to home
        </p>
      </Link>
      <Footer />
    </div>
  );
};

export default VendorDashboard;
