import React from "react";
import { Link } from "react-router-dom";
import uideck from "../images/uideck.svg";
import tailgrids from "../images/tailgrids.svg";
import lineicons from "../images/lineicons.svg";
import ayroui from "../images/ayroui.svg";
import plainadmin from "../images/plainadmin.svg";
export default function MyClient() {
  return (
    <div className="myclient-section">
      <div className="section-header">
        <h2>Trusted By Leading Brands</h2>
        <p className="text-muted">
          Trusted by these amazing companies and 
          brands!
        </p>
      </div>
      <div className="client-list">
        <ul>
          <li>
            <Link to="">
              <img src={uideck} alt="" />
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={tailgrids} alt="" />
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={lineicons} alt="" />
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={ayroui} alt="" />
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={plainadmin} alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
