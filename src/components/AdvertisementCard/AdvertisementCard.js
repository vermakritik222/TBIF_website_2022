import React from "react";
import { useHistory } from "react-router-dom";
import "./AdvertisementCard.scss";
function AdvertisementCard() {
  const history = useHistory();
  return (
    <a
      href="/img/Advertisement/CEO-advertisement.jpeg"
      className="advertisementCard_a"
    >
      <div className="advertisementCard">
        <div className="advertisementCard__top">
          <img src="/img/advertisementCard2.png" alt="" />
          <h4>Chief Executive Officer (CEO)</h4>
        </div>
        <p>
          We are looking for a Chief Executive Officer (CEO) to handle its day
          to day operations and help establish the incubator as an exemplary
          leader in the domain of technology-oriented and engineering start-ups.
        </p>
        <a href="/img/Advertisement/CEO-advertisement.jpeg">
          Click here for more information
        </a>
      </div>
    </a>
  );
}

export default AdvertisementCard;
