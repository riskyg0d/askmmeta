import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle} from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'
export const  Banner =() =>{
    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Elevate", "Enhance", "Empower"];
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
                {`Your Ideas `}{" "}
              </h1>
              <p className='animate__animated animate__bounceIn'>
              Welcome to AskMMeta, every brand's marketing dream team. We are your dynamic partner in the world of marketing excellence. "Asking More, Achieving Beyond," encapsulates the essence of our approach — we believe that by daring to ask the right questions, we can unlock boundless possibilities and achieve unprecedented success. Based in the vibrant city of Mumbai, India we are a forward-thinking marketing agency with a global vision.
              </p>
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
