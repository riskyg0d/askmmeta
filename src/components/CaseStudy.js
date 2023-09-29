import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/logo.png";
import colorSharp from "../assets/img/color-sharp.png";
import MY_VIDEO from "../assets/img/Teaser_Final_2.mp4";
export const CaseStudy = () => {
  return (
    <section className="skill" id="study">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h1>Coming Soon</h1>
              <p>
                Taking the Marketing world by storm, You aren't ready for what's
                coming <br />
              </p>

              <div>
                <video className="vid" controls poster={meter1}>
                  <source src={MY_VIDEO} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className="background-image-left" alt="" />
    </section>
  );
};
