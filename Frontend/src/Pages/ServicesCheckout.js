import React, { useState } from 'react';
import Navbr from '../Components/CommonComponent/Nav';
import Footer from '../Components/CommonComponent/Footer';
import axios from 'axios';

const ServicesCheckout = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState('silver');
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');


  const prices = {
    photography: {
      silver: 3000,
      gold: 5000,
      platinum: 7000,
    },
    makeup: {
      silver: 4000,
      gold: 6000,
      platinum: 8000,
    },
    decoration: {
      silver: 2000,
      gold: 3000,
      platinum: 4000,
    },
  };

  const handleServiceChange = (service) => {
    const isSelected = selectedServices.includes(service);
    const updatedServices = isSelected
      ? selectedServices.filter((selected) => selected !== service)
      : [...selectedServices, service];

    setSelectedServices(updatedServices);
    updateTotalPrice(updatedServices, selectedPackage);
  };

  const handlePackageChange = (packageType) => {
    setSelectedPackage(packageType);
    updateTotalPrice(selectedServices, packageType);
  };

  const handleRemoveService = (service) => {
    const updatedServices = selectedServices.filter((selected) => selected !== service);
    setSelectedServices(updatedServices);
    updateTotalPrice(updatedServices, selectedPackage);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const updateTotalPrice = (services, packageType) => {
    const totalPrice = services.reduce((sum, service) => sum + prices[service][packageType], 0);
    setTotalPrice(totalPrice);
  };

  
  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8081/onlyservice", {
        date: selectedDate,
        time: selectedTime,
        selectedServices: selectedServices,
        selectedPackage: selectedPackage,
        totalPrice: totalPrice,
        address: address,
        name: name,
        email: email,
        phone: phone,
      });
  
      const data = response.data;
  
      console.log("Session URL:", data.url);
  
      if (data.url) {
        window.location = data.url;
      } else {
        console.error("Session URL is undefined.");
      }
    } catch (err) {
      console.error(err);
    }
  };
  

  return (
    <div>
        <Navbr/>
      <h1>Services Checkout</h1>
      <div>
        <label>Select Services:</label>
        <select
          multiple
          value={selectedServices}
          onChange={(e) => handleServiceChange(e.target.value)}
        >
          <option value="photography">Photography</option>
          <option value="makeup">Makeup</option>
          <option value="decoration">Decoration</option>
        </select>
        <ul>
          {selectedServices.map((service) => (
            <li key={service}>
              {service}{' '}
              <button onClick={() => handleRemoveService(service)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <label>Select Package:</label>
        <select value={selectedPackage} onChange={(e) => handlePackageChange(e.target.value)}>
          <option value="silver">Silver</option>
          <option value="gold">Gold</option>
          <option value="platinum">Platinum</option>
        </select>
      </div>
      <div>
        <label>Date:</label>
        <input type="date" value={selectedDate} onChange={handleDateChange} />
      </div>
      <div>
        <label>Time:</label>
        <input type="time" value={selectedTime} onChange={handleTimeChange} />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" value={address} onChange={handleAddressChange} />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>Phone:</label>
        <input type="tel" value={phone} onChange={handlePhoneChange} />
      </div>
      <div>
        <p>Total Price: ${totalPrice}</p>
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <Footer/>
    </div>
  );
};

export default ServicesCheckout;
