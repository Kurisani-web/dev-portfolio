import React from "react";
import { Link } from "react-router-dom";
import AboutImg from "../images/profile.jpeg";
export default function About() {
  return (
    <div className="about-section">
      <div className="profile-img">
        <img src={AboutImg} alt="" />
      </div>
      <div className="about-me">
        <h2>About Me</h2>
        <h3>I'm Pawan Kumavat</h3>
        <small>Fullstack Developer</small>
        <p>
          I am a Full-Stack developer based in Pune, India. I am an Information
          Technology undergraduate from SPPU. I am very passionate about
          improving my coding skills & developing applications & websites. I
          build WebApps and Websites using MERN Stack. Working for myself to
          improve my skills. Love to build Full-Stack clones.
        </p>
        <ul className="contact">
          <li>
            <i className="bi bi-telephone-fill"></i>
            <Link>+91 9619579304</Link>
          </li>
          <li>
            <i className="bi bi-envelope-fill"></i>
            <Link>pawankumavat042@gmail.com</Link>
          </li>
          <li>
            <i className="bi bi-geo-alt-fill"></i>
            <Link>Thane,India</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
