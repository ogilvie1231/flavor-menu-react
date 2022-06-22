import React, { useState } from "react";
import { Navbar, NavDropdown, Nav, Container, Button } from "react-bootstrap";
import "./NavBar.css";
import Logo from "../../assets/img/ivape-logo.png";

const NavBar = () => {
  return (
    <div className="container-div fixed">
      <Navbar className="navBar fixed" bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              id="iVape-logo"
              className="iVape-logo"
              src={Logo}
              alt="iVape-logo"
              srcset=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-text">
                Subohm
              </Nav.Link>
              <Nav.Link className="nav-text" href="/salts">
                Salts
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};


// *******
// const NavBar = () => {
//   return (
//     <div className="container-div fixed">
//       <Navbar className="navBar fixed" bg="dark" expand="lg">
//         <Container>
//           <Navbar.Brand href="#home">
//             <img
//               id="iVape-logo"
//               className="iVape-logo"
//               src={Logo}
//               alt="iVape-logo"
//               srcset=""
//             />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link className="nav-text" href="/home">
//                 Subohm
//               </Nav.Link>
//               <Nav.Link className="nav-text" href="/salts">
//                 Salts
//               </Nav.Link>

//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };
// *******


export default NavBar;
