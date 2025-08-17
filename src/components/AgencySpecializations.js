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
        title: "Meta Ads campaign",
        description:
          "Our team of Meta Ads experts will take care of optimizing your ads and bringing you Leads on Meta platforms such as Facebook and Instagram",
        imgUrl: Img1,
      },
      {
        id: 2,
        title: "Influencer Marketing and Management ",
        description:
          "We will incorporate suitable Influencers for your brand to improve awareness, enable global reach and improve customer engagement",
        imgUrl: Img2,
      },
      {
        id: 3,
        title: "Brand Collabaration",
        description:
          "Elevate your business to new heights with our strategic partnership, where we optimize budgets, employ smart advertising strategies, and collaborate for cross-branding, joint marketing campaigns, influencer collabs, and festive pop-ups, maximizing your reach and impact.",
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
          title: "Content Optimisation",
          description:
            "Experience seamless content optimization across various platforms with our dedicated account manager, crafting daily copyright and design posts tailored to enhance your online presence throughout the month.",
          imgUrl: manage1,
        },
        {
          id: 2,
          title: "Photo and Video Creation",
          description:
            "Capture the essence of your brand with our dedicated photography and videography team, ensuring a month-long stream of professionally crafted visuals tailored for content optimization across various platforms.",
          imgUrl: manage2,
        },
        {
          id: 3,
          title: "Community Engagement",
          description:
            "Foster meaningful connections and enhance your online community with our dedicated team, orchestrating engaging interactions and valuable content across various platforms throughout the month, creating a vibrant digital space for your brand.",
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
                <Row className='animate_animated animate_pulse'>
                  {jobs.map((item, index) => {
                    return <JobCard key={item.id} {...item} />;
                  })}
                </Row>
              </Tab>

              <Tab eventKey='3' title='Content Creation'>
                <Row className='animate_animated animate_pulse'>
                  {jobs3.map((item, index) => {
                    return <JobCard key={item.id} {...item} />;
                  })}
                </Row>
              </Tab>
              <Tab eventKey='2' title='Web Development'>
                <Row className='animate_animated animate_pulse'>
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