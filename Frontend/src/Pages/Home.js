import "../Assets/css/home-page.css";
import Navbr from "../Components/CommonComponent/Nav";
import Footer from "../Components/CommonComponent/Footer";
import image1 from "../Assets/images/Home_images/image1.png";
import image2 from "../Assets/images/Home_images/image2.png";
import image3 from "../Assets/images/Home_images/image3.png";
import image4 from "../Assets/images/Home_images/image4.png";
import user_img from "../Assets/images/Home_images/user.jpg";
import make_img from "../Assets/images/Home_images/makeup-section-img.png";
import decoration_img from "../Assets/images/Home_images/decoration_img.png";
import photography from "../Assets/images/Home_images/photography.png";
import howwework from "../Assets/images/Home_images/how-we-work.png";
import bg from "../Assets/images/bg.png";
import HomeCard from "../Components/HomeCard";
import WhyUsCard from "../Components/WhyUsCard";
const Home = () => {
  return (
    <>
      <div>
        <Navbr />
      </div>
      <div className="home-container" style={{ background: `url("${bg}")` }}>
        <div className="container" >
          <div className="row main-section">
            <div className="col-lg-6" data-aos="fade-right">
              <p>EXPLORE THE VENUES</p>
              <h1>
                VENUE BOOKING <br /> MADE EASY
              </h1>
              <p className="tagline">
                Find thousands of venues across the Karachi
              </p>

              {/* <div className="book-venue d-flex align-items-center px-4 pt-2">
                <div>
                  <p>DATE</p>
                </div>
                <div>
                  <p>VENUE</p>
                </div>
                <button className="btn btn-primary">Book Now</button>
              </div> */}
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="row">
                <div className="col-lg-6">
                  <img src={image1} className="float" />
                </div>
                <div className="col-lg-6">
                  <img src={image2} className="even float" />
                </div>
                <div className="col-lg-6 mt-3">
                  <img src={image3} className="even float" />
                </div>
                <div className="col-lg-6 mt-3">
                  <img src={image4} className="my-5 mx-5 float" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="services-section">
            <h1 className="text-center" data-aos="zoom-in">
              Our Services
            </h1>
            <div className="card-section" data-aos="fade-right">
              <HomeCard type="photography" />
              <HomeCard type="wedding" />
              <HomeCard type="makeup" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="luxury-wedding-section">
            <h1 className="text-center my-4" data-aos="zoom-in">
              Our Luxury Weddings
            </h1>
            <div className="row my-5">
              <div className="col-lg-6 main-content">
                <div className="row">
                  <div className="col-lg-6">
                    {/* <img src={photography}  /> */}
                    <div className="single-service">
                      <img src={photography} />
                      <div className="overlay"></div>
                      <div className="service-desc">
                        <h3>Al-Mehfil Banquet</h3>
                        <hr />
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Est rerum quaerat odio officia? Deleniti at
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-service">
                      <img src={photography} />
                      <div className="overlay"></div>
                      <div className="service-desc">
                        <h3>Al-Mehfil Banquet</h3>
                        <hr />
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Est rerum quaerat odio officia? Deleniti at
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-service">
                      <img src={photography} />
                      <div className="overlay"></div>
                      <div className="service-desc">
                        <h3>Al-Mehfil Banquet</h3>
                        <hr />
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Est rerum quaerat odio officia? Deleniti at
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-service">
                      <img src={photography} />
                      <div className="overlay"></div>
                      <div className="service-desc">
                        <h3>Al-Mehfil Banquet</h3>
                        <hr />
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Est rerum quaerat odio officia? Deleniti at
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-12 luxury-second-section">
                    <h3>
                      Book Your <span style={{ color: "#5c3d9e" }}>Venue</span>,{" "}
                      <br /> Save your Time
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod provident aliquid cumque debitis dolorem ipsum
                      facilis illum enim obcaecati id officia, corporis
                      accusamus. Id ipsa enim nobis unde ea molestias.
                    </p>

                    <div className="d-flex user_reviews">
                      <img src={user_img} alt="" className="img1" />
                      <img src={user_img} alt="" />
                      <img src={user_img} alt="" />
                      <img src={user_img} alt="" />
                      <img src={user_img} alt="" />
                      <img src={user_img} alt="" />
                    </div>
                    <p>✨ ✨ ✨There are thousand of users around the city</p>

                    <div className="reviews-section d-flex">
                      <div>
                        <h3>20K+</h3>
                        <p>Users</p>
                      </div>
                      <div>
                        <h3>2K+</h3>
                        <p>Venues</p>
                      </div>
                      <div>
                        <h3>1.5K+</h3>
                        <p>Service Providers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="makeup-section">
            <h1 className="text-center" data-aos="zoom-in">
              Makeup
            </h1>

            <div className="row">
              <div className="col-lg-6 ">
                <div className="makeup-sub-section">
                  <h3>
                    Book Your <span style={{ color: "#5c3d9e" }}>Service</span>,{" "}
                    <br /> Makeup by Professionals!
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod provident aliquid cumque debitis dolorem ipsum facilis
                    illum enim obcaecati id officia, corporis accusamus. Id ipsa
                    enim nobis unde ea molestias.
                  </p>

                  <div className="d-flex user_reviews">
                    <img src={user_img} alt="" className="img1" />
                    <img src={user_img} alt="" />
                    <img src={user_img} alt="" />
                    <img src={user_img} alt="" />
                    <img src={user_img} alt="" />
                    <img src={user_img} alt="" />
                  </div>
                  <p>✨ ✨ ✨There are thousand of users around the city</p>
                </div>
              </div>

              <div className="col-lg-6">
                <img src={make_img} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="decoration-section">
            <h1 className="text-center" data-aos="zoom-in">
              Decoration
            </h1>
            <div className="row">
              <div className="col-lg-6">
                <img src={decoration_img} alt="" />
              </div>
              <div className="col-lg-6">
                <div className="decoration-sub-section">
                  <h3>
                    Book Your <span style={{ color: "#5c3d9e" }}>Service</span>,{" "}
                    <br /> Decoration by Designers!
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod provident aliquid cumque debitis dolorem ipsum facilis
                    illum enim obcaecati id officia, corporis accusamus. Id ipsa
                    enim nobis unde ea molestias.
                  </p>

                  <div className="d-flex user_reviews">
                    <img src={user_img} alt="" className="img1" />
                    <img src={user_img} alt="" />
                    <img src={user_img} alt="" />
                    <img src={user_img} alt="" />
                    <img src={user_img} alt="" />
                    <img src={user_img} alt="" />
                  </div>
                  <p>✨ ✨ ✨There are thousand of users around the city</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-center my-4 why-us-heading" data-aos="zoom-in">
            Why Us?
          </h1>
          <div className="container-fluid why-us-fluid" data-aos="fade-left">
            <div className="why-us-section">
              <div className="card-section">
                <WhyUsCard type="venues" />
                <WhyUsCard type="easy_booking" />
                <WhyUsCard type="trustworthy_platform" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="how-we-work" data-aos="zoom-in">
          <img src={howwework} alt="" />
        </div>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
