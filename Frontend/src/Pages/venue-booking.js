import React from "react";
import "../Assets/css/home.css";
import "../Assets/css/venue-booking.css";
import { useState } from "react";

import Carosel from "../Components/CommonComponent/Carosel";
import Navbr from "../Components/CommonComponent/Nav";
import Footer from "../Components/CommonComponent/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const HallData = [
  {
    hallName: "AL-Mehfil Banquet",
    img: "https://img.freepik.com/free-photo/prepared-wedding-hall_8353-9873.jpg",
    city: "Karachi",
    area: "North Nazimabad",
    price: "5000",
    maxPrice: "10000",
    guests: "100",
    rating: "4.5",
    phone: "021-3663-0000",
    guests: "100",
    // shotDesc:
    //   "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem. North Nazimabad,karachi,Pakistan. 'AL-mehfil Banquet ' is ideal for weddings, corporate dinners, private dinners and AL-mehfil banquet ' is ideal for all types of summer and winter events",
    services: [
      "Bride Dressing Area",
      "Dance Floor",
      "Groom's Dressing Area",
      "Public Parking",
      "Tables & Chairs Provided",
      "Kitchen's for serve only",
    ],
    requirements: [
      "A permit is required for any open flame (candles, cooking, sterno, etc.)",
      "A permit is required for events with 200+ people",
      "Meal must be served by licensed caterer",
      "Amplified music OK indoors only",
      "Approved outside caterer allowed",
      "General liability insurance required",
      "Music must end by 11:00PM",
    ],
  },
  {
    hallName: "Jhumar Banquet",
    img: "https://img.freepik.com/free-photo/prepared-wedding-hall_8353-9873.jpg",
    city: "Karachi",
    area: "Sakhia Hassan",
    price: "5000",
    maxPrice: "30000",
    guests: "200",
    rating: "3.5",
    phone: "021-3663-869856",
    guests: "200",
    // shotDesc:
    //   "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem. North Nazimabad,karachi,Pakistan. 'AL-mehfil Banquet ' is ideal for weddings, corporate dinners, private dinners and AL-mehfil banquet ' is ideal for all types of summer and winter events",
  },
  {
    hallName: "casabinca Banquet",
    img: "https://img.freepik.com/free-photo/prepared-wedding-hall_8353-9873.jpg",
    city: "Karachi",
    area: "Gulshan-e-Iqbal",
    price: "5000",
    maxPrice: "10000",
    guests: "100",
    rating: "2.5",
    phone: "021-3663-xxxx",
    guests: "100",
    // shotDesc:
    //   "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem. North Nazimabad,karachi,Pakistan. 'AL-mehfil Banquet ' is ideal for weddings, corporate dinners, private dinners and AL-mehfil banquet ' is ideal for all types of summer and winter events",
  },

  {
    hallName: "Unique Banquet",
    img: "https://img.freepik.com/free-photo/prepared-wedding-hall_8353-9873.jpg",
    city: "Karachi",
    area: "Gulshan-e-Iqbal",
    price: "5000",
    maxPrice: "10000",
    guests: "100",
    rating: "4.5",
    phone: "021-3663-980000",
    guests: "100",
    // shotDesc:
    //   "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem. North Nazimabad,karachi,Pakistan. 'AL-mehfil Banquet ' is ideal for weddings, corporate dinners, private dinners and AL-mehfil banquet ' is ideal for all types of summer and winter events",
  },
  {
    hallName: "Royal Banquet",
    img: "https://img.freepik.com/free-photo/prepared-wedding-hall_8353-9873.jpg",
    city: "Karachi",
    area: "Gulberg",
    price: "5000",
    maxPrice: "10000",
    guests: "100",
    rating: "4.5",
    phone: "021-3663-0000",
    guests: "500",
    // shotDesc:
    //   "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem. North Nazimabad,karachi,Pakistan. 'AL-mehfil Banquet ' is ideal for weddings, corporate dinners, private dinners and AL-mehfil banquet ' is ideal for all types of summer and winter events",
  },
];
const VenueBooking = () => {
  const navigate = useNavigate();
  const handleDetailsClick = (hallDetails) => {
    navigate("/HallDetails", { state: { hallDetails } });
  };
  const [City, setCity] = useState("");
  const [Area, setArea] = useState("");
  const [Price, setPrice] = useState("");
  const [MaxPrice, setMaxPrice] = useState("");
  const [Guests, setGuests] = useState("");
  const [filteredData, setFilteredData] = useState(HallData);
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Update the corresponding state variable based on the input's name attribute
    if (name === "city") setCity(value);
    if (name === "area") setArea(value);
    if (name === "price") setPrice(value);
    if (name === "maxPrice") setMaxPrice(value);
    if (name === "guests") setGuests(value);
  };
  const handleSearch = () => {
    console.log("searching");
    const newFilteredData = HallData.filter((item) => {
      return (
        (City === "" || item.city.toLowerCase() === City.toLowerCase()) &&
        (Area === "" || item.area.toLowerCase() === Area.toLowerCase()) &&
        (Price === "" || item.price <= parseInt(Price)) &&
        (MaxPrice === "" || item.maxPrice >= parseInt(MaxPrice)) &&
        (Guests === "" || item.guests >= parseInt(Guests))
      );
    });

    setFilteredData(newFilteredData);
  };

  return (
    <div className="home-page">
      <Navbr />
      {/* <div className="image-slider">
        <Carosel />
      </div> */}
      <div class="hero-section">
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
                            <option>Karachi</option>
                            <option>Karachi</option>
                            <option>Karachi</option>
                          </select>
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
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="inp-wrapper">
                          <h4 style={{ marginTop: "10px" }}>Price</h4>
                          <div className="range-inp-wrapper">
                            <input
                              name="price"
                              value={Price}
                              onChange={handleChange}
                              placeholder="Min Price"
                              type="text"
                              className="form-control"
                            />
                            <p>-</p>
                            <input
                              name="maxPrice"
                              value={MaxPrice}
                              onChange={handleChange}
                              placeholder="Max Price"
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="inp-wrapper">
                          <h4> Guests</h4>
                          <input
                            name="guests"
                            value={Guests}
                            onChange={handleChange}
                            placeholder="Min Guests"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="search-btn">
                    <button className="btn " onClick={handleSearch}>
                      Search Venues
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row mb-5">
                {filteredData.map((item) => (
                  <div className="col-md-12 mb-3">
                    <div className="banq-cards-wrapper">
                      <div className="banq-card">
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="hall-img-wrapper">
                              <img src={item.img} />
                            </div>
                          </div>
                          <div className="col-lg-8">
                            <div className=" banq-card-content">
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
                                      {item.price} - {item.maxPrice}
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
      </div>
      <div className="foot">
        <Footer />
      </div>
    </div>
  );
};

export default VenueBooking;
