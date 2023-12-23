import React from "react";
import "../Assets/css/admin.css";
import DashboardImg from "../Assets/images/AdminPanel/dashboard.png";
import ServiceImg from "../Assets/images/AdminPanel/service.png";
import NotiImg from "../Assets/images/AdminPanel/notification.png";
import MsgImg from "../Assets/images/AdminPanel/messages.png";
import PaymentImg from "../Assets/images/AdminPanel/payment.png";
import ViewListImg from "../Assets/images/AdminPanel/view-list.png";
import user from "../Assets/images/AdminPanel/user.png";

const AdminPanel = () => {
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
          <div className="siderbar">
            <div>
              <ul>
                <li>
                  <a href="#">
                    <img src={DashboardImg} /> Dashboard
                  </a>
                </li>
                {/* <li>
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
                </li> */}
              </ul>
            </div>
          </div>
          <div className="details">
            <div className="cards-section">
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

            <div
              className="container mt-5"
              style={{ width: "98%", margin: "auto" }}
            >
              <div className="row">
                <div className="col-lg-8">
                  <table class="table table-striped booking-table">
                    <thead>
                      <tr>
                        <td colspan="5" className="B-details">
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
                      <tr>
                        <td scope="row">12/12/2023</td>
                        <td>Mark</td>
                        <td>Al-Mehfil</td>
                        <td>400</td>
                        <td style={{ color: "green" }}>Recieved</td>
                      </tr>
                      <tr>
                        <td scope="row">12/12/2023</td>
                        <td>Jacob</td>
                        <td>Al-Mehfil</td>
                        <td>400</td>
                        <td style={{ color: "green" }}>Recieved</td>
                      </tr>
                      <tr>
                        <td scope="row">12/12/2023</td>
                        <td>Larry</td>
                        <td>Al-Mehfil</td>
                        <td>400</td>
                        <td style={{ color: "red" }}>Pending</td>
                      </tr>
                      <tr>
                        <td scope="row">12/12/2023</td>
                        <td>Smith</td>
                        <td>Al-Mehfil</td>
                        <td>600</td>
                        <td style={{ color: "red" }}>Pending</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

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
