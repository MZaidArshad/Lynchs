import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick theme CSS
import "./slider.css"; // Your custom styles
import img1 from "../../assets/06 LIST OF PROPERTY/(01) 6 Hughes Street, Brighton East, Vic 3187.jpg";
import img2 from "../../assets/06 LIST OF PROPERTY/(02) 3_21 Barry Street, Bentleigh, Vic 3204.jpg";
import img3 from "../../assets/06 LIST OF PROPERTY/(03) 1_18 Margaret St, Moorabbin, Vic 3189.jpeg";
import img4 from "../../assets/06 LIST OF PROPERTY/(04) 21 swan Rd Murrumbeena.jpg";
import img5 from "../../assets/06 LIST OF PROPERTY/(05) 3_39 Cromer Rd, Beaumaris, Vic 3193.jpg";

const CustomSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null); // Create a ref for the slider

  const slides = [
    { id: 1, content: "6 Hughes Street, Brighton East", img: img1 },
    { id: 2, content: "1/18 Margaret St, Moorabbin, Vic 3189", img: img2 },
    { id: 3, content: "6 Hughes Street, Brighton East, Vic 3187", img: img3 },
    { id: 4, content: "21 Swan Road, Murrumbeena, Vic 3163", img: img4 },
    { id: 5, content: "3/39 Cromer Rd, Beaumaris, Vic 3193", img: img5 },
  ];

  const settings = {
    centerMode: true,
    centerPadding: "15%", // Show part of next/previous slide on larger screens
    slidesToShow: 1, // Default to showing one slide
    focusOnSelect: true,
    infinite: true,
    autoplay: true, // Enable auto scroll
    autoplaySpeed: 3000, // 3 seconds delay
    afterChange: (current) => setCurrentSlide(current), // Update active slide
    ref: sliderRef, // Bind the slider to the ref
    arrows: false, // Hide next/prev buttons
    responsive: [
      {
        breakpoint: 768, // For mobile devices
        settings: {
          centerMode: false, // Disable center mode on mobile
          slidesToShow: 1, // Show only 1 slide
          centerPadding: "0", // Remove padding for mobile view
        },
      },
    ],
  };

  // Handler to go to a specific slide when an indicator is clicked
  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <img src={slide.img} alt="" />
            <p>{slide.content}</p>
          </div>
        ))}
      </Slider>

      {/* Slider indicators */}
      <div className="slider-indicators">
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            className={`indicator ${currentSlide === index ? "active" : ""}`}
            onClick={() => goToSlide(index)} // Navigate to slide when clicked
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
