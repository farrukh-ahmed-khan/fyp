import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Assets/css/nav.css";

const Navbr = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isVendorLoggedIn, setIsVendorLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const vendor = localStorage.getItem("vendor");

    if (user) {
      setIsUserLoggedIn(true);
    }

    if (vendor) {
      setIsVendorLoggedIn(true);
    }
  }, []); 

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("vendor");
    setIsUserLoggedIn(false);
    setIsVendorLoggedIn(false);
  };

  return (
    <>
      <Navbar expand="lg" className="nav px-4">
        <Container fluid>
          <Navbar.Brand href="#" className="logo">
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
              {
                isVendorLoggedIn ? 
                <LinkContainer to="/VendorForm">
                <Nav.Link href="/VendorForm" className="link">
                  Add Venue
                </Nav.Link>
              </LinkContainer>
              :
              <LinkContainer to="/Service">
                <Nav.Link href="/service" className="link">
                  Services
                </Nav.Link>
              </LinkContainer>
              }
              <LinkContainer to="/Service">
                <Nav.Link href="/service" className="link">
                  Services
                </Nav.Link>
              </LinkContainer>
              {isVendorLoggedIn ? 
                <LinkContainer to="/vendor-dashboard">
                  <Nav.Link href="/vendor-dashboard" className="link">
                    Vendor Dashboard
                  </Nav.Link>
                </LinkContainer>
              :
                <LinkContainer to="/venue-booking">
                  <Nav.Link href="/venue-booking" className="link">
                    Reserved the date
                  </Nav.Link>
                </LinkContainer>
            }
              

              {/* {isVendorLoggedIn: 
              <Nav.Link href="/venue-booking" className="link">
                Reserved the date
              </Nav.Link>?

<Nav.Link href="/venue-booking" className="link">
                Vendor Dashboard
              </Nav.Link>

} */}
              <Nav.Link href="/Contact" className="link">
                Contact
              </Nav.Link>
            </Nav>
            <Form className="d-flex icons align-items-center">
              {isUserLoggedIn || isVendorLoggedIn ? (
                <button className="nav-btn" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <>
                  <LinkContainer to="/Vendorlogin">
                    <Nav.Link href="/Vendorlogin" className="link">
                      <button className="nav-btn">Login as vendor</button>
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <Nav.Link href="/login" className="link">
                      <button className="nav-btn">Login as User</button>
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbr;
  