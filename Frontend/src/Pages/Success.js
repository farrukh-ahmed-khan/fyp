import React from 'react'
import "../Assets/css/thankyou.css";
import { Link } from 'react-router-dom';
const Success = () => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <h1 className="thank-you-header">Thank You!</h1>
        <p className="thank-you-message">
          We appreciate your business and look forward to serving you again.
        </p>
        <Link to="/" className="back-to-home-link">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default Success
