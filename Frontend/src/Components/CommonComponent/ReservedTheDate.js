import React from 'react';
import '../../Assets/css/reservedate.css';
import Background from '../../Assets/images/reserve-date/Reserve-date-bg.jpg';
import calender from '../../Assets/images/reserve-date/calender.png';

const ReservedTheDate = () => {
  return (
    <div
      className="reserve-date"
      style={{
        backgroundImage: `url(${Background})`,
        height: '556px',
        maxWidth: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
      }}
    >
      <div className="left-reserve-date">
        <div className="reserve-date-heading">
          <p>Reserved The Date</p>
        </div>
        <div className="reserve-date-para">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="reserve-date-btn">
          <button>
            <p>Reserved the date</p>
          </button>
        </div>
      </div>
      <div className="right-reserve-date">
        <div className='calender-image'>
          <img src={calender} />
        </div>
      </div>
    </div>
  );
};

export default ReservedTheDate;
