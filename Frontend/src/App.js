import "./App.css";
import "./Assets/css/links.css";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Gallery from "./Pages/Gallery";
import Service from "./Pages/Service";
import VenueBooking from "./Pages/venue-booking";
import HallDetails from "./Pages/HallDetails";
import VendorForm from "./Pages/VendorForm";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import ThankYouPage from "./Pages/Thankyou";
import Vendorlogin from "./Pages/vendorLogin";
import VendorSignup from "./Pages/vendorSignup";
import Checkout from "./Pages/Checkout";
import Success from "./Pages/Success";
import AdminPanel from "./AdminPanel/AdminPanel";
import VendorDashboard from "./Pages/VendorDashboard";
import ProtectedRoutes from "./ProtectedRoute";
import ServicesCheckout from "./Pages/ServicesCheckout";
import EditVenue from "./Pages/EditVenue";
import AdminMessages from "./AdminPanel/AdminMessages";
import AdminNotify from "./AdminPanel/AdminNotify";
import AdminService from "./AdminPanel/AdminService";
import AdminPayment from "./AdminPanel/AdminPayments";
import AdminVenue from "./AdminPanel/AdminVenueList";

function App() {
  const isAuth = localStorage.getItem("user") !== null;
  const isAuth2 = localStorage.getItem("vendor") !== null;
  console.log(isAuth);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={isAuth ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={isAuth ? <Navigate to="/" /> : <Signup />}
          />
          <Route
            path="/Vendorlogin"
            element={isAuth2 ? <Navigate to="/" /> : <Vendorlogin />}
          />
          <Route
            path="/VendorSignup"
            element={isAuth2 ? <Navigate to="/" /> : <VendorSignup />}
          />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/venue-booking" element={<VenueBooking />} />
          <Route path="/HallDetails" element={<HallDetails />} />
          <Route path="/VendorForm" element={<VendorForm />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Thankyou" element={<ThankYouPage />} />
          <Route path="/servicecheckout" element={<ServicesCheckout />} />
          <Route
            path="/vendordashboard"
            element={isAuth2 ? <VendorDashboard /> : <Navigate to="/" />}
          />
          <Route path="/edit-venue/:id" element={<EditVenue />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/AdminPanel" element={<AdminPanel />} />
          <Route path="/adminmessage" element={<AdminMessages />} />
          <Route path="/adminnotify" element={<AdminVenue />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
