import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-up">
          <div className="description">
            <h4>Pawan's Portfolio</h4>
            <p>
              Thank you for visiting my personal portfolio website. Connect with
              me over socials.
            </p>
            <p>
              Keep Rising 🚀. Connect with me over social and coding platform.
            </p>
          </div>
          <div className="quick-links">
          <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">About</Link>
              </li>
              <li>
                <Link to="">Service</Link>
              </li>
              <li>
                <Link to="">Portfolio</Link>
              </li>
              <li>
                <Link to="">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="contact-info">
          <h4>Contact Info</h4>
            <ul className="contact">
              <li>
                <i className="bi bi-telephone-fill"></i><Link>+91 9619579304</Link>
              </li>
              <li>
                <i className="bi bi-envelope-fill"></i><Link>pawankumavat042@gmail.com</Link>
              </li>
              <li>
                <i className="bi bi-geo-alt-fill"></i><Link>Thane,India</Link>
              </li>
            </ul>
            <ul className="social-link">
              <li>
                <Link to="">
                  <i className="bi bi-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="">
                  <i className="bi bi-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="">
                  <i className="bi bi-github"></i>
                </Link>
              </li>
              <li>
                <Link to="">
                  <i className="bi bi-youtube"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p>Designed With <i className="bi bi-suit-heart-fill heart-beat"></i> By <Link>Pawan Kumavat</Link></p>
        </div>
      </footer>
    </>
  );
}
