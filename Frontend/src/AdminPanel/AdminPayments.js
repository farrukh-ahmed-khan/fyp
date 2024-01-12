import React, { useEffect, useState } from "react";
import "../Assets/css/admin.css";
import DashboardImg from "../Assets/images/AdminPanel/dashboard.png";
import ServiceImg from "../Assets/images/AdminPanel/service.png";
import NotiImg from "../Assets/images/AdminPanel/notification.png";
import MsgImg from "../Assets/images/AdminPanel/messages.png";
import PaymentImg from "../Assets/images/AdminPanel/payment.png";
import ViewListImg from "../Assets/images/AdminPanel/view-list.png";
import user from "../Assets/images/AdminPanel/user.png";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";

const AdminPayments = () => {
  const [bookingData, setBookingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookinghalldata, setBookingHallData]= useState([])

  useEffect(() => {
    fetchBookingData();
    fetchBookingDatavenues();
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
                <li>
                  <Link to="/adminnotify">
                    <img src={NotiImg} />
                    Notifications
                  </Link>
                  
                </li>
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
                        <th scope="col">Selected Service</th>
                        <th scope="col">Package</th>
                        <th scope="col">Payment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookingData.map((booking) => (
                        <tr key={booking.id}>
                          <td>{formatDate(booking.date)}</td>
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


                  <table className="table table-striped booking-table">
                    <thead>
                      <tr>
                        <td colSpan="7" className="B-details">
                         Service Booking Details
                        </td>
                      </tr>
                      <tr>
                        <th scope="col">Booking Date</th>
                        <th scope="col">Booking time</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Hall Name</th>
                        <th scope="col">Capacity</th>
                        <th scope="col">Payment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookinghalldata.map((booking) => (
                        <tr key={booking.id}>
                          <td>{formatDate(booking.date)}</td>
                          <td>{booking.time}</td>
                          <td>{booking.name}</td>
                          <td>{booking.hallName}</td>
                          <td>{booking.halladvance}</td>
                          
                          <td>{booking.finalPrice}</td>

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
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPayments;
