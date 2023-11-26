// ThankYouPage.jsx
import React from 'react';
import '../Assets/css/thankyou.css'; 
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
  return (
    <div className="thank-you-container">
      <h1 className="thank-you-heading">Thank You!</h1>
      <p className="thank-you-message">
        Your message has been received. We appreciate your feedback.
        <br/>
        <br/>
        <Link to="/" className="thank-you-link">
          Go Back Home
        </Link>
      </p>

    </div>
  );
};

export default ThankYouPage;
