import react from "react";
import { Container, Row, Col } from "react-bootstrap";
import myself from "../assets/img/mySelf.jpg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

function About() {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>About Me</h2>
              <Container>
                <Row className="aligh-items-center">
                  <Col xs={30} md={4} xl={5} className="new">
                   
                     
                          <img
                            className="my_img"
                            src={myself}
                            alt="Header Img"
                          />
                       
                    
                  </Col>
                  <Col s={30} md={8} xl={5}>
                    <TrackVisibility>
                      {({ isVisible }) => (
                        <div
                          className={
                            isVisible ? "animate__animated animate__fadeIn" : ""
                          }
                        >
                          <div className="about-summary">
                            <p>
                              I am Hemant Chaudhary, a passionate B.Tech student
                              specializing in Computer Science and Engineering
                              (AI & ML) with a proven track record in full-stack
                              development and blockchain solutions. I have
                              worked on innovative projects such as{" "}
                              <strong>CryptoView</strong> (a cryptocurrency
                              trading platform),
                              <strong>Connect</strong> (a chat application for
                              students), and <strong>AnimeNexa</strong> (a
                              decentralized social media platform for anime
                              fans).
                            </p>
                            
                          </div>
                        </div>
                      )}
                    </TrackVisibility>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
