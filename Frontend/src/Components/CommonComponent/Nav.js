import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../Assets/images/logo.png";
import search from "../../Assets/images/search_icon.png";
import img from "../../Assets/images/img_icon.png";
import "../../Assets/css/nav.css";

const Navbr = () => {
  return (
    <>
      <Navbar expand="lg" className="nav px-4">
        <Container fluid>
          <Navbar.Brand href="#" className="logo">
            {/* <img src={logo}></img> */}
            <p>
              The <span>Wedding</span> Spot
            </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{
                maxHeight: "100px",
                alignItems: "center",
                marginLeft: "30px",
              }}
              navbarScroll
            >
              <LinkContainer to="/">
                <Nav.Link href="/" className="link">
                  Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/About">
                <Nav.Link href="/about" className="link">
                  About
                </Nav.Link>
              </LinkContainer>
              {/* <LinkContainer to="/Gallery">
                <Nav.Link href="#" className="link">
                  Gallery
                </Nav.Link>
              </LinkContainer> */}
              <LinkContainer to="/Service">
                <Nav.Link href="/service" className="link">
                  Services
                </Nav.Link>
              </LinkContainer>
              <Nav.Link href="/venue-booking" className="link">
                Reserved the date
              </Nav.Link>
              <Nav.Link href="/Contact" className="link">
                Contact
              </Nav.Link>
            </Nav>
            <Form className="d-flex icons align-items-center">
              <Nav.Link href="#action2" className="link">
                <button className="nav-btn">Join as vendor</button>
              </Nav.Link>
              <Nav.Link href="#action2" className="link">
                <button className="nav-btn">Book a venue</button>
              </Nav.Link>
            </Form>{" "}
            {/* <div className="first p-2">
              <img src={search}></img>
            </div>
            <div className="second p-2">
              <img src={img}></img>
            </div> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbr;
