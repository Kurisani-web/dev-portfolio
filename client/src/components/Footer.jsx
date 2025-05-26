import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-up">
          <div className="description">
            <h4>Kurisani's Portfolio</h4>
            <p>
              Thanks for stopping by my personal portfolio!
            </p>
            <p>
              Let’s keep rising 🚀 — feel free to 
              connect with me on social and coding platforms.
            </p>
          </div>
          {/*<div className="quick-links">
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
          </div>*/}
          <div className="contact-info">
          <h4>Contact Info</h4>
            <ul className="contact">
              <li>
                <i className="bi bi-telephone-fill"></i>
<Link
  to="#"
  onClick={() => (window.location.href = 'tel:+27606031205')}
  style={{ textDecoration: 'underline' }}
>
  +27 60 603 1205
</Link>
              </li>
              <li>
                <i className="bi bi-envelope-fill"></i>
<Link
  to="#"
  onClick={() => (window.location.href = 'mailto:kurisanimaluleke77@gmail.com')}
  style={{ textDecoration: 'underline' }}
>
  kurisanimaluleke77@gmail.com
</Link>
              </li>
              <li>
                <i className="bi bi-geo-alt-fill"></i><Link>Limpopo, South Africa</Link>
              </li>
            </ul>
            <ul className="social-link">
                  {/* <li>
                <Link to="">
                  <i className="bi bi-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="">
                  <i className="bi bi-facebook"></i>
                </Link>
              </li>*/}
              <li>
  <Link
    to="#"
    onClick={() =>
      window.open("https://wa.me/27606031205", "_blank", "noopener,noreferrer")
    }
  >
    <i className="bi bi-whatsapp"></i>
  </Link>
</li>
<li>
  <Link
    to="#"
    onClick={() =>
      window.open("https://www.youtube.com/@CheFu.", "_blank", "noopener,noreferrer")
    }
  >
    <i className="bi bi-youtube"></i>
  </Link>
</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
  <p>
    Kurisani Maluleke &copy; {new Date().getFullYear()} — All rights reserved.
  </p>
</div>
      </footer>
    </>
  );
}
