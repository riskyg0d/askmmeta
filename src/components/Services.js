import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg'

import meter3 from '../assets/img/meter3.png'
import meter4 from "../assets/img/meter4.png";
import meter5 from "../assets/img/InstagramM.png";
import colorSharp from "../assets/img/color-sharp.png";


export  const Services = () => {

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 769 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 769, min: 0 },
        items: 1,
      },
    };
  return (
    <section className='skill' id='skill'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h1>Our Services</h1>
              <p>
                In Digital Surges we will dramatically grow your business offering these services: <br />
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                swipeable={true}
                autoPlay
                autoPlaySpeed={1700}
                className='skill-slider'>
                <div className='item'>
                  <img src={meter3} alt='' />
                  <h2> Social Media Marketing</h2>
                </div>
                <div className='item'>
                  <img src={meter1} alt='' />
                  <h2> Web development</h2>
                </div>

                <div className='item'>
                  <img src={meter4} alt='' />
                  <h2> Copywriting </h2>
                </div>
                <div className='item'>
                  <img src={meter5} alt='' />
                  <h2> Social Media Management </h2>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className='background-image-left' alt='' />
    </section>
  );
}
