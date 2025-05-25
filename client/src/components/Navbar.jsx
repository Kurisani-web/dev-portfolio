import React, { useState } from 'react';
import {Link} from 'react-router-dom';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
            <Link to="">Kurisani</Link>
        </div>
        <ul className={`nav-link ${isOpen && 'open'}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/skill">Skill</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <div className="downloadbtn">
          <button className="btn btn-primary"><Link to="" className="link">Start Your Order</Link></button>
        </div>
        </ul>
        
        <button className="navbar-toggle" onClick={toggle}>
          {isOpen ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
        </button>
      </nav>
    </div>
  )
}
