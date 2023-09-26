import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from '../assets/img/nav-icon2.png';
import navIcon3 from '../assets/img/nav-icon33.svg';
import { PopupModal } from "react-calendly";


import { Link } from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const [isOpen, setIsOpen] = useState(false);


  return (
    <Navbar expand='sm' className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand>
          <img src={logo} alt='Logo' className='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            {" "}
            <Nav.Link
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}>
              <Link className='route' to='/'>
                Home
              </Link>
            </Nav.Link>{" "}
            <Nav.Link
              className={
                activeLink === "leadership"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("leadership")}>
              <Link className='route' to='/leadership'>
                Leadership
              </Link>
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='#skill'>
                <img src={navIcon1} alt='' />
              </a>
              <a href='#projects'>
                <img src={navIcon3} alt='' />
              </a>
              <a href='#study'>
                <img src={navIcon2} alt='' />
              </a>
            </div>

            <button className='vvd' onClick={() => setIsOpen(true)}>
              <span>Book a call</span>
            </button>
            <PopupModal
              url='https://calendly.com/digital_surges/30min'
              onModalClose={() => setIsOpen(false)}
              open={isOpen}
              /*
               * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
               * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
               */
              rootElement={document.getElementById("root")}
            />
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
