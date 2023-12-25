import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Assets/css/form.css";
import "../Assets/css/vendorForm.css";
import { Form, Button, Row, Col, Navbar } from "react-bootstrap";
import Navbr from "../Components/CommonComponent/Nav";
import Footer from "../Components/CommonComponent/Footer";

const HallVendorForm = () => {
  // const [vendorData, setVendorData] = useState({
  //   name: "",
  //   email: "",
  //   phoneNumber: "",
  //   minPrice: "",
  //   maxPrice: "",
  //   additionalDetails: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setVendorData({ ...vendorData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", vendorData);
  // };

  const [vendorData, setVendorData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    minPrice: "",
    maxPrice: "",
    address: "",
    capacity: "",
    advancepayment:"",
    additionalDetails: "",
  });

  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedRequirements, setSelectedRequirements] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendorData({ ...vendorData, [name]: value });
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
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...vendorData,
        services: selectedServices,
        requirements: selectedRequirements,
      }),
    };

    try {
      // const response = await fetch('/vendorform', requestOptions);
      // const response = await fetch('http://localhost:your-server-port/vendorform', requestOptions);

      const response = await fetch('http://localhost:8081/vendorform', requestOptions);


      if (response.ok) {
        const result = await response.json();
        console.log('Form submitted successfully! Vendor ID:', result.vendorId);
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

  return (
    <>
      <Navbr />
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
                  <label htmlFor="advancepayment">Advance Payment</label>
                  <input
                    type="number"
                    name="advancepayment"
                    id="advancepayment"
                    className="form-control"
                    placeholder="Enter your advance payment"
                    onChange={handleChange}
                    required
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
                            value=""
                            id="defaultCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="defaultCheck1"
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
                            value=""
                            id="defaultCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="defaultCheck1"
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
                            id="defaultCheck11"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="defaultCheck11"
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
                            id="defaultCheck12"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="defaultCheck12"
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
                            id="defaultCheck13"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="defaultCheck13"
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
                            id="defaultCheck14"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="defaultCheck14"
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
                            value="Amplified music OK indoors only"
                            id="defaultCheck14"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="defaultCheck14"
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
                            value=""
                            id="defaultCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="defaultCheck1"
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
                            value=""
                            id="defaultCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="defaultCheck1"
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
                Submit
              </Button>
            </div>
          </Form>
        </div>

        {/* <Link to="/">Go back to home</Link> */}
      </div>

      <Footer />
    </>
  );
};

export default HallVendorForm;
