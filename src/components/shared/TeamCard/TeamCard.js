import React from "react";
import { Link } from "react-router-dom";
import "./TeamCard.css";

function TeamCard(props) {
  const { name, title, img, linkedin, twitter, github, facebook } = props;
  return (
    <div className="outTeam">
      <div className="outTeam__card">
        <img className="outTeam__cardImg" src={img} alt={name} />
        <div className="outTeam__cardName">{name}</div>
        <div className="outTeam__cardTitle">{title}</div>
        <div className="outTeam__cardDetails">
          {github && (
            <Link className="teamCard__link" to={github}>
              <i className="fab fa-github"></i>
            </Link>
          )}

          <Link className="teamCard__link" to={linkedin ? linkedin : "#"}>
            <i className="fab fa-linkedin"></i>
          </Link>

          <Link className="teamCard__link" to={twitter ? twitter : "#"}>
            <i className="fab fa-twitter"></i>
          </Link>

          {facebook && (
            <Link className="teamCard__link" to={facebook}>
              {" "}
              <i className="fab fa-facebook"></i>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
