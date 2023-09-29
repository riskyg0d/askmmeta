import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import contactImg from "../../assets/img/logo.png";
import { PopupModal } from "react-calendly";
import MY_VIDEO from "../../assets/img/Who Are we_ .mp4";
import meter1 from "../../assets/img/thumbnail1.png";
import marketing from "../../assets/img/Marketing.jpg";
export default function Leadership() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="contact " id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="signup">
            <img src={contactImg} alt="contact Us" /> <br />
            <div className="bio">
              <p> Marketing Agency</p> <br />
            </div>
            <div className="paragraph">
              <p>
                AskMMeta is a dynamic and creative marketing agency based in
                Mumbai, India who specialises in crafting and executing
                strategic plans to promote and elevate businesses and brands. In
                the realm of modern business, a top-tier marketing agency is not
                just an asset but a catalyst for unparalleled success. With a
                relentless pursuit of ROI and an unwavering commitment to
                staying at the forefront of algorithmic shifts, AskMMeta doesn't
                just elevate your brand; it propels it into the digital and
                traditional stratosphere, where business dreams become reality.
                Join hands with us, and let's embark on a journey where your
                business story is told vibrantly, where your overall visibility
                soars, and where your dreams of business dominance become a
                thrilling reality. Welcome to the future of AI based marketing;
                welcome to AskMMeta.{" "}
              </p>

              <Button className="vvd" onClick={() => setIsOpen(true)}>
                <span>Book a call</span>
              </Button>
              <PopupModal
                url="https://calendly.com/digital_surges/30min"
                onModalClose={() => setIsOpen(false)}
                open={isOpen}
                /*
                 * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                 * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                 */
                rootElement={document.getElementById("root")}
              />
            </div>
          </Col>

          <Col md={8} sm={4} className=" process">
            <div>
              <img src={marketing} className="vidlead" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
