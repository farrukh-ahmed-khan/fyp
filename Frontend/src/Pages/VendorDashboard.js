import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbr from '../Components/CommonComponent/Nav';
import Footer from '../Components/CommonComponent/Footer';

const VendorDashboard = () => {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const vendorData = JSON.parse(localStorage.getItem('vendor'));

    if (vendorData) {
      axios
        .get(`http://localhost:8081/vendor-venues?email=${vendorData.email}`)
        .then((response) => {
          setVenues(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching vendor venues:', error);
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
      const response = await axios.delete(`http://localhost:8081/delete-venue/${venueId}`);

      if (response.status === 200) {
        console.log(`Venue with ID ${venueId} deleted successfully`);
        const updatedVenues = venues.filter((venue) => venue.id !== venueId);
        setVenues(updatedVenues);
      } else {
        console.error(`Failed to delete venue with ID ${venueId}`);
      }
    } catch (error) {
      console.error('Error deleting venue:', error);
    }
  };

  return (
    <div>
      <Navbr />
      <h1>Vendor Dashboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {venues.length > 0 ? (
            <ul>
              {venues.map((venue) => (
                <li key={venue.id}>
                  <strong>{venue.hallName}</strong> - {venue.city}, {venue.area}
                  <br />
                  Services: {venue.services.join(', ')}
                  <br />
                  Requirements: {venue.requirements.join(', ')}
                  <br />
                  <button onClick={() => handleEditVenue(venue.id)}>Edit</button>
                  <button onClick={() => handleDeleteVenue(venue.id)}>Delete</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No venues entered yet.</p>
          )}
        </div>
      )}
      <Link to="/">Go back to home</Link>
      <Footer />
    </div>
  );
};

export default VendorDashboard;
