import "./App.css";
import "./Assets/css/links.css";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./Pages/Gallery";
import Service from "./Pages/Service";
import VenueBooking from "./Pages/venue-booking";
import HallDetails from "./Pages/HallDetails";
import VendorForm from "./Pages/VendorForm";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/venue-booking" element={<VenueBooking />} />
          <Route path="/HallDetails" element={<HallDetails />} />
          <Route path="/VendorForm" element={<VendorForm />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
