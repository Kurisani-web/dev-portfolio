import React from "react";
import degreeClg from "../images/degree-college.webp";
import hscClg from "../images/hsc-college.jpg";

export default function Education() {
  return (
    <div className="education-section">
      <div className="header">
        <h2>My Education</h2>
        <p>
          Education Is Not The Learning Of Facts, But The Training Of The Mind
          To Think.
        </p>
      </div>
      <div className="education-list">
        <ul>
          <li>
            <div className="education-card">
              <div className="img">
                <img src={degreeClg} alt="" />
              </div>
              <div className="details">
                <h4>Bachelor of Science in Computer Science</h4>
                <small>
                  K.M. Agrawal College of Arts, Commerce and Science (Kalyan |
                  Maharashtra)
                </small>
                <p>
                  Pursuing Bachelor of Science in Computer Science at K.M.
                  Agrawal College, honing my skills in programming, data
                  structures, algorithms, and software development.
                </p>
                <span>2021-2024</span>
              </div>
            </div>
          </li>
          <li>
            <div className="education-card">
              <div className="img">
                <img src={hscClg} alt="" />
              </div>
              <div className="details">
                <h4>HSC in Science</h4>
                <small>
                  Hill Spring International Jr. College of Science and Commerce
                  (Kalyan | Maharashtra)
                </small>
                <p>
                  Graduated with a Higher Secondary Certificate (HSC) in Science
                  from Hill Spring International Jr. College of Science and
                  Commerce
                </p>
                <span>2019-2021</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
