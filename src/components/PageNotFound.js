import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from "../assets/img/404.png";

export default function 
() {
  return (
    <section className='contact '>
      <Container>
        <Row className='align-items-center'>
          <Col md={12}>
            <img src={contactImg} alt='contact Us' /> <br />
            
          </Col>
          <Col md={9} className='error'>
          
            <h1>404 NOT FOUND</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
