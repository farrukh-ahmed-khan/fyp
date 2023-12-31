import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation  } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Navbr from '../Components/CommonComponent/Nav';
import Footer from '../Components/CommonComponent/Footer';

const EditVenue = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve venue data from location state
  const { venueData: initialVenueData } = location.state || {};
  console.log(initialVenueData)

  // Set initial state with venue data if available
  const [venueData, setVenueData] = useState({
    name: initialVenueData?.name || '',
    hallName: initialVenueData?.hallName || '',
    city: initialVenueData?.city || '',
    area: initialVenueData?.area || '',
    maxPrice: initialVenueData?.maxPrice || '',
    price: initialVenueData?.price || '',
    guests: initialVenueData?.guests || '',
    rating: initialVenueData?.rating || '',
    phone: initialVenueData?.phone || '',
    advanced: initialVenueData?.advanced || '',
    additionalDetails: initialVenueData?.additionalDetails || '',
  });

  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedRequirements, setSelectedRequirements] = useState([]);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setVenueData({ ...venueData, [name]: value });
  };

  const handleServiceChange = (e) => {
    const serviceName = e.target.value;
    setSelectedServices((prevServices) =>
      e.target.checked ? [...prevServices, serviceName] : prevServices.filter((service) => service !== serviceName)
    );
  };

  const handleRequirementChange = (e) => {
    const requirementName = e.target.value;
    setSelectedRequirements((prevRequirements) =>
      e.target.checked
        ? [...prevRequirements, requirementName]
        : prevRequirements.filter((requirement) => requirement !== requirementName)
    );
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: venueData.name,
        hallName: venueData.hallName,
        city: venueData.city,
        area: venueData.area,
        maxPrice: venueData.maxPrice,
        price: venueData.price,
        guests: venueData.guests,
        rating: venueData.rating,
        phone: venueData.phone,
        advanced: venueData.advanced,
        additionalDetails: venueData.additionalDetails,
        services: selectedServices,
        requirements: selectedRequirements,
      }),
    };
  
    try {
      const response = await fetch(`http://localhost:8081/edit-venue/${id}`, requestOptions);
  
      if (response.ok) {
        console.log('Venue updated successfully!');
        navigate('/vendor-dashboard'); // Redirect to vendor dashboard after successful edit
      } else {
        console.error('Error updating venue:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating venue:', error.message);
    }
  };
  

  return (
    <>
      <Navbr />
      <div className="container my-5 d-flex justify-content-center align-item-center">
        <div className="banner-form">
          <Form onSubmit={handleSubmit}>
            <h1 className="heading">Edit Venue</h1>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Enter your name"
                    onChange={handleChange}
                    
                  />
                </div>
              </div>
              {/* <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div> */}
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="form-control"
                    placeholder="Enter your phone number"
                    onChange={handleChange}
                    
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="hallName">Hall Name</label>
                  <input
                    type="text"
                    name="hallName"
                    id="hallName"
                    className="form-control"
                    placeholder="Enter your Hall Name"
                    onChange={handleChange}
                    
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="price">Minimum Price</label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="form-control"
                    placeholder="Enter your minimum price"
                    onChange={handleChange}
                    
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="maxPrice">Maximum Price</label>
                  <input
                    type="number"
                    name="maxPrice"
                    id="maxPrice"
                    className="form-control"
                    placeholder="Enter your maximum price"
                    onChange={handleChange}
                    
                  />
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="area">Area</label>
                  <input
                    type="text"
                    name="area"
                    id="area"
                    className="form-control"
                    placeholder="Enter your address"
                    onChange={handleChange}
                    
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="form-control"
                    placeholder="Enter your address"
                    onChange={handleChange}
                    
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="guests">Capacity</label>
                  <input
                    type="number"
                    name="guests"
                    id="guests"
                    className="form-control"
                    placeholder="Enter your guests capacity"
                    onChange={handleChange}
                    
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="rating">Rating</label>
                  <input
                    type="text"
                    name="rating"
                    id="rating"
                    className="form-control"
                    placeholder="Enter your google rating"
                    onChange={handleChange}
                    
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="advanced">Advance Payment</label>
                  <input
                    type="number"
                    name="advanced"
                    id="advanced"
                    className="form-control"
                    placeholder="Enter your advance amount"
                    onChange={handleChange}
                    
                  />
                </div>
              </div>
              
              {/* <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="type">Image</label>
                  <input
                    type="file"
                    name="type"
                    id="type"
                    className="form-control"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div> */}
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="additionalDetails">Additional Details</label>
                  <textarea
                    name="additionalDetails"
                    id="additionalDetails"
                    placeholder="Enter Short Description"
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="additionalDetails">Overview</label>
                  <textarea
                    name=""
                    id=""
                    placeholder="Enter Short Description"
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <div className="service-wrapper">
                    <h3>Services</h3>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Bride Dressing Area"
                            id="brideDressingArea"
                            onChange={handleServiceChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="defaultCheck1"
                          >
                            Bride Dressing Area
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Dance Floor"
                            id="dancefloor"
                            onChange={handleServiceChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="defaultCheck1"
                          >
                            Dance Floor
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Groom Dressing Area"
                            id="groomdressingarea"
                            onChange={handleServiceChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="defaultCheck1"
                          >
                            Groom's Dressing Area
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Tables & Chairs Provide"
                            id="TablesChairsProvide"
                            onChange={handleServiceChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="TablesChairsProvide"
                          >
                            Tables & Chairs Provided
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Kitchenforserveonly"
                            id="Kitchenforserveonly"
                            onChange={handleServiceChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="Kitchenforserveonly"
                          >
                            Kitchen's for serve only
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <div className="service-wrapper">
                    <h3>Requirements</h3>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="A permit is required for any open flame"
                            id="Apermitisrequiredforanyopenflame"
                            onChange={handleRequirementChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="Apermitisrequiredforanyopenflame"
                          >
                            A permit is required for any open flame
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="A permit is required for events with 200+ people"
                            id="apermitisrequiredforeventswith200people"
                            onChange={handleRequirementChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="apermitisrequiredforeventswith200people"
                          >
                            A permit is required for events with 200+ people
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Meal must be served by licensed caterer"
                            id="Mealmustbeservedbylicensedcaterer"
                            onChange={handleRequirementChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="Mealmustbeservedbylicensedcaterer"
                          >
                            Meal must be served by licensed caterer
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Amplified music OK indoors only"
                            id="AmplifiedmusicOKindoorsonly"
                            onChange={handleRequirementChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="AmplifiedmusicOKindoorsonly"
                          >
                            Amplified music OK indoors only
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Approved outside caterer allowed"
                            id="Approvedoutsidecatererallowed"
                            onChange={handleRequirementChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="Approvedoutsidecatererallowed"
                          >
                            Approved outside caterer allowed
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="General liability insurance required"
                            id="Generalliabilityinsurancerequired"
                            onChange={handleRequirementChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="Generalliabilityinsurancerequired"
                          >
                            General liability insurance required
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Music must end by 11:00PM"
                            id="Musicmustendby11:00PM"
                            onChange={handleRequirementChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="Musicmustendby11:00PM"
                          >
                            Music must end by 11:00PM
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-wrapper">
              <Button variant="" type="submit">
                Save Changes
              </Button>
              <Link to="/vendor-dashboard">Cancel</Link>
            </div>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditVenue;
