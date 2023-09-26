import React from 'react'

import logo from "../assets/img/logo.png";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon33.svg";
import { Col, Container, Row } from 'react-bootstrap';
function Footer() {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          <Col sm={4}>
            <img src={logo} alt='Logo' />
            <p>
              Digital Surges was founded in 2022 by Chahine Elabed, a
              software engineer with a lot of ambitions whose goal is to help
              Realtors close more deals through so many different strategies
            </p>
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
            <p>CopyRight 2022. All rights reserved by Digital Surges</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer