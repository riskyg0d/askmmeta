import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/Marketing.jpg";
import MY_VIDEO from "../assets/img/Case_study.mp4";
import clientimage from "../assets/img/clients.png"
export const CaseStudy = () => {


  
  return (
    <section className='skill' id='study'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h1>WHAT DO WE DO ?</h1>
              <p>
               Ignite your Business Growth through Innovative Marketing !  <br />
              </p>
  
              <div>
                <iframe className="youtubevid" title="Case Study Video" width="1060" height="505" src="https://www.youtube.com/embed/76owajba7ks" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <Container>
        <Row>
        <Col>
        <div className='clientstyle'>
          <h2> Our Clients </h2>
        </div>
        </Col>
        </Row>
        <img src={clientimage}></img>
      </Container>
    </section>
  );
  
};
