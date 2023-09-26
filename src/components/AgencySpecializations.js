import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import JobCard from './JobCard';
import colorSharp2 from '../assets/img/color-sharp2.png';


import Img1 from "../assets/img/skyRocket.png";
import Img2 from "../assets/img/meter4.png";
import Img3 from "../assets/img/google.png";

import proj1 from "../assets/img/project-img1.png";
import proj2 from "../assets/img/project-img2.png";
import proj3 from "../assets/img/project-img3.png";


import manage1 from "../assets/img/FacebookM.png";
import manage2 from "../assets/img/InstagramM.png";
import manage3 from "../assets/img/TiktokM.jpg";



export default function AgencySpecializations() {
      const [key, setKey] = useState("1");
    const jobs = [
      {
        id: 1,
        title: "Facebook ads",
        description:
          "Our team of Facebook Ads experts will take care of optimizing your ads and bringing you Leads",
        imgUrl: Img1,
      },
      {
        id: 2,
        title: "TikTok ads",
        description:
          "We will run TikTok ads for you if we think this would benefit your business much more than Facebook ads",
        imgUrl: Img2,
      },
      {
        id: 3,
        title: "Google ads",
        description:
          "We will run Google Ad words for you if we think this would skyrocket your business much more and we'll optimize the buget and choose smart ways to get you closer to your goals",
        imgUrl: Img3,
      },
    ];

     const jobs2 = [
       {
         id: 1,
         title: "WordPress web development",
         description:
           "We will make your WordPress Website For you",
         imgUrl: proj1,
       },
       {
         id: 2,
         title: "High-end Websites",
         description:
           "Our software engineers will Create your MERN stack website with the functionalities you request, you provide the design.",
         imgUrl: proj2,
       },
       {
         id: 3,
         title: "Mobile Applications",
         description:
           "Our team will create your mobile app for you, you provide the Design.",
         imgUrl: proj3,
       },
     ];

      const jobs3 = [
        {
          id: 1,
          title: "facebook Management",
          description:
            "We will assign a Facebook account manager throughout the whole month, to copywright and Design 1 Post per Day",
          imgUrl: manage1,
        },
        {
          id: 2,
          title: "Instagram management",
          description:
            "We will assign an Instagram account manager throughout the whole month, to copywright and Design 1 Post per Day",
          imgUrl: manage2,
        },
        {
          id: 3,
          title: "Tik Tok management",
          description:
            "We will assign a Tik Tok account manager throughout the whole month,to copywright and Design 1 Post per Day, Videos Included",
          imgUrl: manage3,
        },
      ];

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>
            <h2>Agency Specializations</h2>
            <p>A more in depth look at our services</p>
            <Tabs
              id='projects-tabs pills-tab'
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className='nav-pills mb-5 jusify-content-center align-items-center'>
              <Tab eventKey='1' title='Social Media Marketing'>
                <Row className='animate__animated animate__pulse'>
                  {jobs.map((item, index) => {
                    return <JobCard key={item.id} {...item} />;
                  })}
                </Row>
              </Tab>

              <Tab eventKey='3' title='Social Media Management'>
                <Row className='animate__animated animate__pulse'>
                  {jobs3.map((item, index) => {
                    return <JobCard key={item.id} {...item} />;
                  })}
                </Row>
              </Tab>
              <Tab eventKey='2' title='Web development'>
                <Row className='animate__animated animate__pulse'>
                  {jobs2.map((item, index) => {
                    return <JobCard key={item.id} {...item} />;
                  })}
                </Row>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2} alt='' />
    </section>
  );
}
