import React, { useState } from "react";
import "../Assets/css/admin.css";
import DashboardImg from "../Assets/images/AdminPanel/dashboard.png";
import ServiceImg from "../Assets/images/AdminPanel/service.png";
import MsgImg from "../Assets/images/AdminPanel/messages.png";
import PaymentImg from "../Assets/images/AdminPanel/payment.png";
import ViewListImg from "../Assets/images/AdminPanel/view-list.png";
import user from "../Assets/images/AdminPanel/user.png";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminService = () => {
  const [service, setService] = useState("");
  const [packageType, setPackageType] = useState("");
  const [price, setPrice] = useState("");

  const handleEditPrice = async () => {
    const allowedServices = ["photography", "decoration", "makeup"];
    const allowedPackages = ["silver", "gold", "platinum"];
    const lowerCaseService = service.toLowerCase();
    const lowerCasePackageType = packageType.toLowerCase();

    if (!allowedServices.includes(lowerCaseService)) {
      toast.error("Please fill the service field with one of the following: photography, decoration, makeup");
      return;
    }

    if (!allowedPackages.includes(lowerCasePackageType)) {
      toast.error("Please fill the package field with one of the following: silver, gold, platinum");
      return;
    }

    try {
      // Send a PUT request to the backend API
      const response = await axios.put("http://localhost:8081/update-prices", {
        service: lowerCaseService,
        packageType: lowerCasePackageType,
        price,
      });

      if (response.data.success) {
        // Handle success (you can show a success message or update the UI)
        toast.success("Price edited successfully!");
        console.log("Price edited successfully!");
      }
    } catch (error) {
      // Handle error (show an error message or log the error)
      console.error("Error editing price:", error);
      toast.error("Error editing price:", error.message);
    }
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
                    <img src={DashboardImg} alt="Dashboard" /> Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/adminservice">
                    <img src={ServiceImg} alt="Services" />
                    Services
                  </Link>
                </li>
                {/* <li>
                  <Link to="/adminnotify">
                    <img src={NotiImg} alt="Notifications" />
                    Notifications
                  </Link>
                  
                </li> */}
                <li>
                  <Link to="/adminmessage">
                    <img src={MsgImg} alt="Messages" />
                    Messages
                  </Link>
                </li>
                <li>
                  <Link to="/adminpayments">
                    <img src={PaymentImg} alt="Payments" />
                    Payments
                  </Link>
                </li>
                <li>
                  <Link to="/adminvenuelist">
                    <img src={ViewListImg} alt="Venue List" />
                    Venue List
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <center>
            <div className="details p-3">
              <h1 style={{ padding: "10px 10px" }}>Edit Service Prices</h1>
              <label>
                Service
                <br />
                <input
                  className="form-control"
                  type="text"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                />
              </label>
              <br />
              <label>
                Package
                <br />
                <input
                  className="form-control"
                  type="text"
                  value={packageType}
                  onChange={(e) => setPackageType(e.target.value)}
                />
              </label>
              <br />
              <label>
                Price
                <br />
                <input
                  className="form-control"
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </label>
              <br />
              <button className="btn " onClick={handleEditPrice}>
                Edit Price
              </button>
            </div>
          </center>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AdminService;
