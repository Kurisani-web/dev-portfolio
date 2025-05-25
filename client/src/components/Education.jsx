import React from "react";
import degreeClg from "../images/degree-college.webp";
import hscClg from "../images/hsc-college.jpg";

export default function Education() {
  return (
    <div className="education-section">
      <div className="header">
        <h2>My Education</h2>
        <p>
          Education isn't just about memorizing 
          facts—it's about training the mind to think 
          critically and creatively.
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
                <h4>Water Science</h4>
                <small>
                  Tshwane University of Technology (Arcadia Campus)
                </small>
                <p>
                  Currently studying Water Sciences at TUT, focusing 
                  on water resource management, environmental sustainability, 
                  and scientific research methods to tackle real-world water 
                  challenges.
                </p>
                <span>Currently</span>
              </div>
            </div>
          </li>
          <li>
            <div className="education-card">
              <div className="img">
                <img src={hscClg} alt="" />
              </div>
              <div className="details">
                <h4>National Senior Certificate</h4>
                <small>
                  Mahuntsi Secondary School 
                  (Limpopo | South Africa)
                </small>
                <p>
                  Completed secondary education 
                  with a focus on Science at Mahuntsi 
                  Secondary School, building a strong 
                  foundation in physical sciences, life sciences, 
                  and mathematics.
                </p>
                <span>2019-2023</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
