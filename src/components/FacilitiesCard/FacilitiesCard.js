import React from "react";
import "./FacilitiesCard.scss";

function FacilitiesCard(props) {
  const { title, dis, img } = props;
  return (
    <div className="facilitiesCard">
      <div className="facilitiesCard__imgCover">
        <img src={img} alt="" />
      </div>
      <div className="facilitiesCard__content">
        <h5 className="facilitiesCard__header">{title}</h5>
        <p className="facilitiesCard__pera">{dis}</p>
      </div>
    </div>
  );
}

export default FacilitiesCard;
