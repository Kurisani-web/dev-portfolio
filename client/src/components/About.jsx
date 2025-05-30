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
        <h3>I'm Kurisani Maluleke</h3>
        <small>Fullstack Developer</small>
        <p>
          I'm Creative Full-Stack Developer and UI/UX Designer from Limpopo, South Africa, working in web and app development. 
          I enjoy turning complex problems into simple, beautiful and intuitive designs. 
          My job is to build your website and app so that it is functional and user-friendly but at the same time attractive. 
          Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. 
          My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
        </p>
        <ul className="contact">
          <li>
            <i className="bi bi-telephone-fill"></i>
            <a style={{textDecoration: "underline" }} href="tel:+27606031205">+27 60 603 1205</a>
          </li>
          <li>
            <i className="bi bi-envelope-fill"></i>
            <a style={{textDecoration: "underline" }} href="mailto:kurisanimaluleke77@gmail.com">kurisanimaluleke77@gmail.com</a>
          </li>
          <li>
            <i className="bi bi-geo-alt-fill"></i>
            <a 
              style={{textDecoration: "underline" }}
              href="https://www.google.com/maps/search/?api=1&query=Limpopo%2C+South+Africa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Limpopo, South Africa
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
