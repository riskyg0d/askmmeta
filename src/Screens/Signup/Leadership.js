import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import contactImg from "../../assets/img/ceo.png";
import { PopupModal } from "react-calendly";
import MY_VIDEO from "../../assets/img/Who Are we_ .mp4";
import meter1 from "../../assets/img/thumbnail1.png";
import marketing from "../../assets/img/Marketing.jpg"
export default function Leadership() {
 
    const [isOpen, setIsOpen] = useState(false);
 
  
  return (
    <section className='contact ' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col md={4} className='signup'>
            <img src={contactImg} alt='contact Us' /> <br />
            <div className='bio'>
              <p> CEO | Founder | entroprenuer</p> <br />
            </div>
            <div className='paragraph'>
              <p>
                Allow me to introduce myself, I am Johnny Hatz, an aspiring entrepreneur with a burning desire to become an exceptional business owner. Over the years, I have accumulated a wealth of experience that has shaped my approach to the business world. My ultimate goal is to create ventures that bring substantial value to my customers, leaving a positive impact on their lives. Drawing from my strong business acumen and a keen sense of market trends, I aim to lead enterprises that not only achieve success but also prioritize authentic connections and top-notch products and services. I firmly believe that by providing exceptional value, I can build long-lasting relationships with my customers and make a meaningful difference in the market. With dedication and determination, I am committed to becoming a trailblazer in the business landscape, leaving behind a legacy that showcases my passion for entrepreneurship and the pursuit of excellence.{" "}
              </p>

              <Button className='vvd' onClick={() => setIsOpen(true)}>
                <span>Book a call</span>
              </Button>
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
            </div>
          </Col>

          <Col md={8} sm={4} className=' process'>
            <div>
              <img src={marketing} className='vidlead' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
