import React from "react";
import reactjs from "../images/languages/reactjs.png";
import expressjs from "../images/languages/expressjs.png";
import nodejs from "../images/languages/nodejs.png";
import html5 from "../images/languages/html-5.png";
import css3 from "../images/languages/css3.png";
import bootstrap from "../images/languages/bootstrap.png";
import tailwindcss from "../images/languages/tailwindcss.png";
import javascript from "../images/languages/javascript.png";
import php from "../images/languages/php.png";
import mysql from "../images/languages/mysql.png";
import mongodb from "../images/languages/mongodb.png";
import github from "../images/languages/github.png";
import git from "../images/languages/git.png";

export default function MySkills() {
  return (
    <div className="myskill-section">
      <div className="header">
        <h2>My Skills</h2>
        <p className="text-muted">
          I build beautiful and functional web applications 
          using the following programming languages, frameworks, 
          and tools.
        </p>
      </div>
      <div className="section-container">
        <div className="skill-container">
          <div className="skill-card">
            <figure>
              <img src={reactjs} alt="" />
            </figure>
            <h4>ReactJS</h4>
          </div>
          <div className="skill-card">
            <figure>
              <img src={expressjs} alt="" />
            </figure>
            <h4>ExpressJS</h4>
          </div>
          <div className="skill-card">
            <figure>
              <img src={nodejs} alt="" />
            </figure>
            <h4>NodeJS</h4>
          </div>
          <div className="skill-card">
            <figure>
              <img src={html5} alt="" />
            </figure>
            <h4>HTML5</h4>
          </div>
          <div className="skill-card">
            <figure>
              <img src={css3} alt="" />
            </figure>
            <h4>CSS3</h4>
          </div>
          <div className="skill-card">
            <figure>
              <img src={bootstrap} alt="" />
            </figure>
            <h4>Bootstrap</h4>
          </div>
          <div className="skill-card">
            <figure>
              <img src={tailwindcss} alt="" />
            </figure>
            <h4>Tailwind CSS</h4>
          </div>
          <div className="skill-card">
            <figure>
              <img src={javascript} alt="" />
            </figure>
            <h4>JavaScript</h4>
          </div>
          <div className="skill-card">
            <figure>
              <img src={php} alt="" />
            </figure>
            <h4>PHP</h4>
          </div>
          <div className="skill-card">
            <figure>
              <img src={mysql} alt="" />
            </figure>
            <h4>MySQL</h4>
          </div>
          <div className="skill-card">
            <figure>
              <img src={mongodb} alt="" />
            </figure>
            <h4>MongoDB</h4>
          </div>
          <div className="skill-card">
            <figure>
              <img src={github} alt="" />
            </figure>
            <h4>Github</h4>
          </div>
          <div className="skill-card">
            <figure>
              <img src={git} alt="" />
            </figure>
            <h4>Git VCS</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
