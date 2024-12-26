
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import nodejs from "../assets/img/nodejs.svg";
import react from "../assets/img/react.svg";
import java from "../assets/img/java.svg";
import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import js from "../assets/img/javascript.svg";
import npm from "../assets/img/npm.svg";
import ts from "../assets/img/ts.svg";
import yarn from "../assets/img/yarn.svg"
import express from "../assets/img/express.svg";
import mongo from "../assets/img/mongodb.svg";
import postgres from "../assets/img/postgres.svg";
import docker from "../assets/img/docker.svg";
import kubernetes from "../assets/img/kubernetrs.svg";
import graph from "../assets/img/grpah.svg";
import git from "../assets/img/github.svg";
import hiber from "../assets/img/hibernate.svg"
import solidity from "../assets/img/solidity.svg";
import mysql from "../assets/img/mysql.svg"
import c from "../assets/img/c.svg"




export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <div className="container skill-grid">
                <div className="skill-card">
                  <img
                    src={c}
                    alt="C Language"
                    className="skill-icon"
                  />
                  <p>C++ Language</p>
                </div>
                <div className="skill-card">
                  <img
                    src={js}
                    alt="TypeScript"
                    className="skill-icon"
                  />
                  <p>JavaScript</p>
                </div>
                <div className="skill-card">
                  <img src={express} alt="Express" className="skill-icon" />
                  <p>Express</p>
                </div>
                <div className="skill-card">
                  <img src={nodejs} alt="Express" className="skill-icon" />
                  <p>Nodejs</p>
                </div>
                <div className="skill-card">
                  <img src={mongo} alt="Express" className="skill-icon" />
                  <p>MongoDb</p>
                </div>
                <div className="skill-card">
                  <img src={react} alt="Express" className="skill-icon" />
                  <p>React</p>
                </div>
                <div className="skill-card">
                  <img src={mysql} alt="Express" className="skill-icon" />
                  <p>MySql</p>
                </div>
                <div className="skill-card">
                  <img src={postgres} alt="Express" className="skill-icon" />
                  <p>PostgreSQL</p>
                </div>
                <div className="skill-card">
                  <img src={kubernetes} alt="Express" className="skill-icon" />
                  <p>Kubernetes</p>
                </div>
                <div className="skill-card">
                  <img src={docker} alt="Express" className="skill-icon" />
                  <p>Docker</p>
                </div>
                <div className="skill-card">
                  <img src={graph} alt="Express" className="skill-icon" />
                  <p>GraphQL</p>
                </div>
                <div className="skill-card">
                  <img src={yarn} alt="Express" className="skill-icon" />
                  <p>Yarn</p>
                </div>
                <div className="skill-card">
                  <img src={ts} alt="Express" className="skill-icon" />
                  <p>TypeScript</p>
                </div>
                <div className="skill-card">
                  <img src={html} alt="Express" className="skill-icon" />
                  <p>HTML</p>
                </div>
                <div className="skill-card">
                  <img src={css} alt="Express" className="skill-icon" />
                  <p>CSS</p>
                </div>
                <div className="skill-card">
                  <img src={npm} alt="Express" className="skill-icon" />
                  <p>NPM</p>
                </div>
                <div className="skill-card">
                  <img src={git} alt="Express" className="skill-icon" />
                  <p>Github</p>
                </div>
                <div className="skill-card">
                  <img src={solidity} alt="Express" className="skill-icon" />
                  <p>Solidity</p>
                </div>
                <div className="skill-card">
                  <img src={java} alt="Express" className="skill-icon" />
                  <p>Java</p>
                </div>
                <div className="skill-card">
                  <img src={hiber} alt="Express" className="skill-icon" />
                  <p>Hibernates</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
