import React, { useState, useEffect } from "react";
import "./footer.css";

const SocialLinks = () => {
  return (
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
  );
};

const Footer = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="footer">
      <div className="row gy-4">
        <div className="col-12 col-md-12 col-lg-7 copyright">
          <p className="copy">© Lynchs Real Estate | All rights reserved</p>
        </div>
        {isSmallScreen && (
          <div className="col-12">
            <SocialLinks />
          </div>
        )}
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
        <div className="col-12 col-md-6 col-lg-2 social_links_container">
          <div className="footer_content social_links_container">
            {!isSmallScreen && <SocialLinks />}
            <p className="mt-auto">Site by LBD STUDIOS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
