import React from "react";
import "./TeamCard.css";

function TeamCard() {
  return (
    <div class="outTeam">
      <div class="outTeam__card">
        <img
          class="outTeam__cardImg"
          src="./img/default_person.jpg"
          alt=""
          srcset=""
        />
        <div class="outTeam__cardName">Name</div>
        <div class="outTeam__cardTitle">Frontend Developer</div>
        <div class="outTeam__cardDetails">
          <i class="fab fa-github"></i>
          <i class="fab fa-linkedin"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-facebook"></i>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
