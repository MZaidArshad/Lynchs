import React, { useState, useEffect } from "react";
import TeamCard from "./TeamCard";
import "./team.css";
import img1 from "../../assets/Team/1.jpeg";
import img2 from "../../assets/Team/2.jpeg";
import img3 from "../../assets/Team/3.jpeg";
import img4 from "../../assets/Team/4.jpeg";
import img5 from "../../assets/Team/5.jpeg";
import img6 from "../../assets/Team/6.jpeg";
import img7 from "../../assets/Team/7.jpeg";
import img8 from "../../assets/Team/8.jpeg";
import img9 from "../../assets/Team/9.jpeg";

const Team = () => {
  const teamDetails = [
    {
      name: "Tom Fitzgerald",
      img: img5,
      designation: "Licensed Estate Agent & Auctioneer",
      phone: "0418 334 264",
      email: "tom@lynchs.com",
    },
    {
      name: "Kieran Lynch",
      img: img1,
      designation: "Director",
      phone: "0430 306 801",
      email: "kieran@lynchs.com",
    },
    {
      name: "Timothy Lynch",
      img: img7,
      designation: "Director",
      phone: "0418 351 441",
      email: "timothy@lynchs.com",
    },
    {
      name: "Luke Abbey",
      img: img8,
      designation: "Sales Consultant",
      phone: "0425 854 603",
      email: "luke@lynchs.com",
    },
    {
      name: "Harry Ridder",
      img: img4,
      designation: "Sales Consultant",
      phone: "0437 527 109",
      email: "harry@lynchs.com",
    },
    {
      name: "Brooke Simmonds",
      img: img6,
      designation: "Head of Property Management",
      phone: "0488 148 498",
      email: "brooke@lynchs.com",
    },
    {
      name: "Jeremy Smith",
      img: img2,
      designation: "Property Manager",
      phone: "0437 208 267",
      email: "jeremy@lynchs.com",
    },
    {
      name: "Brigid Lynch",
      img: img9,
      designation: "Office Manager",
      phone: "0408 999 163",
      email: "brigid@lynchs.com",
    },
    {
      name: "Maddi Cox",
      img: img3,
      designation: "Administration",
      phone: "maddi@lynchs.com",
      email: "0405 095 291",
    },
  ];

  // State to control the number of visible cards
  const [visibleTeamMembers, setVisibleTeamMembers] = useState(8); // Default visible members
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setVisibleTeamMembers(4);
    }
  }, [isMobile]);

  // Check if the screen is mobile size
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobile(window.innerWidth <= 768); // Assuming mobile if width <= 768px
    };

    // Call on component mount
    checkMobileView();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobileView);

    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

  // Handle Load More button click
  const handleLoadMore = () => {
    setVisibleTeamMembers(teamDetails.length); // Show all team members
  };

  return (
    <div className="container-fluid team">
      <div className="row gy-5 gx-3">
        {teamDetails.slice(0, visibleTeamMembers).map((item, index) => (
          <div key={index} className="col-6 col-md-3 col-lg-3">
            <TeamCard
              img={item.img}
              name={item.name}
              designation={item.designation}
              phone={item.phone}
              email={item.email}
            />
          </div>
        ))}
      </div>

      {visibleTeamMembers < teamDetails.length && (
        <div className="loadmore_btn mt-5">
          <button className="btn btn-dark" onClick={handleLoadMore}>
            View more
          </button>
        </div>
      )}
    </div>
  );
};

export default Team;
