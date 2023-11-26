import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle} from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'
import { PopupModal } from "react-calendly";
export const  Banner =() =>{
    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Unconventional", "Daring", "certified", "Unsurpassed"];
    const [text,setText]= useState("polarizing");
    const period = 2000;
    const [delta,setDelta]= useState(300 - Math.random() * 100);

    useEffect(() =>{
let ticker = setInterval(()=>{
tick();
},delta)

return ( ) => (clearInterval( ticker))
    },[text])

const [isOpen, setIsOpen]=useState(false)

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => (prevDelta / 2));
      }

      if (!isDeleting && updatedText == fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText == "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };
  return (
    <div>
      <section className='banner' id='home'>
        <Container>
          <Row className='align-items-center'>
            <Col xs={12} md={6} cl={7}>
              <span className='tagline'>Welcome to AskMMeta </span>
              <h1>
                <span className='wrap'>{text} </span> <br />
                {` Services `}{" "}
              </h1>
              <p className='animate__animated animate__bounceIn'>
              AskMMeta is a dynamic and creative marketing agency based in Mumbai, India who specialises in crafting and executing strategic plans to promote and elevate businesses and brands. 
              In the realm of modern business, a top-tier marketing agency is not just an asset but a catalyst for unparalleled success.
              With a relentless pursuit of ROI and an unwavering commitment to staying at the forefront of algorithmic shifts, AskMMeta doesn't just elevate your brand; it propels it into the digital and traditional stratosphere, where business dreams become reality.
              Join hands with us, and let's embark on a journey where your business story is told vibrantly, where your overall visibility soars, and where your dreams of business dominance become a thrilling reality. Welcome to the future of AI based marketing; welcome to AskMMeta.
              </p>
              <Button onClick={() => setIsOpen(true)}>
                let's connect <ArrowRightCircle size={25} />
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
            </Col>
            <Col
              xs={12}
              md={6}
              cl={5}
              className='animate__animated animate__zoomIn'>
              <img src={headerImg} alt='header Image'></img>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
