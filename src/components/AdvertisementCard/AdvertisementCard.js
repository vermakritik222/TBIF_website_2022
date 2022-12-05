import React from "react";
import "./AdvertisementCard.scss";

function AdvertisementCard(props) {
  const {url,title,text} = props
  return (
    <a
      href={url}
      className="advertisementCard_a"
    >
      <div className="advertisementCard">
        <div className="advertisementCard__top">
          <img src="/img/advertisementCard2.png" alt="" />
          <h4>{title}</h4>
        </div>
        <p>
         {text}
        </p>
        <a href={url}>
          Click here for more information
        </a>
      </div>
    </a>
  );
}

export default AdvertisementCard;
