import React, { useEffect, useState } from "react";
import "../Assets/css/admin.css";
import DashboardImg from "../Assets/images/AdminPanel/dashboard.png";
import ServiceImg from "../Assets/images/AdminPanel/service.png";
import MsgImg from "../Assets/images/AdminPanel/messages.png";
import PaymentImg from "../Assets/images/AdminPanel/payment.png";
import ViewListImg from "../Assets/images/AdminPanel/view-list.png";
import user from "../Assets/images/AdminPanel/user.png";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";

const AdminPanel = () => {
  const [bookingData, setBookingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookinghalldata, setBookingHallData]= useState([])
  const [venues, setVenues]= useState([])

  useEffect(() => {
    fetchBookingData();
    fetchBookingDatavenues();
    venuesList();
  }, []);

  const fetchBookingData = async () => {
    try {
      const response = await fetch("http://localhost:8081/serviceorders");
      const data = await response.json();
      setBookingData(data);
      
      setLoading(false);
     
    } catch (error) {
      console.error("Error fetching booking data:", error);
      setLoading(false);
    }
  };

  const venuesList = async () => {
    try {
      const response = await fetch("http://localhost:8081/all-vendor-venues");
      const data = await response.json();
      setVenues(data); // Use data instead of response.data
      setLoading(false);
    } catch (error) {
      console.error("Error fetching booking data:", error);
      setLoading(false);
    }
  };

 

  const fetchBookingDatavenues = async () => {
    try {
      const response = await fetch("http://localhost:8081/checkoutdata");
      const data = await response.json();
      setBookingHallData(data);
      setLoading(false);
     
    } catch (error) {
      console.error("Error fetching booking hall data:", error);
      setLoading(false);
    }
  };
  console.log("hall data",bookinghalldata)

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <>
      <div>
        <div className="navbar">
          <div className="logo">
            <p>
              The <span>Wedding</span> Spot
            </p>
          </div>
        </div>

        <div className="middle-section">
          {/* Sidebar section (You can uncomment the items you want to include) */}
          <div className="siderbar">
            <div>
              <ul>
                <li>
                  <Link to="/AdminPanel">
                    <img src={DashboardImg} /> Dashboard
            
                  </Link>
                </li>
                <li>
                  <Link to="/adminservice">
                    <img src={ServiceImg} />
                    Services
                  </Link>
                </li>
                {/* <li>
                  <Link to="/adminnotify">
                    <img src={NotiImg} />
                    Notifications
                  </Link>
                  
                </li> */}
                <li>
                  <Link to="/adminmessage">
                    <img src={MsgImg} />
                    Messages
                  </Link>
                  
                </li>
                <li>
                  <Link to="/adminpayments">
                    <img src={PaymentImg} />
                    Payments
                  </Link>
                </li>
                <li>
                  <Link to="/adminvenuelist">
                    <img src={ViewListImg} />
                    Venue List
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Details section */}
          <div className="details">
            <div className="cards-section">
              {/* Venue cards (You can customize this section based on your needs) */}
              {/* ... (Your existing JSX for venue cards) ... */}

              <div className="venue-card">
                <h3>TOTAL VENUES</h3>
                <h1>{venues.length}</h1>
                <div>
                  <p>View Details</p>
                </div>
              </div>

              <div className="venue-card">
                <h3>BOOKED VENUES</h3>
                <h1>{bookinghalldata.length}</h1>
                <div>
                  <p>View Details</p>
                </div>
              </div>

              <div className="venue-card">
                <h3>Service Request</h3>
                <h1>{bookinghalldata.length}</h1>
                <div>
                  <p>View Details</p>
                </div>
              </div>

              <div className="venue-card">
                <h3>PAYMENTS</h3>
                <h1>{bookinghalldata.length+bookingData.length}</h1>
                <div>
                  <p>View Details</p>
                </div>
              </div>
            </div>

            {/* Booking details table */}
            <div
              className="container mt-5"
              style={{ width: "98%", margin: "auto" }}
            >
              <div className="row">
                <div className="col-lg-12">
                  <table className="table table-striped booking-table">
                    <thead>
                      <tr>
                        <td colSpan="5" className="B-details">
                         Service Booking Details
                        </td>
                      </tr>
                      <tr>
                        <th scope="col">Booking Date</th>
                        <th scope="col">Customer</th>
                        <th scope="col">email</th>
                        <th scope="col">Selected Service</th>
                        <th scope="col">Payment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookingData.map((booking) => (
                        // console.log("booking data",booking),
                        <tr key={booking.id}>
                          <td>{formatDate(booking.date)}</td>
                          <td>{booking.name}</td>
                          <td>{booking.email}</td>
                          <td>{booking.services}</td>
                          <td>{booking.total_price}</td>

                          {/* <td>{booking.guest}</td>
                          <td style={{ color: booking.paymentStatus === "Recieved" ? "green" : "red" }}>
                            {booking.paymentStatus}
                          </td> */}

                        </tr>
                      ))}
                    </tbody>
                  </table>


                  <table className="table table-striped booking-table">
                    <thead>
                      <tr>
                        <td colSpan="7" className="B-details">
                         Service Hall Booking Details
                        </td>
                      </tr>
                      <tr>
                        <th scope="col">Booking Date</th>
                        <th scope="col">Booking time</th>
                        <th scope="col">Customer Email</th>
                        <th scope="col">Hall Name</th>
                        <th scope="col">Hall Advance</th>
                        <th scope="col">Selected services</th>
                        <th scope="col">Payment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookinghalldata.map((booking) => (
                         console.log("booking data",booking),
                        <tr key={booking.id}>
                          <td>{formatDate(booking.date)}</td>
                          <td>{booking.time}</td>
                          <td>{booking.name}</td>
                          <td>{booking.hallName}</td>
                          <td>{booking.halladvance}</td>
                          <td>{booking.services}</td>
                          
                          <td>{booking.total_price}</td>

                          {/* <td>{booking.guest}</td>
                          <td style={{ color: booking.paymentStatus === "Recieved" ? "green" : "red" }}>
                            {booking.paymentStatus}
                          </td> */}

                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Upcoming events section */}
                {/* <div className="col-lg-4">
                  <div className="upcoming-events">
                    <div className="upcoming-event-card">
                      <h4>UPCOMING EVENTS</h4>
                      <ul>
                        <li>
                          <img src={user} /> <span>Sarim</span> <br />
                          <p>Al-Mehfil Banquet</p>
                        </li>
                        <li>
                          <img src={user} /> <span>Farrukh</span>
                          <p>Al-Mehfil Banquet</p>
                        </li>
                        <li>
                          <img src={user} /> <span>Danish</span>
                          <p>Al-Mehfil Banquet</p>
                        </li>
                        <li>
                          <img src={user} /> <span>Taimoor</span>
                          <p>Al-Mehfil Banquet</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
