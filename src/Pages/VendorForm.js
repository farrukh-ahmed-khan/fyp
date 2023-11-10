import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Assets/css/form.css";
import { Form, Button, Row, Col } from "react-bootstrap";

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
    <div className="container mt-5">
      <h1>Hall Vendor Form</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={vendorData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={vendorData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="phoneNumber"
                value={vendorData.phoneNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formMinPrice">
              <Form.Label>Minimum Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter minimum price"
                name="minPrice"
                value={vendorData.minPrice}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formMaxPrice">
              <Form.Label>Maximum Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter maximum price"
                name="maxPrice"
                value={vendorData.maxPrice}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="formAdditionalDetails">
          <Form.Label>Additional Details</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter additional details"
            name="additionalDetails"
            value={vendorData.additionalDetails}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Link to="/">Go back to home</Link>
    </div>
  );
};

export default HallVendorForm;
