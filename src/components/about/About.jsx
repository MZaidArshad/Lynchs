import React from "react";
import "./about.css";
import img from "../../assets/about.png";

const About = () => {
  return (
    <div className="container-fluid about">
      <div className="row gx-0">
        <div className="col-12 col-md-6 col-lg-6 ">
          <div className="about_image">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6 ">
          <div className="about_content">
            <div className="about_content_content">
              <p className="heading">
                We're not your run-of-the-mill real estate agency.
              </p>

              <p className="desc">
                Founded by the Lynch family, our guiding principle is clear: to
                empower possibilities through real estate. This vision extends
                far beyond ordinary property transactions. It's about crafting
                unique journeys of success, tailored to each individual our
                agency has the privilege of serving. We are driven by a
                commitment to unexpected care - not just in properties, but in
                people. We believe in the power of real estate to open doors to
                new opportunities and lay foundations for future growth.
                <br /> We blend an innovative approach with the timeless values
                of old-school service. Each client's story is unique, and we're
                here to navigate the complexities of buying, selling, or leasing
                with a fresh perspective, Our team is committed to advice that
                resonates with your individual story, steering clear of
                one-size- fits-all solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
