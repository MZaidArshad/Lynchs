import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleContactClick = () => {
    setShowSidebar(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert("Thankyou for contacting us!");
  };

  const handleDown = () => {
    window.scrollTo({
      top: 500,
      behavior: "smooth", // Optional: to make the scroll smooth
    });
  };

  return (
    <div className="header">
      <div className="video-container">
        <video autoPlay muted loop id="background-video">
          <source
            src="/assets/07 VIDEO/Lynchs_Desktop_No Audio.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="overlay"></div>

        {/* Content over the video */}
        <div className="content">
          <div className="logo">
            <img
              src="assets/01 LOGO/PNG (TRANSPARENT)/LYNCHS_RGB_BRANDMARK_WHITE.png"
              alt=""
            />
          </div>
          <p>Empowering possibilities through real estate.</p>
          <div className="header_bottom">
            <div className="menu">
              <a href="#">Listings</a>
              <button onClick={handleContactClick}>Contact</button>
            </div>

            <div className="down_arrow">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOSIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDI5IDE3IiBmaWxsPSJub25lIj4KICA8cGF0aCBkPSJNMSAxTDE0LjUgMTVMMjggMSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPg=="
                alt=""
                onClick={handleDown}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`sidebar ${showSidebar ? "show" : ""}`}>
        <div className="closeBtn">
          <button onClick={() => setShowSidebar(false)}>close</button>
        </div>
        <div className="sidebar_content">
          <div className="address">
            <p>
              10 Station St <br /> Moorabbin VIC 3189 lynchs.com
            </p>
            <p className="mt-4">03 95551911</p>
            <p>reception@lynchs.com</p>
          </div>

          <form className="py-4 rounded-3" onSubmit={handleSubmit}>
            <div className="row gy-2 mb-3">
              <div className="col-12">
                <input
                  type="text"
                  className="form-control bg-dark text-light border-light"
                  placeholder="Name"
                  id="name"
                />
              </div>

              <div className="col-12 col-md-6 col-lg-6">
                <input
                  type="email"
                  className="form-control bg-dark text-light border-light"
                  id="email"
                  placeholder="Email"
                />
              </div>

              <div className="col-12 col-md-6 col-lg-6">
                <input
                  type="tel"
                  className="form-control bg-dark text-light border-light"
                  id="phone"
                  placeholder="Phone"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label">Enquiry Type</label>
              <div className="d-flex flex-wrap">
                <div className="form-check me-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="buying"
                  />
                  <label className="form-check-label" for="buying">
                    Buying
                  </label>
                </div>
                <div className="form-check me-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="selling"
                  />
                  <label className="form-check-label" for="selling">
                    Selling
                  </label>
                </div>
                <div className="form-check me-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="rentals"
                  />
                  <label className="form-check-label" for="rentals">
                    Rentals
                  </label>
                </div>
                <div className="form-check me-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="propertyManagement"
                  />
                  <label className="form-check-label" for="propertyManagement">
                    Property Management
                  </label>
                </div>
                <div className="form-check me-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="press"
                  />
                  <label className="form-check-label" for="press">
                    Press
                  </label>
                </div>
                <div className="form-check me-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="appraisals"
                  />
                  <label className="form-check-label" for="appraisals">
                    Appraisals
                  </label>
                </div>
                <div className="form-check me-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="others"
                  />
                  <label className="form-check-label" for="others">
                    Others
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <textarea
                className="form-control bg-dark text-light border-light"
                id="notes"
                rows="4"
                placeholder="Notes (Optional)"
              ></textarea>
            </div>

            <div className="mb-4 form-check">
              <input type="checkbox" className="form-check-input" id="terms" />
              <label className="form-check-label" for="terms">
                I agree to{" "}
                <a href="#" className="text-light text-decoration-underline">
                  Terms & Conditions
                </a>
              </label>
            </div>

            <button type="submit" className="btn btn-outline-light w-50">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
