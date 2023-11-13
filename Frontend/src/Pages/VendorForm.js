import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Assets/css/form.css";
import "../Assets/css/vendorForm.css";
import { Form, Button, Row, Col, Navbar } from "react-bootstrap";
import Navbr from "../Components/CommonComponent/Nav";
import Footer from "../Components/CommonComponent/Footer";

const HallVendorForm = () => {
  const [vendorData, setVendorData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    minPrice: "",
    maxPrice: "",
    additionalDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendorData({ ...vendorData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", vendorData);
    // You can add logic to send data to a backend or perform other actions
  };

  return (
    <>
    <Navbr/>
      <div class="hero-section">
        <h1>Join as Vendor</h1>
      </div>
      <div className="container my-5 d-flex justify-content-center align-item-center">
        <div className="banner-form">

        <Form onSubmit={handleSubmit}>
        <h1 className="heading">Fill The Form</h1>
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
                    required
                  />  
                </div>
              </div>
              <div className="col-md-6">
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
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="form-control"
                    placeholder="Enter your phone number"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="minPrice">Minimum Price</label>
                  <input
                    type="number"
                    name="minPrice"
                    id="minPrice"
                    className="form-control"
                    placeholder="Enter your minimum price"
                    onChange={handleChange}
                    required
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
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="form-control"
                    placeholder="Enter your address"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="capacity">Capacity</label>
                  <input
                    type="number"
                    name="capacity"
                    id="capacity"
                    className="form-control"
                    placeholder="Enter your capacity"
                    onChange={handleChange}
                    required
                    />
                </div>
              </div>
              <div className="col-md-6">
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
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="additionalDetails">Additional Details</label>
                  <textarea name="" id="" placeholder="Enter Short Description"></textarea>
                </div>
              </div>
            </div>
            <div className="btn-wrapper">
          <Button variant="" type="submit">
            Submit
          </Button>
            </div>
        </Form>
        </div>

        {/* <Link to="/">Go back to home</Link> */}
      </div>

      <Footer/>
    </>
  );
};

export default HallVendorForm;
