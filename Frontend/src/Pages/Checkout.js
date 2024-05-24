import React, { useState, useEffect } from "react";
import Navbr from "../Components/CommonComponent/Nav";
import Footer from "../Components/CommonComponent/Footer";
import "../Assets/css/checkout.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Checkout = () => {
  const location = useLocation();
  const hallDetails = location.state.hallDetails;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState("silver");
  const [totalPrice, setTotalPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [totalAdvance, setTotalAdvance] = useState(hallDetails.advanced);
  const [servicePrices, setServicePrices] = useState({});
  console.log(hallDetails)
  // const prices = {
  //   photography: {
  //     silver: 3000,
  //     gold: 5000,
  //     platinum: 7000,
  //   },
  //   makeup: {
  //     silver: 4000,
  //     gold: 6000,
  //     platinum: 8000,
  //   },
  //   decoration: {
  //     silver: 2000,
  //     gold: 3000,
  //     platinum: 4000,
  //   },
  // };
  // try {
    //   const res = await fetch("http://localhost:8081/checkout", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     mode: "cors",
    //     body: JSON.stringify({
    //       date: selectedDate,
    //       time: selectedTime,
    //       hallName: hallDetails.hallName,
    //       items: selectedServices.map((service, index) => ({
    //         id: index + 1,
    //         price:
    //           prices[service][selectedPackage] +
    //           (index === 0 ? hallDetails.advanced : 0),
    //         name: service,
    //         quantity: 1,
    //       })),
    //       package: selectedPackage,
    //       halladvance: hallDetails.advanced,
    //       finalPrice: finalPrice,
    //       name: name,
    //       email: email,
    //       phone: phone,
    //     }),
    //   });

    //   const data = await res.json();

    //   if (data.error) {
    //     console.error("Error in server response:", data.error);
    //     return;
    //   }

    //   console.log("Session URL:", data.url);
    //   console.log("Received orderId:", data.orderId);

    //   if (data.url) {
    //     window.location = data.url;
    //   } else {
    //     console.error("Session URL is undefined.");
    //   }
    // } catch (err) {
    //   console.error("Error during checkout:", err);
    // }
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

  // const handleAddressChange = (e) => {
  //   setAddress(e.target.value);
  // };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    validateEmail(emailValue);
    setEmail(emailValue);
  };

  const handlePhoneChange = (e) => {
    const phoneValue = e.target.value;
    setPhone(phoneValue);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
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
    setFinalPrice(totalPrice + hallDetails.advanced);
  };

  const checkout = async () => {
    console.log(selectedDate);
    console.log(selectedTime);

    
  };

  const handleSubmit = async () => {
    let isValid = true;
  
    if (!validateEmail(email)) {
      toast.error("Invalid email format");
      isValid = false;
    }
  
    if (isValid) {
      try {
        const response = await axios.post("http://localhost:8081/checkout", {
          date: selectedDate,
          time: selectedTime,
          hallName: hallDetails.hallName,
          hallId: hallDetails.id,
          hallAdvance: hallDetails.advanced,
          selectedServices: selectedServices,
          selectedPackage: selectedPackage,
          totalPrice: finalPrice,
          name: name,
          email: email,
          phone: phone,
          vendoremail: hallDetails.email,  // Pass vendor email
        });
  
        const sessionId = response.data.url; 
        window.location.href = sessionId; 
      } catch (err) {
        console.error(err);
        toast.error("An error occurred while processing the payment");
      }
    }
  };
  

  // ... (your other component code)

  return (
    <>
      <Navbr />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading my-5">
                <h1>{hallDetails.hallName}</h1>
                <p>
                  {hallDetails.city} | {hallDetails.area} | {hallDetails.phone}
                </p>
              </div>

              <div className="services-section">
                <h3 className="fw-bold">Amenties & Requirement</h3>
                <div className="services">
                  {hallDetails.services.map((service) => {
                    return <p>{service}</p>;
                  })}
                </div>
              </div>

              <div className="requirement-section">
                <h3 className="fw-bold">Requirements</h3>
                <ul>
                  {hallDetails.requirements.map((req) => {
                    return <li> • {req}</li>;
                  })}
                </ul>
              </div>

              <div className="capacity">
                <h3 className="fw-bold">
                  Venue Capacity: <span>{hallDetails.guests}</span>
                </h3>
              </div>
              <hr />

              <div>
                <h1 className="service-checkout-heading">Services Checkout</h1>

                <div className="d-flex justify-content-between flex-wrap">
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
                  </div>
                </div>
                <br />
                <div className=" d-flex justify-content-between flex-wrap mb-3">
                  <div>
                    <label>Name</label>
                    <br />
                    <input
                      className="inputField"
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </div>
                  <div>
                    <label>Email</label> <br />
                    <input
                      className="inputField"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div>
                    <label>Phone</label>
                    <br />
                    <input
                      className="inputField"
                      type="tel"
                      value={phone}
                      onChange={handlePhoneChange}
                    />
                  </div>
                </div>

                <div className="service-price">
                  <div>
                    <p>
                      <b>Total service Price:</b> {totalPrice}
                    </p>
                  </div>
                  <div>
                    <p>
                      <b>Hall Advance:</b> {totalAdvance}
                    </p>
                  </div>
                  <div>
                    <p>
                      <b>Final Price:</b> {finalPrice}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6">
              <img src="https://picsum.photos/200/300" alt="" />
            </div> */}
          </div>
          <div className="row">
            <div>
              <button className="payBtn" onClick={handleSubmit}>
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Checkout;
