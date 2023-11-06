import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../Assets/images/logo.png';
import fb from '../../Assets/images/fb.png';
import insta from '../../Assets/images/insta.png';
import twitter from '../../Assets/images/twitter.png';
import '../../Assets/css/footer.css';

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row style={{ backgroundColor: '#EFECCE' }}>
        <Col className="logo_col">
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="social">
            <p
              style={{
                fontFamily: 'garamond',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '32px',
                lineHeight: '36px',
                textAlign: 'center',
              }}
            >
              Social Media
            </p>
          </div>
          <div className="social_logo">
            <div>
              <img src={fb} />
            </div>
            <div>
              <img src={insta} />
            </div>
            <div>
              <img src={twitter} />
            </div>
          </div>
        </Col>
        <Col className="menu">
          <div>
            <h4>Menus</h4>
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Testimonials</p>
            <p>Contact</p>
          </div>
        </Col>
        <Col className="services">
          <div>
            <h4>Services</h4>
            <p>Photoshoot</p>
            <p>Fooding</p>
            <p>Devorator</p>
            <p>Venue Finding</p>
          </div>
        </Col>
        <Col className="contact">
          <div>
            <h4>Contact Us</h4>
            <p>+123 1213 21345</p>
            <p>Wedplaner1@gmail.com</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
