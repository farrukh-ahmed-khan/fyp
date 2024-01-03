import React, { useEffect, useState } from "react";
import "../Assets/css/admin.css";
import DashboardImg from "../Assets/images/AdminPanel/dashboard.png";
import ServiceImg from "../Assets/images/AdminPanel/service.png";
import NotiImg from "../Assets/images/AdminPanel/notification.png";
import MsgImg from "../Assets/images/AdminPanel/messages.png";
import PaymentImg from "../Assets/images/AdminPanel/payment.png";
import ViewListImg from "../Assets/images/AdminPanel/view-list.png";
import user from "../Assets/images/AdminPanel/user.png";

const AdminPanel = () => {
  const [bookingData, setBookingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookinghalldata, setBookingHallData]= useState([])

  useEffect(() => {
    fetchBookingData();
    // fetchBookingDatavenues();
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
                  <a href="#">
                    <img src={DashboardImg} /> Dashboard
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={ServiceImg} />
                    Services
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={NotiImg} />
                    Notifications
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={MsgImg} />
                    Messages
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={PaymentImg} />
                    Payments
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={ViewListImg} />
                    Venue List
                  </a>
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
                <h1>72</h1>
                <div>
                  <p>View Details</p>
                </div>
              </div>

              <div className="venue-card">
                <h3>BOOKED VENUES</h3>
                <h1>43</h1>
                <div>
                  <p>View Details</p>
                </div>
              </div>

              <div className="venue-card">
                <h3>CANCELLATIONS</h3>
                <h1>4</h1>
                <div>
                  <p>View Details</p>
                </div>
              </div>

              <div className="venue-card">
                <h3>PENDING PAYMENTS</h3>
                <h1>10</h1>
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
                <div className="col-lg-8">
                  <table className="table table-striped booking-table">
                    <thead>
                      <tr>
                        <td colSpan="5" className="B-details">
                          Booking Details
                        </td>
                      </tr>
                      <tr>
                        <th scope="col">Booking Date</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Venue Booked</th>
                        <th scope="col">Guest</th>
                        <th scope="col">Payment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookingData.map((booking) => (
                        <tr key={booking.id}>
                          <td>{booking.date}</td>
                          <td>{booking.name}</td>
                          <td>{booking.selectedServices}</td>
                          <td>{booking.selectedPackage}</td>
                          <td>{booking.totalPrice}</td>

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
                <div className="col-lg-4">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
