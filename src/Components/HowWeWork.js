import React from 'react';
import HowWork from '../Assets/images/how-we-work.png';
import aboutus from '../Assets/images/about-us.png';
import '../Assets/css/howwework.css';

const HowWeWork = () => {
  return (
    <div>
      <div className="about-work">
        <div className="work">
          <div className="about-work">
            <div className="work row">
              <div className="col-lg-6">
                <div className="how-work-head ">
                  <p>How we work</p>
                </div>
                <div className="how-work-des">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className="how-work-img">
                  <img src={HowWork} />
                </div>
              </div>
            </div>
          </div>
          <div
            className="how-work-head"
            style={{
              display: 'flex',
              flexDirection: 'row-reverse',
              marginRight: '68vh',
              marginTop: '10vh',
            }}
          >
            <p>About us</p>
          </div>
          <div className="how-work-des">
            <div
              className="how-work-img"
              style={{ width: '61.7vh', height: '48.8vh' }}
            >
              <img src={aboutus} />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
