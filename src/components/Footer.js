import React from 'react'

import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon33.svg";
import InstagramIcon from '../assets/img/instagramicon.png';
import FacebookIcon from '../assets/img/facebooklogo.jpg';
import YoutubeIcon from '../assets/img/youtube.png';
import LinkedInIcon from '../assets/img/linkedin.png';
import { Col, Container, Row } from 'react-bootstrap';
function Footer() {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          <Col sm={4}>
            <img src={logo} alt='Logo' />
            <p>
              AskMMeta was founded in 2023 providing a platform to integrate Digital Marketing with the Era of E-Platform Development
            </p>
            <div>
      <a href="https://www.instagram.com/askmmeta/">
        <img src={InstagramIcon} alt="Instagram" />
      </a>
      <a href="https://www.facebook.com/askmmeta">
        <img src={FacebookIcon} alt="Facebook" />
      </a>
      <a href="https://www.youtube.com/@AskMMeta">
        <img src={YoutubeIcon} alt="YouTube" />
      </a>
      <a href="https://in.linkedin.com/company/askmmeta?trk=public_jobs_topcard_logo">
        <img src={LinkedInIcon} alt="LinkedIn" />
      </a>
    </div>
          </Col>
          <Col sm={5}></Col>
          <Col sm={3} className='text-center text-sm-end'>
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
            <p>CopyRight 2023. All rights reserved by AskMMeta</p>
            <p> Email us: business@askmmeta.com</p>
            <p> Phone: +91 97690 00011</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer