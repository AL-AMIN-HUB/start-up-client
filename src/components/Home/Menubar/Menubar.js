import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Menubar = () => {
  const { user, logout } = useAuth();
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
            <img className="img-fluid" style={{ width: "100px" }} src="https://i.ibb.co/pLd7Psj/xlogo-png-pagespeed-ic-TPJc-IPa4-Tw.webp" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>

            <Nav className="navbar-custom">
              <NavLink
                className={(navInfo) =>
                  navInfo.isActive
                    ? "text-decoration-none mx-3 display-inline-block  pt-4  text-info fs-6"
                    : "text-decoration-none mx-3 display-inline-block  pt-4  text-primary fs-6"
                }
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className={(navInfo) =>
                  navInfo.isActive
                    ? "text-decoration-none mx-3 display-inline-block  pt-4  text-info fs-6"
                    : "text-decoration-none mx-3 display-inline-block  pt-4  text-primary fs-6"
                }
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className={(navInfo) =>
                  navInfo.isActive
                    ? "text-decoration-none mx-3 display-inline-block  pt-4  text-info fs-6"
                    : "text-decoration-none mx-3 display-inline-block  pt-4  text-primary fs-6"
                }
                to="/products"
              >
                Products
              </NavLink>
              <NavLink
                className={(navInfo) =>
                  navInfo.isActive
                    ? "text-decoration-none mx-3 display-inline-block  pt-4  text-info fs-6"
                    : "text-decoration-none mx-3 display-inline-block  pt-4  text-primary fs-6"
                }
                to="/services"
              >
                Support Service
              </NavLink>

              <NavLink
                className={(navInfo) =>
                  navInfo.isActive
                    ? "text-decoration-none mx-3 display-inline-block  pt-4  text-info fs-6"
                    : "text-decoration-none mx-3 display-inline-block  pt-4  text-primary fs-6"
                }
                to="/contact"
              >
                Contact
              </NavLink>
              {user?.email ? (
                <>
                  <NavLink
                    className={(navInfo) =>
                      navInfo.isActive
                        ? "text-decoration-none mx-3 display-inline-block  pt-4  text-info fs-6"
                        : "text-decoration-none mx-3 display-inline-block  pt-4  text-primary fs-6"
                    }
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>

                  <Button onClick={logout} className="primary-btn2 ms-5">
                    LOGOUT
                  </Button>
                </>
              ) : (
                <NavLink to="/login">
                  <Button className="primary-btn3">LOGIN</Button>
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
