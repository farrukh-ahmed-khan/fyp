import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Assets/css/nav.css";
import { useNavigate } from "react-router-dom";

const Navbr = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isVendorLoggedIn, setIsVendorLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("userId");
    const vendor = localStorage.getItem("vendor");

    setIsUserLoggedIn(!!user);
    setIsVendorLoggedIn(!!vendor);
  }, []);

  const navigate = useNavigate();

  const handleLogout = (userType) => {
    if (userType === "userId") {
      localStorage.removeItem("userId");
      setIsUserLoggedIn(false);
    } else if (userType === "vendor") {
      localStorage.removeItem("vendor");
      setIsVendorLoggedIn(false);
    }

    const logoutRoute = userType === "vendor" ? "/vendorlogin" : "/login";
    navigate(logoutRoute);
  };

  return (
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
            {isVendorLoggedIn ? (
              <>
                <LinkContainer to="/Add-Venue">
                  <Nav.Link href="/Add-Venue" className="link">
                    Add Venue
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/vendordashboard">
                  <Nav.Link href="/vendordashboard" className="link">
                    Dashboard
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/vendororder">
                  <Nav.Link href="/vendororder" className="link">
                    Orders
                  </Nav.Link>
                </LinkContainer>
              </>
            ) : (
              <>
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
                <LinkContainer to="/Service">
                  <Nav.Link href="/service" className="link">
                    Services
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/venue-booking">
                  <Nav.Link href="/venue-booking" className="link">
                    Venue Booking
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Contact">
                  <Nav.Link href="/Contact" className="link">
                    Contact
                  </Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
          <Form className="d-flex icons align-items-center">
            {isUserLoggedIn || isVendorLoggedIn ? (
              <button
                className="nav-btn"
                onClick={() =>
                  handleLogout(isVendorLoggedIn ? "vendor" : "user")
                }
              >
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
  );
};

export default Navbr;

// import { useState, useEffect } from "react";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { LinkContainer } from "react-router-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../../Assets/css/nav.css";
// import { useNavigate } from "react-router-dom";

// const Navbr = () => {
//   const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
//   const [isVendorLoggedIn, setIsVendorLoggedIn] = useState(false);

//   useEffect(() => {
//     const user = localStorage.getItem("user");
//     const vendor = localStorage.getItem("vendor");

//     if (user) {
//       setIsUserLoggedIn(true);
//     }

//     if (vendor) {
//       setIsVendorLoggedIn(true);
//     }
//   }, []);

//   const navigate = useNavigate();

//   const handleLogout = (userType) => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("vendor");

//     setIsUserLoggedIn(false);
//     setIsVendorLoggedIn(false);

//     const logoutRoute = userType === "vendor" ? "/vendorlogin" : "/login";
//     navigate(logoutRoute);
//   };

//   return (
//     <Navbar expand="lg" className="nav px-4">
//       <Container fluid>
//         <Navbar.Brand href="#" className="logo">
//           <p>
//             The <span>Wedding</span> Spot
//           </p>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{
//               maxHeight: "100px",
//               alignItems: "center",
//               marginLeft: "30px",
//             }}
//             navbarScroll
//           >
//             {isVendorLoggedIn ? (
//               <>
//                 <LinkContainer to="/Add-Venue">
//                   <Nav.Link href="/Add-Venue" className="link">
//                     Add Venue
//                   </Nav.Link>
//                 </LinkContainer>
//                 <LinkContainer to="/vendordashboard">
//                   <Nav.Link href="/vendordashboard" className="link">
//                     Dashboard
//                   </Nav.Link>
//                 </LinkContainer>
//               </>
//             ) : (
//               <>
//                 <LinkContainer to="/">
//                   <Nav.Link href="/" className="link">
//                     Home
//                   </Nav.Link>
//                 </LinkContainer>
//                 <LinkContainer to="/About">
//                   <Nav.Link href="/about" className="link">
//                     About
//                   </Nav.Link>
//                 </LinkContainer>
//                 <LinkContainer to="/Service">
//                   <Nav.Link href="/service" className="link">
//                     Services
//                   </Nav.Link>
//                 </LinkContainer>
//                 <LinkContainer to="/venue-booking">
//                   <Nav.Link href="/venue-booking" className="link">
//                     Venue Booking
//                   </Nav.Link>
//                 </LinkContainer>
//                 <LinkContainer to="/Contact">
//                   <Nav.Link href="/Contact" className="link">
//                     Contact
//                   </Nav.Link>
//                 </LinkContainer>
//               </>
//             )}
//           </Nav>
//           <Form className="d-flex icons align-items-center">
//             {isUserLoggedIn || isVendorLoggedIn ? (
//               <button
//                 className="nav-btn"
//                 onClick={() =>
//                   handleLogout(isVendorLoggedIn ? "vendor" : "user")
//                 }
//               >
//                 Logout
//               </button>
//             ) : (
//               <>
//                 <LinkContainer to="/Vendorlogin">
//                   <Nav.Link href="/Vendorlogin" className="link">
//                     <button className="nav-btn">Login as vendor</button>
//                   </Nav.Link>
//                 </LinkContainer>
//                 <LinkContainer to="/login">
//                   <Nav.Link href="/login" className="link">
//                     <button className="nav-btn">Login as User</button>
//                   </Nav.Link>
//                 </LinkContainer>
//               </>
//             )}
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Navbr;

// -------------------------------------

// import { useState, useEffect } from "react";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { LinkContainer } from "react-router-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../../Assets/css/nav.css";
// import { useNavigate } from "react-router-dom";

// const Navbr = () => {
//   const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
//   const [isVendorLoggedIn, setIsVendorLoggedIn] = useState(false);

//   useEffect(() => {
//     const user = localStorage.getItem("user");
//     const vendor = localStorage.getItem("vendor");

//     if (user) {
//       setIsUserLoggedIn(true);
//     }

//     if (vendor) {
//       setIsVendorLoggedIn(true);
//     }
//   }, []);
//   const navigate = useNavigate(); // Use useNavigate hook

//   const handleLogout = (userType) => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("vendor");

//     setIsUserLoggedIn(false);
//     setIsVendorLoggedIn(false);

//     // Determine the appropriate route based on the userType
//     const logoutRoute = userType === "vendor" ? "/vendorlogin" : "/login";

//     // Navigate to the logout route using useNavigate
//     navigate(logoutRoute);
//   };

//   return (
//     <>
//       <Navbar expand="lg" className="nav px-4">
//         <Container fluid>
//           <Navbar.Brand href="#" className="logo">
//             <p>
//               The <span>Wedding</span> Spot
//             </p>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll">
//             <Nav
//               className="me-auto my-2 my-lg-0"
//               style={{
//                 maxHeight: "100px",
//                 alignItems: "center",
//                 marginLeft: "30px",
//               }}
//               navbarScroll
//             >
//               <LinkContainer to="/">
//                 <Nav.Link href="/" className="link">
//                   Home
//                 </Nav.Link>
//               </LinkContainer>
//               <LinkContainer to="/About">
//                 <Nav.Link href="/about" className="link">
//                   About
//                 </Nav.Link>
//               </LinkContainer>
//               {isVendorLoggedIn ? (
//                 <LinkContainer to="/VendorForm">
//                   <Nav.Link href="/VendorForm" className="link">
//                     Add Venue
//                   </Nav.Link>
//                 </LinkContainer>
//               ) : (
//                 <LinkContainer to="/Service">
//                   <Nav.Link href="/service" className="link">
//                     Services
//                   </Nav.Link>
//                 </LinkContainer>
//               )}
//               {/* <LinkContainer to="/Service">
//                 <Nav.Link href="/service" className="link">
//                   Services
//                 </Nav.Link>
//               </LinkContainer> */}
//               {isVendorLoggedIn ? (
//                 <LinkContainer to="/vendordashboard">
//                   <Nav.Link href="/vendordashboard" className="link">
//                     Vendor Dashboard
//                   </Nav.Link>
//                 </LinkContainer>
//               ) : (
//                 <LinkContainer to="/venue-booking">
//                   <Nav.Link href="/venue-booking" className="link">
//                     Venue Booking
//                   </Nav.Link>
//                 </LinkContainer>
//               )}

//               {/* {isVendorLoggedIn:
//               <Nav.Link href="/venue-booking" className="link">
//                 Reserved the date
//               </Nav.Link>?

// <Nav.Link href="/venue-booking" className="link">
//                 Vendor Dashboard
//               </Nav.Link>

// } */}
//               <LinkContainer to="/Contact">
//                 <Nav.Link href="/Contact" className="link">
//                   Contact
//                 </Nav.Link>
//               </LinkContainer>
//             </Nav>
//             <Form className="d-flex icons align-items-center">
//               {isUserLoggedIn || isVendorLoggedIn ? (
//                 <button
//                   className="nav-btn"
//                   onClick={() =>
//                     handleLogout(isVendorLoggedIn ? "vendor" : "user")
//                   }
//                 >
//                   Logout
//                 </button>
//               ) : (
//                 <>
//                   <LinkContainer to="/Vendorlogin">
//                     <Nav.Link href="/Vendorlogin" className="link">
//                       <button className="nav-btn">Login as vendor</button>
//                     </Nav.Link>
//                   </LinkContainer>
//                   <LinkContainer to="/login">
//                     <Nav.Link href="/login" className="link">
//                       <button className="nav-btn">Login as User</button>
//                     </Nav.Link>
//                   </LinkContainer>
//                 </>
//               )}
//             </Form>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// };

// export default Navbr;
