import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row gy-4">
        <div className="col-12 col-md-12 col-lg-7 ">
          <p className="copy">© Lynchs Real Estate | All rights reserved</p>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="footer_content">
            <div className="newsletter">
              <p>Subscribe to our newsletter</p>
              <input
                type="text"
                className="newsletter_input"
                placeholder="Enter email address"
              />
            </div>
            <div className="mt-auto">
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-2">
          <div className="footer_content social_links_container">
            <div className="social_links">
              <p>View our listings</p>
              <ul>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
              </ul>
            </div>
            <p className="mt-auto">Site by LBD STUDIOS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
