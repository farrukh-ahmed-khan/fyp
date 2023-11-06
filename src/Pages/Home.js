import React from 'react';
import '../Assets/css/home.css';
import Carosel from '../Components/CommonComponent/Carosel';
import Navbr from '../Components/CommonComponent/Nav';
import MakeUpDecoration from '../Components/CommonComponent/MakeUpDecoration';
import GalleryButton from '../Components/GalleryButton';
import HowWeWork from '../Components/HowWeWork';
import Footer from '../Components/CommonComponent/Footer';
import ReservedTheDate from '../Components/CommonComponent/ReservedTheDate';
import HomeCard from '../Components/HomeCard';
import HomeGallery from '../Components/HomeGallery';

const Home = () => {
  return (
    <div className="home-page">
      <Navbr />
      <div className="image-slider">
        <Carosel />
      </div>
      <div className="head">
        <h4>Our Services</h4>
      </div>
      <div className="card-section">
        <HomeCard type="photography"/>
        <HomeCard type="decoration"/>
        <HomeCard type="makeup"/>
      </div>
      <div className="portion-gallery">
        <HomeGallery/>
      </div>
      <div className="makeup-decor-portion">
        <MakeUpDecoration />
      </div>
      <div className="arrow">
        <GalleryButton />
      </div>
      <div className="work-about">
        <HowWeWork/>
      </div>
        <ReservedTheDate/>
      <div className='foot'>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
