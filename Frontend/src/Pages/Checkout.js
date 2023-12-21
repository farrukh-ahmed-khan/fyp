import React, { useState } from "react";
import Navbr from "../Components/CommonComponent/Nav";
import Footer from "../Components/CommonComponent/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Checkout = () => {
  const location = useLocation();
  const hallDetails = location.state.hallDetails;
  console.log("chekc", hallDetails);
  // const itemName = "Product 1";
  // const itemPrice = 1000;
  // const [quantity, setQuantity] = useState(1);

  // const checkout = async() => {
  //   try{
  //     const res = await fetch('http://localhost:8081/checkout', {
  //       method: "POST",
  //       headers: {

  //         "Content-Type": "application/json"
  //       },
  //       mode: "cors",
  //       body: JSON.stringify({
  //         items:[
  //           {
  //             id: 1,
  //             quantity: quantity,
  //             price: itemPrice,
  //             name: itemName

  //           },
  //         ]
  //       })

  //     });
  //     const data = await res.json();
  //     window.location = data.url;

  //   }
  //   catch(err){
  //     console.log(err);
  //   }
  // }

  const [selectedServices, setSelectedServices] = useState([]);
  const [servicePackages, setServicePackages] = useState({});
  const [totalAdvance, setTotalAdvance] = useState(hallDetails.advanced);

  const handleServiceSelect = (selectedService) => {
    setSelectedServices((prevSelectedServices) => {
      if (prevSelectedServices.includes(selectedService)) {
        return prevSelectedServices.filter((service) => service !== selectedService);
      } else {
        return [...prevSelectedServices, selectedService];
      }
    });

    setServicePackages((prevPackages) => {
      const updatedPackages = { ...prevPackages };
      updatedPackages[selectedService] = 'basic'; // Set the default package to basic
      return updatedPackages;
    });
  };

  const handlePackageSelect = (service, packageType) => {
    setServicePackages((prevPackages) => ({ ...prevPackages, [service]: packageType }));
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

      const selectedPackage = servicePackages[service] || 'basic';
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
            <div className="col-md-6">
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
                  Venue Capacity: <span>Upto 400</span>
                </h3>
              </div>

              {/* <div className="services-section">
                <h3>Additional Services</h3>
                <div className="services">
                  <input type="checkbox" />
                  <label>Photography</label>
                  <br />
                  <input type="checkbox" />
                  <label>Decoration</label>
                  <br />
                  <input type="checkbox" />
                  <label>Make Up</label>
                </div>
              </div> */}
              <div className="services-section">
                <h3>Additional Services</h3>
                <div className="services">
                  <label>
                    <select
                      onChange={(e) => {
                        handleServiceSelect(e.target.value);
                        calculateTotalAdvance();
                      }}
                    >
                      <option value="" disabled selected>
                        Select Service
                      </option>
                      <option value="Photography">Photography</option>
                      {/* Add more service options as needed */}
                    </select>
                  </label>
                  {selectedServices.map((service) => (
                    <div key={service} className="package-options">
                      <label>
                        Select Package:{" "}
                        <select
                          onChange={(e) => {
                            handlePackageSelect(service, e.target.value);
                            calculateTotalAdvance();
                          }}
                        >
                          <option value="basic">Basic</option>
                          <option value="premium">Premium</option>
                          <option value="platinum">Platinum</option>
                        </select>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="select-event-date">
                <h3>Select Event Date</h3>
                <input type="date" />
              </div>
              <div className="select-evening-morning">
                <h3>Select Morning/Evening</h3>
                <select>
                  <option value="morning">Morning</option>
                  <option value="evening">Evening</option>
                </select>
              </div>

              <div className="capacity my-5">
                <h3>
                  Advance: <span>{totalAdvance}</span>
                </h3>
              </div>
            </div>
            <div className="col-md-6">
              <img src="https://picsum.photos/200/300" alt="" />
            </div>
          </div>
          <div className="row">
            <div className="buttons">
              <button className="btn1">Pay Now</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Checkout;
