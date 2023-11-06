import React from 'react';
import '../Assets/css/homecard.css';
import card_img1 from '../Assets/images/card-image1.png';
import card_img2 from '../Assets/images/card-image2.png';
import card_img3 from '../Assets/images/card-image3.png';

const HomeCard = ({ type }) => {
  let data;
  // temporay
  switch (type) {
    case 'photography':
      data = {
        img: (
          <img src={card_img1} style={{ height: '8.5vh', width: '8.5vh' }} />
        ),
        title: 'Photography/Videography',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
      };

      break;
    case 'decoration':
      data = {
        img: (
            <img src={card_img2} style={{ height: '8.5vh', width: '8.5vh' }} />
          ),
          title: 'Decoration',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
      };

      break;
    case 'makeup':
      data = {
        img: (
            <img src={card_img3} style={{ height: '8.6vh', width: '5.9vh' }} />
          ),
          title: 'Makeup',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
      };

      break;
    default:
      break;
  }
  return (
    <div className="card">
      <div className="card-description">
        <div className="image-portion">
          {data.img}
        </div>
        <div className="service-portion">
          <p>{data.title}</p>
        </div>
        <div className="service-description">
          <p>
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
