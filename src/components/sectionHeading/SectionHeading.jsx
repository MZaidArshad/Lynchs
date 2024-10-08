import React from "react";

const SectionHeading = ({ heading }) => {
  return (
    <div className="container">
      <p
        style={{
          fontFamily: "neue-haas-grotesk-display, sans-serif",
          fontSize: "23px",
          textAlign: "left",
          padding: "60px 10px",

          marginBottom: 0,
        }}
      >
        {heading}
      </p>
    </div>
  );
};

export default SectionHeading;
