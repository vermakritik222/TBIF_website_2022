import React from "react";
import FacilitiesCard from "../../components/FacilitiesCard/FacilitiesCard";
import facilitiesData from "../../data/facilities.json";

import "./Facilities.scss";

function Facilities() {
  return (
    <div className="container facilities">
      {facilitiesData.map((el) => (
        <FacilitiesCard title={el.title} dis={el.dis} img={el.img} />
      ))}
    </div>
  );
}

export default Facilities;
