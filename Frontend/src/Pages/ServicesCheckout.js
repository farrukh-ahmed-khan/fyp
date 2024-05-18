import React, { useState, useEffect } from "react";
import "../Assets/css/checkout.css";
import Navbr from "../Components/CommonComponent/Nav";
import Footer from "../Components/CommonComponent/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const ServicesCheckout = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState("silver");
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [servicePrices, setServicePrices] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8081/services-prices")
      .then((response) => {
        console.log("Response Data:", response.data);
        setServicePrices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching service prices:", error);
      });
  }, []);

  const handleServiceChange = (service, selectedPackage) => {
    const isSelected = selectedServices.some(
      (selected) => selected.service === service
    );

    const updatedServices = isSelected
      ? selectedServices.filter((selected) => selected.service !== service)
      : [...selectedServices, { service, package: selectedPackage }];

    setSelectedServices(updatedServices);
    updateTotalPrice(updatedServices); // Update total price with updated services and the correct package
  };

  const handlePackageChange = (packageType) => {
    setSelectedPackage(packageType);
    updateTotalPrice(selectedServices);
  };

  const handleRemoveService = (service) => {
    const updatedServices = selectedServices.filter(
      (selected) => selected !== service
    );
    setSelectedServices(updatedServices);
    updateTotalPrice(updatedServices, selectedPackage);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    validateEmail(emailValue);
    setEmail(emailValue);
  };

  const handlePhoneChange = (e) => {
    // user can only input 11 numbers
    if (e.target.value.length > 11) return;
    setPhone(e.target.value);

    // const phoneValue = e.target.value;
    // setPhone(phoneValue);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const updateTotalPrice = (services) => {
    let totalPrice = 0;

    services.forEach(({ service, package: selectedPackage }) => {
      if (servicePrices[service] && servicePrices[service][selectedPackage]) {
        totalPrice += servicePrices[service][selectedPackage];
      }
    });

    setTotalPrice(totalPrice);
  };

  const handleSubmit = async () => {
    let isValid = true;

    if (!validateEmail(email)) {
      toast.error("Invalid email format");
      isValid = false;
    }

    if (isValid) {
      try {
        const response = await axios.post("http://localhost:8081/onlyservice", {
          date: selectedDate,
          time: selectedTime,
          selectedServices: selectedServices,
          selectedPackage: selectedPackage,
          totalPrice: totalPrice,
          address: address,
          name: name,
          email: email,
          phone: phone,
        });

        const sessionId = response.data.url;

        window.location.href = sessionId;
      } catch (err) {
        console.error(err);
        toast.error("An error occurred while processing the payment");
      }
    }
  };

  return (
    <div>
      <Navbr />

      <h1 className="service-checkout-heading mt-4">Services Checkout</h1>
      <div className="d-flex justify-content-between flex-wrap container ">
        <div>
          <label>Select Services </label>
          <br />
          <select
            multiple
            value={selectedServices.map((service) => service.service)}
            onChange={(e) =>
              handleServiceChange(e.target.value, selectedPackage)
            }
            className="service-drop-down"
          >
            <option value="photography">Photography</option>
            <option value="makeup">Makeup</option>
            <option value="decoration">Decoration</option>
          </select>
          <ul
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginTop: "10px",
            }}
          >
            {selectedServices.map((service) => (
              <li
                key={service.service} // Assuming 'service' has a unique identifier like 'id'
                className="mt-2 service-list"
                style={{ width: "100%" }}
              >
                {service.service}{" "}
                <button
                  className="btn-danger"
                  onClick={() => handleRemoveService(service)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
        <br />
        <div>
          <label>Select Package</label>
          <br />
          <select
            value={selectedPackage}
            onChange={(e) => handlePackageChange(e.target.value)}
            className="service-drop-down"
          >
            <option value="silver">Silver</option>
            <option value="gold">Gold</option>
            <option value="platinum">Platinum</option>
          </select>
        </div>{" "}
        <br />
        <div>
          <label>Date</label>
          <br />
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="service-drop-down"
          />
        </div>
        <br />
        <div>
          <label>Time</label>
          <br />
          <input
            type="time"
            value={selectedTime}
            onChange={handleTimeChange}
            className="service-drop-down"
          />
        </div>{" "}
        <hr />
      </div>

      <div className=" container d-flex justify-content-between flex-wrap mb-3">
        <div>
          <label>Address</label>
          <br />
          <input
            className="inputField"
            type="text"
            value={address}
            onChange={handleAddressChange}
            maxlength="40"
          />
        </div>
        <div>
          <label>Name</label>
          <br />
          <input
            className="inputField"
            type="text"
            value={name}
            onChange={handleNameChange}
            maxlength="30"
          />
        </div>
        <div>
          <label>Email</label> <br />
          <input
            className="inputField"
            type="email"
            value={email}
            onChange={handleEmailChange}
            maxlength="30"
          />
        </div>
        <div>
          <label>Phone</label>
          <br />
          <input
            className="inputField"
            type="number"
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
      </div>

      <div className="container">
        <div className="mt-3">
          <p style={{ fontSize: "17px" }}>
            <b>Total Price: </b>PKR {totalPrice}
          </p>
        </div>
        <button className="payBtn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default ServicesCheckout;
