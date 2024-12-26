import { Col } from "react-bootstrap";
import github from '../assets/img/github.svg';
import li from "../assets/img/live.svg"

export const ProjectCard = ({ title, description, imgUrl ,link, live}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span></span>
          <div className="social-icon">
                
                <a href={link} target="_blank"><img src={github} alt="" /></a>
                <a href={live} target="_blank"><img src={li} alt="" /></a>
                
              </div>
        </div>
      </div>
      <p>{description}</p>
    </Col>
  )
}
