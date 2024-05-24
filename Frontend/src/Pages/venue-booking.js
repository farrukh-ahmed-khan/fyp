import React, { useState, useEffect } from "react";
import "../Assets/css/home.css";
import "../Assets/css/venue-booking.css";
import Navbr from "../Components/CommonComponent/Nav";
import Footer from "../Components/CommonComponent/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const VenueBooking = () => {
  const navigate = useNavigate();
  const [HallData, setHallData] = useState([]);
  const [recommendFilteredData, setRecommendFilteredData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [City, setCity] = useState("");
  const [Area, setArea] = useState("");
  const [Price, setPrice] = useState("");
  const [Guests, setGuests] = useState("");

  useEffect(() => {
    fetch("http://localhost:8081/getvendorforms")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.text();
      })
      .then((data) => {
        try {
          const jsonData = JSON.parse(data);
          setHallData(jsonData);
          setFilteredData(jsonData);
        } catch (parseError) {
          console.error("Error parsing JSON:", parseError);
        }
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
      });
  }, []);

  const fetchRecommendations = (price) => {
    fetch(`http://localhost:8081/recommendations?maxPrice=${price}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setRecommendFilteredData(data);
        localStorage.setItem("recommendedHalls", JSON.stringify(data));
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
      });
  };

  const handleDetailsClick = (hallDetails) => {
    if (recommendFilteredData.length === 0) {
      fetchRecommendations(hallDetails.maxPrice);
    }
    navigate("/HallDetails", { state: { hallDetails, vendorId: hallDetails.vendorId } });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "city") setCity(value);
    if (name === "area") setArea(value);
    if (name === "price") setPrice(value);
    if (name === "guests") setGuests(value);
  };

  const searchByArea = () => {
    const newFilteredData = HallData.filter((item) => {
      return Area === "" || item.area.toLowerCase() === Area.toLowerCase();
    });

    setFilteredData(newFilteredData);
  };

  const searchByCity = () => {
    const newFilteredData = HallData.filter((item) => {
      return City === "" || item.city.toLowerCase() === City.toLowerCase();
    });

    setFilteredData(newFilteredData);
  };

  const searchByPrice = () => {
    const newFilteredData = HallData.filter((item) => {
      return Price === "" || item.price <= parseInt(Price);
    });

    setFilteredData(newFilteredData);
  };

  const searchByGuests = () => {
    const newFilteredData = HallData.filter((item) => {
      return Guests === "" || item.guests >= parseInt(Guests);
    });

    setFilteredData(newFilteredData);
  };

  useEffect(() => {
    const storedRecommendations = JSON.parse(localStorage.getItem("recommendedHalls"));
    if (storedRecommendations) {
      setRecommendFilteredData(storedRecommendations);
    }
  }, []);

  return (
    <div className="home-page">
      <Navbr />
      <div className="hero-section">
        <h1>Venue Booking</h1>
      </div>
      <div className="page-content">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <div className="search-filter-wrapper">
                <div className="head">
                  <h2>Wedding Hall</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="row">
                <div className="search-filter-wrapper">
                  <div className="inputs-wrapper">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="inp-wrapper">
                          <h4>City</h4>
                          <select
                            className="form-control"
                            name="city"
                            value={City}
                            onChange={handleChange}
                            placeholder="City"
                          >
                            <option>Karachi</option>
                          </select>
                          <button className="btn " onClick={searchByCity}>
                            Search by City
                          </button>
                        </div>
                        <div className="inp-wrapper">
                          <h4>Area</h4>
                          <select
                            name="area"
                            value={Area}
                            onChange={handleChange}
                            placeholder="Area"
                            className="form-control"
                          >
                            <option>Gulshan</option>
                            <option>Sakhia Hassan</option>
                            <option>Gulberg</option>
                            <option>Gulshan-e-Iqbal</option>
                          </select>
                          <button className="btn " onClick={searchByArea}>
                            Search by Area
                          </button>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="inp-wrapper">
                          <h4 style={{ marginTop: "10px" }}>Price</h4>
                          <div className="inp-wrapper mb-5">
                            <input
                              name="price"
                              value={Price}
                              onChange={handleChange}
                              placeholder="Min Price"
                              type="text"
                              className="form-control"
                            />
                            <button className="btn " onClick={searchByPrice}>
                              Search by Price
                            </button>
                          </div>
                        </div>
                        <div className="inp-wrapper mb-5">
                          <h4> Guests</h4>
                          <input
                            name="guests"
                            value={Guests}
                            onChange={handleChange}
                            placeholder="Min Guests"
                            type="text"
                            className="form-control"
                          />
                          <button className="btn " onClick={searchByGuests}>
                            Search by Guests
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row mb-5">
                {filteredData.map((item, index) => (
                  <div className="col-md-12 mb-3" key={item.id}>
                    <div className="banq-cards-wrapper">
                      <div className="banq-card">
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="hall-img-wrapper">
                              <img src="https://img.freepik.com/free-photo/prepared-wedding-hall_8353-9873.jpg" alt="Hall" />
                            </div>
                          </div>
                          <div className="col-lg-8">
                            <div className="banq-card-content">
                              <div className="row d-flex align-items-center">
                                <div className="col-lg-8">
                                  <div className="hall-heading">
                                    <h4>{item.hallName}</h4>
                                  </div>
                                </div>
                                <div className="col-lg-4 d-flex justify-content-end">
                                  <div className="rating">
                                    <p>{item.rating}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-5">
                                  <div className="hall-address">
                                    <div className="icon-wrapper">
                                      <FontAwesomeIcon
                                        icon={faLocationDot}
                                        style={{
                                          color: "#5C3D9E",
                                          fontSize: "20px",
                                        }}
                                      />
                                      <span>
                                        {item.city}, {item.area}
                                      </span>
                                    </div>
                                    <div className="icon-wrapper">
                                      <FontAwesomeIcon
                                        icon={faPhone}
                                        style={{
                                          color: "#5C3D9E",
                                          fontSize: "20px",
                                        }}
                                      />
                                      <span>{item.phone}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-7">
                                  <div className="hall-price">
                                    <p>
                                      <span>Price Range:</span>
                                      {item.minPrice} - {item.maxPrice}
                                    </p>
                                  </div>
                                  <div className="guest-cap">
                                    <p>
                                      <span>Guests Capacity:</span>
                                      {item.guests}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="short-desc">
                                  <p>{item.shotDesc}</p>
                                </div>
                              </div>
                              <div className="banq-card-btn">
                                <button
                                  className="det-btn"
                                  onClick={() => handleDetailsClick(item)}
                                >
                                  View Details
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {recommendFilteredData.length > 0 && (
                <div className="row mb-5">
                  <div className="col-md-12">
                    <div className="search-filter-wrapper">
                      <div className="head">
                        <h2>Recommendations</h2>
                      </div>
                      <div className="body">
                        {recommendFilteredData.map((item) => (
                          <div className="col-md-12 mb-3" key={item.id}>
                            <div className="banq-cards-wrapper">
                              <div className="banq-card">
                                <div className="row">
                                  <div className="col-lg-4">
                                    <div className="hall-img-wrapper">
                                      <img src="https://img.freepik.com/free-photo/prepared-wedding-hall_8353-9873.jpg" alt="Hall" />
                                    </div>
                                  </div>
                                  <div className="col-lg-8">
                                    <div className="banq-card-content">
                                      <div className="row d-flex align-items-center">
                                        <div className="col-lg-8">
                                          <div className="hall-heading">
                                            <h4>{item.hallName}</h4>
                                          </div>
                                        </div>
                                        <div className="col-lg-4 d-flex justify-content-end">
                                          <div className="rating">
                                            <p>{item.rating}</p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-lg-5">
                                          <div className="hall-address">
                                            <div className="icon-wrapper">
                                              <FontAwesomeIcon
                                                icon={faLocationDot}
                                                style={{
                                                  color: "#5C3D9E",
                                                  fontSize: "20px",
                                                }}
                                              />
                                              <span>
                                                {item.city}, {item.area}
                                              </span>
                                            </div>
                                            <div className="icon-wrapper">
                                              <FontAwesomeIcon
                                                icon={faPhone}
                                                style={{
                                                  color: "#5C3D9E",
                                                  fontSize: "20px",
                                                }}
                                              />
                                              <span>{item.phone}</span>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-7">
                                          <div className="hall-price">
                                            <p>
                                              <span>Price Range:</span>
                                              {item.minPrice} - {item.maxPrice}
                                            </p>
                                          </div>
                                          <div className="guest-cap">
                                            <p>
                                              <span>Guests Capacity:</span>
                                              {item.guests}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-12">
                                        <div className="short-desc">
                                          <p>{item.shotDesc}</p>
                                        </div>
                                      </div>
                                      <div className="banq-card-btn">
                                        <button
                                          className="det-btn"
                                          onClick={() => handleDetailsClick(item)}
                                        >
                                          View Details
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="foot">
        <Footer />
      </div>
    </div>
  );
};

export default VenueBooking;
