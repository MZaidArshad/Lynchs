import React from "react";
import "./teamCard.css";

const TeamCard = ({ img, name, designation, phone, email }) => {
  return (
    <div className="teamCard">
      <div className="team_img">
        <img src={img} alt="" loading="lazy" />
      </div>
      <div className="teamCard_content">
        <p className="name">{name}</p>
        <p className="designation mb-3">{designation}</p>
        <p className="phone">{phone}</p>
        <p className="email">{email}</p>
      </div>
    </div>
  );
};

export default TeamCard;
