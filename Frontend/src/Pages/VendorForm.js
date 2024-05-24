import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Assets/css/form.css";
import "../Assets/css/vendorForm.css";
import img from "../Assets/images/Home_images/vendor-form.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbr from "../Components/CommonComponent/Nav";
import Footer from "../Components/CommonComponent/Footer";

const HallVendorForm = () => {
  const storedData = localStorage.getItem("vendor");
  console.log(storedData)

  const navigate = useNavigate();

  const initialEmail = storedData;

  const [vendorData, setVendorData] = useState({
    name: "",
    email: storedData,
    hallName: "",
    city: "",
    area: "",
    maxPrice: "",
    minPrice: "",
    guests: "",
    rating: "",
    phone: "",
    advanced: "",
    additionalDetails: "",
    image: null, // Added field for image
    panoramaImage: null // Added field for panorama image
  });

  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedRequirements, setSelectedRequirements] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setVendorData({ ...vendorData, [name]: value });
  };



  const handleServiceChange = (e) => {
    const serviceName = e.target.value;
    setSelectedServices((prevServices) =>
      e.target.checked
        ? [...prevServices, serviceName]
        : prevServices.filter((service) => service !== serviceName)
    );
    console.log(selectedServices); // Add this line to check the value of selectedServices
  };
  

  const handleRequirementChange = (e) => {
    const requirementName = e.target.value;
    setSelectedRequirements((prevRequirements) =>
      e.target.checked
        ? [...prevRequirements, requirementName]
        : prevRequirements.filter(
            (requirement) => requirement !== requirementName
          )
    );
  };

  const handleImageChange = (e) => {
    setVendorData({ ...vendorData, image: e.target.files[0] });
  };

  const handlePanoramaImageChange = (e) => {
    setVendorData({ ...vendorData, panoramaImage: e.target.files[0] });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       ...vendorData,
  //       services: selectedServices,
  //       requirements: selectedRequirements,
  //     }),
  //   };

  //   try {
  //     const response = await fetch(
  //       "http://localhost:8081/vendorform",
  //       requestOptions
  //     );

  //     if (response.ok) {
  //       const result = await response.json();
  //       console.log("Form submitted successfully! Vendor ID:", result.vendorId);

  //       // Show toast and clear the form
  //       toast.success("Form submitted successfully!");
  //       setVendorData({
  //         name: "",
  //         email: initialEmail,
  //         hallName: "",
  //         city: "",
  //         area: "",
  //         maxPrice: "",
  //         minPrice: "",
  //         guests: "",
  //         rating: "",
  //         phone: "",
  //         advanced: "",
  //         additionalDetails: "",
  //       });
  //       setSelectedServices([]);
  //       setSelectedRequirements([]);

  //       navigate("/vendordashboard");
  //     } else {
  //       console.error("Error submitting form:", response.statusText);
  //       toast.error("Error submitting form. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error.message);
  //     toast.error("Error submitting form. Please try again.");
  //   }
  // };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Create FormData object to send files
  //   const formData = new FormData();
  //   formData.append('image', vendorData.image);
  //   formData.append('panoramaImage', vendorData.panoramaImage);

  //   // Add other form data
  //   formData.append('name', vendorData.name);
  //   formData.append('email', vendorData.email);
  //   formData.append('hallName', vendorData.hallName);
  //   formData.append('city', vendorData.city);
  //   formData.append('area', vendorData.area);
  //   formData.append('maxPrice', vendorData.maxPrice);
  //   formData.append('minPrice', vendorData.minPrice);
  //   formData.append('guests', vendorData.guests);
  //   formData.append('rating', vendorData.rating);
  //   formData.append('phone', vendorData.phone);
  //   formData.append('advanced', vendorData.advanced);
  //   formData.append('additionalDetails', vendorData.additionalDetails);
  //   formData.append('services', JSON.stringify(selectedServices));
  //   formData.append('requirements', JSON.stringify(selectedRequirements));

  //   try {
  //     const response = await fetch(
  //       "http://localhost:8081/vendorform",
  //       {
  //         method: "POST",
  //         body: formData
  //       }
  //     );

  //     if (response.ok) {
  //       const result = await response.json();
  //       console.log("Form submitted successfully! Vendor ID:", result.vendorId);

  //       // Show toast and clear the form
  //       toast.success("Form submitted successfully!");
  //       setVendorData({
  //         name: "",
  //         email: initialEmail,
  //         hallName: "",
  //         city: "",
  //         area: "",
  //         maxPrice: "",
  //         minPrice: "",
  //         guests: "",
  //         rating: "",
  //         phone: "",
  //         advanced: "",
  //         additionalDetails: "",
  //         image: null,
  //         panoramaImage: null
  //       });
  //       setSelectedServices([]);
  //       setSelectedRequirements([]);

  //       navigate("/vendordashboard");
  //     } else {
  //       console.error("Error submitting form:", response.statusText);
  //       toast.error("Error submitting form. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error.message);
  //     toast.error("Error submitting form. Please try again.");
  //   }
  // };
  
  const handleSubmit = async (e) => {
  e.preventDefault();

  // Ensure advance payment is greater than 5000
  if (parseInt(vendorData.advanced) <= 5000) {
    toast.error("Advance payment must be greater than 5000");
    return;
  }

  // Ensure minimum price is greater than 5000
  if (parseInt(vendorData.minPrice) <= 5000) {
    toast.error("Minimum price must be greater than 5000");
    return;
  }

  // Ensure minimum price is less than maximum price
  if (parseInt(vendorData.minPrice) >= parseInt(vendorData.maxPrice)) {
    toast.error("Minimum price must be less than maximum price");
    return;
  }

  // Create FormData object to send files
  const formData = new FormData();
  formData.append("image", vendorData.image);
  formData.append("panoramaImage", vendorData.panoramaImage);

  // Add other form data
  formData.append("name", vendorData.name);
  formData.append("email", vendorData.email);
  formData.append("hallName", vendorData.hallName);
  formData.append("city", vendorData.city);
  formData.append("area", vendorData.area);
  formData.append("maxPrice", vendorData.maxPrice);
  formData.append("minPrice", vendorData.minPrice);
  formData.append("guests", vendorData.guests);
  formData.append("rating", vendorData.rating);
  formData.append("phone", vendorData.phone);
  formData.append("advanced", vendorData.advanced);
  formData.append("additionalDetails", vendorData.additionalDetails);
  formData.append("services", JSON.stringify(selectedServices));
  formData.append(
    "requirements",
    JSON.stringify(selectedRequirements)
  );

  try {
    const response = await fetch("http://localhost:8081/vendorform", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Form submitted successfully! Vendor ID:", result.vendorId);

      // Show toast and clear the form
      toast.success("Form submitted successfully!");
      setVendorData({
        name: "",
        email: initialEmail,
        hallName: "",
        city: "",
        area: "",
        maxPrice: "",
        minPrice: "",
        guests: "",
        rating: "",
        phone: "",
        advanced: "",
        additionalDetails: "",
        image: null,
        panoramaImage: null,
      });
      setSelectedServices([]);
      setSelectedRequirements([]);

      navigate("/vendordashboard");
    } else {
      console.error("Error submitting form:", response.statusText);
      toast.error("Error submitting form. Please try again.");
    }
  } catch (error) {
    console.error("Error submitting form:", error.message);
    toast.error("Error submitting form. Please try again.");
  }
};

  
  return (
    <>
      <Navbr />

      <div className="container my-5 d-flex justify-content-center align-item-center">
        <div className="banner-form">
          <form onSubmit={handleSubmit}>
            <h1 className="heading">Add Venue</h1>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Enter your name"
                    onChange={handleChange}
                    required
                    maxLength={30}
                  />
                </div>
              </div>
              {/* <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div> */}
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    className="form-control"
                    placeholder="Enter your phone number"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="image">Image</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="form-control"
                  onChange={handleImageChange}
                  required
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="panoramaImage">Panorama Image</label>
                <input
                  type="file"
                  name="panoramaImage"
                  id="panoramaImage"
                  className="form-control"
                  onChange={handlePanoramaImageChange}
                  required
                />
              </div>
            </div>


              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="hallName">Hall Name</label>
                  <input
                    type="text"
                    name="hallName"
                    id="hallName"
                    className="form-control"
                    placeholder="Enter your Hall Name"
                    onChange={handleChange}
                    required
                    maxLength={30}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="minPrice">Minimum Price</label>
                  <input
                    type="number"
                    name="minPrice"
                    id="minPrice"
                    className="form-control"
                    placeholder="Enter your minimum minPrice"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="maxPrice">Maximum Price</label>
                  <input
                    type="number"
                    name="maxPrice"
                    id="maxPrice"
                    className="form-control"
                    placeholder="Enter your maximum minPrice"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="area">Area</label>
                  <input
                    type="text"
                    name="area"
                    id="area"
                    className="form-control"
                    placeholder="Enter your area"
                    onChange={handleChange}
                    required
                    maxLength={10}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="form-control"
                    placeholder="Enter your City"
                    onChange={handleChange}
                    required
                    maxLength={10}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="guests">Capacity</label>
                  <input
                    type="number"
                    name="guests"
                    id="guests"
                    className="form-control"
                    placeholder="Enter your guests capacity"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="rating">Rating</label>
                  <input
                    type="text"
                    name="rating"
                    id="rating"
                    className="form-control"
                    placeholder="Enter your google rating"
                    onChange={handleChange}
                    required
                    maxLength={6}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="advanced">Advance Payment</label>
                  <input
                    type="number"
                    name="advanced"
                    id="advanced"
                    className="form-control"
                    placeholder="Enter your advance amount"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="type">Image</label>
                  <input
                    type="file"
                    name="type"
                    id="type"
                    className="form-control"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div> */}
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="additionalDetails">Additional Details</label>
                  <textarea
                    name="additionalDetails"
                    id="additionalDetails"
                    placeholder="Enter Short Description"
                    onChange={handleChange}
                    maxLength={150}
                  ></textarea>
                </div>
              </div>
              {/* <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="additionalDetails">Overview</label>
                  <textarea
                    name=""
                    id=""
                    placeholder="Enter Short Description"
                  ></textarea>
                </div>
              </div> */}
              <div className="col-md-12">
                <div className="form-group">
                  <div className="service-wrapper">
                    <h3>Services</h3>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Bride Dressing Area"
                            name="brideDressingArea" 
                            id="brideDressingArea"
                            onChange={handleServiceChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="defaultCheck1"
                          >
                            Bride Dressing Area
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Dance Floor"
                            id="dancefloor"
                            onChange={handleServiceChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="defaultCheck1"
                          >
                            Dance Floor
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Groom Dressing Area"
                            id="groomdressingarea"
                            onChange={handleServiceChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="defaultCheck1"
                          >
                            Groom's Dressing Area
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Tables & Chairs Provide"
                            id="TablesChairsProvide"
                            onChange={handleServiceChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="TablesChairsProvide"
                          >
                            Tables & Chairs
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Kitchenforserveonly"
                            id="Kitchenforserveonly"
                            onChange={handleServiceChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="Kitchenforserveonly"
                          >
                            Kitchen Service
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <div className="service-wrapper">
                    <h3>Requirements</h3>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="A permit is required for any open flame"
                            id="Apermitisrequiredforanyopenflame"
                            onChange={handleRequirementChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="Apermitisrequiredforanyopenflame"
                          >
                            A permit is required for any open flame
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="A permit is required for events with 200+ people"
                            id="apermitisrequiredforeventswith200people"
                            onChange={handleRequirementChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="apermitisrequiredforeventswith200people"
                          >
                            A permit is required for events with 200+ people
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Meal must be served by licensed caterer"
                            id="Mealmustbeservedbylicensedcaterer"
                            onChange={handleRequirementChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="Mealmustbeservedbylicensedcaterer"
                          >
                            Meal must be served by licensed caterer
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Amplified music OK indoors only"
                            id="AmplifiedmusicOKindoorsonly"
                            onChange={handleRequirementChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="AmplifiedmusicOKindoorsonly"
                          >
                            Amplified music
                          </label>
                        </div>
                      </div>
                      {/* <div className="col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Approved outside caterer allowed"
                            id="Approvedoutsidecatererallowed"
                            onChange={handleRequirementChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="Approvedoutsidecatererallowed"
                          >
                            Approved outside caterer allowed
                          </label>
                        </div>
                      </div> */}
                      <div className="col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="General liability insurance required"
                            id="Generalliabilityinsurancerequired"
                            onChange={handleRequirementChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="Generalliabilityinsurancerequired"
                          >
                            General liability insurance required
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Music must end by 11:00PM"
                            id="Musicmustendby11:00PM"
                            onChange={handleRequirementChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="Musicmustendby11:00PM"
                          >
                            Music must end by 11:00PM
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="btn-wrapper">
              <button variant="" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* <Link to="/">Go back to home</Link> */}
        <ToastContainer />
      </div>

      <Footer />
    </>
  );
};

export default HallVendorForm;
