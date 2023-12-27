// VendorDashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbr from '../Components/CommonComponent/Nav';
import Footer from '../Components/CommonComponent/Footer';

const VendorDashboard = () => {
    const [venues, setVenues] = useState([]);
  
    useEffect(() => {
      const vendorData = JSON.parse(localStorage.getItem('vendor'));
  
      if (vendorData) {
        axios
          .get(`http://localhost:8081/vendor-venues?email=${vendorData.email}`)
          .then((response) => {
            setVenues(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.error('Error fetching vendor venues:', error);
          });
      }
    }, []);
  
    return (
      <div>
        <Navbr />
        <h1>Vendor Dashboard</h1>
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
                </li>
              ))}
            </ul>
          ) : (
            <p>No venues entered yet.</p>
          )}
        </div>
        <Link to="/">Go back to home</Link>
        <Footer />
      </div>
    );
  };
  
  export default VendorDashboard;