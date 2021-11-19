import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Menubar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBg);

  return (
    <div>
      <Navbar style={{ height: "80px" }} className="navbar" bg={navbar ? "light" : "transparent"} collapseOnSelect expand="lg" variant="light">
        <Container>
          <Navbar.Brand>
            <img
              className="img-fluid"
              style={{ width: "100px" }}
              src="https://i.ibb.co/s6NYJLP/26-Able-to-Survive-during-the-Pandemic-Investors-Aim-for-Local-Startups-removebg-preview.png"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>

            <Nav>
              <NavLink className="text-decoration-none mx-3 display-inline-block pt-4  text-info" to="/home">
                Home
              </NavLink>
              <NavLink className="text-decoration-none mx-3 display-inline-block pt-4 text-info" to="/about">
                About
              </NavLink>
              <NavLink className="text-decoration-none mx-3 display-inline-block pt-4 text-info" to="/services">
                Services
              </NavLink>
              <NavLink className="text-decoration-none mx-3 display-inline-block pt-4 text-info" to="/shop">
                Shop
              </NavLink>
              <NavLink className="text-decoration-none mx-3 display-inline-block pt-4 text-info" to="/blog">
                Blog
              </NavLink>
              <NavLink className="text-decoration-none mx-3 display-inline-block pt-4 text-info" to="/contact">
                Contact
              </NavLink>
              <NavLink to="/support">
                <Button className="primary-btn3">SUPPORT</Button>
              </NavLink>
              <NavLink to="/login">
                <Button className="primary-btn2">LOGIN</Button>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;
