import "./App.css";
import "./Assets/css/links.css";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/CommonComponent/Footer";
import MakeUpDecoration from "./Components/CommonComponent/MakeUpDecoration";
import GalleryButton from "./Components/GalleryButton";
import HowWeWork from "./Components/HowWeWork";
import ShortGallery from "./Components/ShortGallery";
import Gallery from "./Pages/Gallery";
import Calender from "./Components/Calender";
import Service from "./Pages/Service";
import ReservedTheDate from "./Components/CommonComponent/ReservedTheDate";
import HomeCard from "./Components/HomeCard";
import VenueBooking from "./Pages/venue-booking";
import HallDetails from "./Pages/HallDetails";

function App() {
  return (
    <>
      {/* <ReservedTheDate/> */}
      {/* <Service/> */}
      {/* <Calender/> */}
      {/* <Gallery/> */}
      {/* <GalleryButton/> */}
      {/* <MakeUpDecoration/> */}
      {/* <Footer /> */}
      {/* <HowWeWork/> */}
      {/* <ShortGallery/> */}
      {/* <HomeCard /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/venue-booking" element={<VenueBooking />} />
          <Route path="/HallDetails" element={<HallDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
