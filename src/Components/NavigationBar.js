import { React } from "react";
import {Container, Nav, Navbar, Offcanvas, NavbarBrand} from "react-bootstrap";
import Logo from "../Assets/Gambar/logo.png";

import "./NavigationBarStyle.css";

function NavigationBar() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="nav">
          <Container>
            {/*Navbar Brand Start */}
            <NavbarBrand href="#landing-page">
              <img
                src={Logo}
                alt="logo"
                width={100}
                height={34}
                className="logo"
              />
            </NavbarBrand>
            {/*Navbar Brand end */}

            {/*Navbar Togle start */}
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="mt-3 border-0 togle"
            />
            {/*Navbar Togle end */}

            {/*Navbar Offcanvas Start */}
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="navigation-menu"
            >
              <Offcanvas.Header closeButton className="mt-4">
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  className="ms-3"
                >
                  <b>BRC</b>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#our-services" className="title">
                    Our Services
                  </Nav.Link>
                  <Nav.Link href="#why-us" className="title">
                    Why Us
                  </Nav.Link>
                  <Nav.Link href="#testimonial" className="title">
                    Testimonial
                  </Nav.Link>
                  <Nav.Link href="#faq" className="title">
                    FAQ
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            {/*Navbar Offcanvas end */}
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavigationBar;
