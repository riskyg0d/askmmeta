import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleScroll = () => {
    setScrolled(true);
  };

  return (
    <Navbar expand="sm" className={scrolled ? 'scrolled' : ''} onScroll={handleScroll}>
      <Container>
        <Navbar.Brand>
          <ScrollLink to="home" smooth={true}>
            <img src={logo} alt="Logo" className="logo" />
          </ScrollLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsOpen(!isOpen)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              <ScrollLink to="home" smooth={false}>
                Home
              </ScrollLink>
            </Nav.Link>
            <Nav.Link
              className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('services')}
            >
              <ScrollLink to="skill" smooth={false}>
                Our Services
              </ScrollLink>
            </Nav.Link>

            <Nav.Link
              className={activeLink === 'specializations' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('specializations')}
            >
              <ScrollLink to="contact" smooth={false}>
                Testimonials
              </ScrollLink>
            </Nav.Link>
            <NavDropdown title="Are you a..." id="basic-nav-dropdown">
  <NavDropdown.Item
    className={activeLink === 'creator' ? 'active navbar-link' : 'navbar-link'}
    href="https://forms.gle/DZXB59bhYT4ct43M9"
    target="_blank"
    rel="noopener noreferrer"
  >
    Creator
  </NavDropdown.Item>
  <NavDropdown.Item
    className={activeLink === 'brand' ? 'active navbar-link' : 'navbar-link'}
    href="https://forms.gle/ME9Jfrgs1gTTDLzo8"  // Use the ID of the target element for scrolling
    target="_blank"
  >
    Brand
  </NavDropdown.Item>
</NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
