import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar } from "@mui/material";

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

  //
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
                  <div>
                    <div
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      style={{ margin: "18px 0 0 16px", cursor: "pointer" }}
                    >
                      <Avatar src="https://i.ibb.co/B61Br7L/user-icon.png" sx={{ width: 31, height: 31 }} />
                    </div>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={handleClose}>{user.displayName}</MenuItem>
                      <MenuItem onClick={handleClose}>
                        {" "}
                        <Link to="/dashboard" style={{ textDecoration: "none", color: "black" }}>
                          Dashboard
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Button onClick={logout}>LOGOUT</Button>
                      </MenuItem>
                    </Menu>
                  </div>
                </>
              ) : (
                <NavLink to="/login">
                  <button className="login-button">LOGIN</button>
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
