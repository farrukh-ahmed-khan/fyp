import React from 'react';
import '../Assets/css/shortgallery.css';
import first from '../Assets/images/Galleryimages/1.png';
import second from '../Assets/images/Galleryimages/2.png';
import third from '../Assets/images/Galleryimages/3.png';
import fourth from '../Assets/images/Galleryimages/4.png';

let imagesdata = [
  { image: <img src={first} /> },
  { image: <img src={second} /> },
  { image: <img src={third} /> },
  { image: <img src={fourth} /> },
];

const ShortGallery = () => {
  return (
    <>
      <div className="short-gallery-portion">
        <div className="short-gallery-heading">
          <p>Photography</p>
        </div>
        <div className="short-gallery-images">
          {imagesdata.map((images) => {
            {
              return <div>{images.image}</div>;
            }
          })}
        </div>
        <div className="short-gallery-images" style={{ marginTop: '2.3vh' }}>
          {imagesdata.map((images) => {
            {
              return <div>{images.image}</div>;
            }
          })}
        </div>
      </div>
      <div className="video-portion">
        <div className="video-graphy-heading">
          <p>Videography</p>
        </div>
        <div className="videos">
            <div className="row">
              <div className='col-lg-3'>
                <video width="296" height="337" controls>
                  {/* <source src="movie.mp4" type="video/mp4">
                <source src="movie.ogg" type="video/ogg"> */}
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className='col-lg-3'>
                <video width="296" height="337" controls>
                  {/* <source src="movie.mp4" type="video/mp4">
                <source src="movie.ogg" type="video/ogg"> */}
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className='col-lg-3'>
                <video width="296" height="337" controls>
                  {/* <source src="movie.mp4" type="video/mp4">
                <source src="movie.ogg" type="video/ogg"> */}
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className='col-lg-3'>
                <video width="296" height="337" controls>
                  {/* <source src="movie.mp4" type="video/mp4">
                <source src="movie.ogg" type="video/ogg"> */}
                  Your browser does not support the video tag.
                </video>
              </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default ShortGallery;
