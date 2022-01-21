import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";

const Menubar = () => {
  const { user, logout } = useFirebase();
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

            <Nav className="navbar-custom">
              <NavLink
                className={(navInfo) =>
                  navInfo.isActive
                    ? "text-decoration-none mx-3 display-inline-block  pt-4  text-danger fw-bold"
                    : "text-decoration-none mx-3 display-inline-block  pt-4  text-info"
                }
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className={(navInfo) =>
                  navInfo.isActive
                    ? "text-decoration-none mx-3 display-inline-block  pt-4  text-danger fw-bold"
                    : "text-decoration-none mx-3 display-inline-block  pt-4  text-info"
                }
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className={(navInfo) =>
                  navInfo.isActive
                    ? "text-decoration-none mx-3 display-inline-block  pt-4  text-danger fw-bold"
                    : "text-decoration-none mx-3 display-inline-block  pt-4  text-info"
                }
                to="/services"
              >
                Services
              </NavLink>
              <NavLink
                className={(navInfo) =>
                  navInfo.isActive
                    ? "text-decoration-none mx-3 display-inline-block  pt-4  text-danger fw-bold"
                    : "text-decoration-none mx-3 display-inline-block  pt-4  text-info"
                }
                to="/shop"
              >
                Shop
              </NavLink>
              <NavLink
                className={(navInfo) =>
                  navInfo.isActive
                    ? "text-decoration-none mx-3 display-inline-block  pt-4  text-danger fw-bold"
                    : "text-decoration-none mx-3 display-inline-block  pt-4  text-info"
                }
                to="/blog"
              >
                Blog
              </NavLink>
              <NavLink
                className={(navInfo) =>
                  navInfo.isActive
                    ? "text-decoration-none mx-3 display-inline-block  pt-4  text-danger fw-bold"
                    : "text-decoration-none mx-3 display-inline-block  pt-4  text-info"
                }
                to="/contact"
              >
                Contact
              </NavLink>
              {user?.email ? (
                <>
                  <NavLink to="/cart">
                    <div class="position-relative">
                      <i class="fa fa-shopping-cart fs-3 pt-4 text-warning"></i>
                      <span class="position-absolute top-50 start-100 translate-middle badge rounded-pill bg-danger">
                        1<span class="visually-hidden">unread messages</span>
                      </span>
                    </div>
                  </NavLink>

                  <Button onClick={logout} className="primary-btn2 ms-5">
                    LOGOUT
                  </Button>
                </>
              ) : (
                <NavLink to="/login">
                  <Button className="primary-btn2">LOGIN</Button>
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;
