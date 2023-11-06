import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../Assets/images/logo.png';
import search from '../../Assets/images/search_icon.png';
import img from '../../Assets/images/img_icon.png';

import '../../Assets/css/nav.css';

const Navbr = () => {
  return (
    <>
      <Navbar expand="lg" className="nav">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={logo}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <LinkContainer to="/home">
                <Nav.Link href="#action1" className="link">
                  Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/About">
                <Nav.Link href="#action2" className="link">
                  About
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Gallery">
                <Nav.Link href="#action2" className="link">
                  Gallery
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Service">
                <Nav.Link href="#action2" className="link">
                  Services
                </Nav.Link>
              </LinkContainer>
              <Nav.Link href="#action2" className="link">
                Reserved the date
              </Nav.Link>
              <Nav.Link href="#action2" className="link">
                Contact
              </Nav.Link>
            </Nav>
            <Form className="d-flex ">
              <div className="first p-2">
                <img src={search}></img>
              </div>
              <div className="second p-2">
                <img src={img}></img>
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbr;
