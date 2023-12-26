import React, { useState } from "react";
import Navbr from "../Components/CommonComponent/Nav";
import Footer from "../Components/CommonComponent/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Checkout = () => {
  const location = useLocation();
  const hallDetails = location.state.hallDetails;

  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState("silver");
  const [totalPrice, setTotalPrice] = useState(hallDetails.advanced);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [totalAdvance, setTotalAdvance] = useState(hallDetails.advanced);
  const prices = {
    photography: {
      silver: 3000,
      gold: 5000,
      platinum: 7000,
    },
    makeup: {
      silver: 4000,
      gold: 6000,
      platinum: 8000,
    },
    decoration: {
      silver: 2000,
      gold: 3000,
      platinum: 4000,
    },
  };

  const handleServiceChange = (service) => {
    const isSelected = selectedServices.includes(service);
    const updatedServices = isSelected
      ? selectedServices.filter((selected) => selected !== service)
      : [...selectedServices, service];

    setSelectedServices(updatedServices);

    updateTotalPrice(updatedServices, selectedPackage);
  };

  const handlePackageChange = (packageType) => {
    setSelectedPackage(packageType);
    updateTotalPrice(selectedServices, packageType);
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
  const updateTotalPrice = (services, packageType) => {
    const totalPrice = services.reduce((sum, service) => sum + prices[service][packageType], 0);
    setTotalPrice(totalPrice);
  };


  // const checkout = async () => {
  //   console.log(selectedDate);
  //   console.log(selectedTime);
  //   try {
  //     const res = await fetch("http://localhost:8081/checkout", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       mode: "cors",
  //       body: JSON.stringify({
  //         date: selectedDate,
  //         time: selectedTime,
  //         hallName: hallDetails.hallName,
  //         items: [
  //           {
  //             id: 1,
  //             price: hallDetails.advanced,
  //             name: hallDetails.hallName,
  //             quantity: 1, // Add quantity property

  //           },
  //         ],
  //       }),
  //     });
  //     const data = await res.json();

  //     // Log the session.url to check if it's set properly
  //     console.log("Session URL:", data.url);

  //     // Check if session.url is not undefined before redirecting
  //     if (data.url) {
  //       window.location = data.url;
  //     } else {
  //       console.error("Session URL is undefined.");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const checkout = async () => {
    console.log(selectedDate);
    console.log(selectedTime);

    try {
      const res = await fetch("http://localhost:8081/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({
          date: selectedDate,
          time: selectedTime,
          hallName: hallDetails.hallName,
          items: selectedServices.map((service, index) => ({
            id: index + 1, // You can use a unique identifier for each service
            price: totalPrice, // Replace with the actual price
            name: service,
            quantity: 1,
          })),
        }),
      });

      const data = await res.json();

      // Log the session.url to check if it's set properly
      console.log("Session URL:", data.url);

      // Check if session.url is not undefined before redirecting
      if (data.url) {
        window.location = data.url;
      } else {
        console.error("Session URL is undefined.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleServiceSelect = (selectedService) => {
    setSelectedServices((prevSelectedServices) => {
      if (prevSelectedServices.includes(selectedService)) {
        return prevSelectedServices.filter(
          (service) => service !== selectedService
        );
      } else {
        return [...prevSelectedServices, selectedService];
      }
    });

    setServicePackages((prevPackages) => {
      const updatedPackages = { ...prevPackages };
      updatedPackages[selectedService] = "basic"; // Set the default package to basic
      return updatedPackages;
    });
  };

  const handlePackageSelect = (service, packageType) => {
    setServicePackages((prevPackages) => ({
      ...prevPackages,
      [service]: packageType,
    }));
  };

  const calculateTotalAdvance = () => {
    let total = hallDetails.advanced;

    selectedServices.forEach((service) => {
      const basePrice = 0; // Replace with your base service price
      const packagePriceMap = {
        basic: 100, // Replace with your basic package price for the service
        premium: 200, // Replace with your premium package price for the service
        platinum: 300, // Replace with your platinum package price for the service
      };

      const selectedPackage = servicePackages[service] || "basic";
      total += basePrice + packagePriceMap[selectedPackage];
    });

    setTotalAdvance(total);
  };
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

              <div>
                <h1>Services Checkout</h1>
                <div>
                  <label>Select Services:</label>
                  <select
                    multiple
                    value={selectedServices}
                    onChange={(e) => handleServiceChange(e.target.value)}
                  >
                    <option value="photography">Photography</option>
                    <option value="makeup">Makeup</option>
                    <option value="decoration">Decoration</option>
                  </select>
                  <ul>
                    {selectedServices.map((service) => (
                      <li key={service}>
                        {service}{" "}
                        <button onClick={() => handleRemoveService(service)}>
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <label>Select Package:</label>
                  <select
                    value={selectedPackage}
                    onChange={(e) => handlePackageChange(e.target.value)}
                  >
                    <option value="silver">Silver</option>
                    <option value="gold">Gold</option>
                    <option value="platinum">Platinum</option>
                  </select>
                </div>
                <div>
                  <label>Date:</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                </div>
                <div>
                  <label>Time:</label>
                  <input
                    type="time"
                    value={selectedTime}
                    onChange={handleTimeChange}
                  />
                </div>
                
                <div>
                  <p>Total Price: ${totalPrice}</p>
                </div>
                
              </div>
            </div>
            {/* <div className="col-md-6">
              <img src="https://picsum.photos/200/300" alt="" />
            </div> */}
          </div>
          <div className="row">
            <div className="buttons">
              <button className="btn1 mb-2" onClick={checkout}>
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Checkout;
