import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Client1 from "../assets/img/Client1.jpg";
import Client3 from "../assets/img/Client3.jpg";
import Client4 from "../assets/img/Client4.jpg";
import Client2 from "../assets/img/Client2.png";
import { PopupModal } from "react-calendly";


export default function BookACall() {
  const [isOpen, setIsOpen] = useState(false);


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};




  return (
    <section className='contact' id='connect'>
      <div className='testi'>
        <h1 className='ml-8 mb-6'>Are you still not sure?</h1>
      </div>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={contactImg} alt='contact Us' />
          </Col>

          <Col md={6}>
            <div className='skill-bx1'>
              <Carousel responsive={responsive} autoPlay infinite>
                <div className='item'>
                  <img
                    src={Client1}
                    style={{
                      height: "100px",
                      width: "90px",
                      borderRadius: "34px",
                      marginBottom: "10px",
                    }}
                    alt='Client photo'
                  />
                  <h5>Daniel Lopez| Realtor | expRealty</h5>
                  <p>
                    I was skepticle at first But Chahine reassured me. He was
                    very professional, so organized and kept me updated every
                    part of the way. the results were incredible, but you have
                    to be patient. <br />
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                    </div>
                  </p>
                </div>
                <div className='item'>
                  <img
                    src={Client3}
                    style={{
                      height: "100px",
                      width: "90px",
                      borderRadius: "34px",
                      marginBottom: "10px",
                    }}
                    alt='Client photo'
                  />
                  <h5>Jason Kauffman | Exp-realty</h5>
                  <p>
                    "Even before starting to work together, the value they
                    offered me was so much better than people I used to pay
                    monthly <br />
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                    </div>
                  </p>
                </div>
                <div className='item'>
                  <img
                    src={Client2}
                    style={{
                      height: "100px",
                      width: "90px",
                      borderRadius: "34px",
                      marginBottom: "10px",
                    }}
                    alt='Client photo'
                  />
                  <h5>Brandon mendes| Realtor| KW </h5>
                  <p>
                    Shaheen is a great communicator and they were constantly
                    directing us towards making changes which we were hesitant
                    at first but turned out to be so much more effective. <br />
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                    </div>
                  </p>
                </div>
                <div className='item'>
                  <img
                    src={Client4}
                    style={{
                      height: "100px",
                      width: "90px",
                      borderRadius: "34px",
                      marginBottom: "10px",
                    }}
                    alt='Client photo'
                  />
                  <h5>Lauren Peterson| Realtor| europe</h5>
                  <p>
                    I recommend working with them so much, I stopped wasting my
                    money on ads with no particular strategy. <br />
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                    </div>
                  </p>
                </div>
              </Carousel>
              <br />
              <Button className='vvd' onClick={() => setIsOpen(true)}>
                <span>Book a call</span>
              </Button>
              <PopupModal
                url='https://calendly.com/digital-surges/30min'
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
        </Row>
      </Container>
    </section>
  );
}
