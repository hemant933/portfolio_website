import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import github from '../assets/img/github.svg';
import leetcode from '../assets/img/leetcode.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
                <a href="https://www.linkedin.com/in/hemant-chaudhary-616874212/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/hemant933" target="_blank"><img src={github} alt="" /></a>
                <a href="https://leetcode.com/u/hemantchaudhary/" target="_blank"><img src={leetcode} alt="" /></a>
              </div>
            <p>Made By Hemant Chaudhary</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
