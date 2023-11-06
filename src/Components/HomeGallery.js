import React from 'react';
import '../Assets/css/homegallery.css';
import first from '../Assets/images/Galleryimages/1.png';
import second from '../Assets/images/Galleryimages/2.png';
import third from '../Assets/images/Galleryimages/3.png';
import fourth from '../Assets/images/Galleryimages/4.png';

let GalleryData = [
  { img: <img src={first} /> },
  { img: <img src={second} /> },
  { img: <img src={third} /> },
  { img: <img src={fourth} /> },
];

const HomeGallery = () => {
  return (
    <div className="gallery-portion">
      <div className="gallery-heading">
        <p>Our Luxury Weddings</p>
      </div>
      <div className="gallery-images">
        {GalleryData.map((images) => {
          {
            return <div>{images.img}</div>;
          }
        })}
      </div>
      <div className="gallery-images" style={{ marginTop: '2.3vh' }}>
        {GalleryData.map((images) => {
          {
            return <div>{images.img}</div>;
          }
        })}
      </div>
    </div>
  );
};

export default HomeGallery;
