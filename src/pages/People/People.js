import React from "react";
import TeamCard from "../../components/shared/TeamCard/TeamCard";
import teamData from "../../data/team.json";
import mentorsData from "../../data/mentors.json";
import DIrectors from "../../data/board_of_governors.json";
import "./People.scss";

function People() {
  return (
    <div className="people">
      <h1>Directors</h1>
      <div className="">
        {DIrectors.map((el, idx) => (
          <TeamCard
            key={idx}
            name={el.name}
            title={el.title}
            linkedin={el.linkedin}
            // img={"./img/default_person.jpg"}
            img={el.image}
          />
        ))}
      </div>

      <h1>Dedicated Staff</h1>
      <div className="" style={{ marginBottom: "80px" }}>
        {teamData.map((el, idx) => (
          <TeamCard
            key={idx}
            name={el.name}
            title={el.title}
            linkedin={el.linkedin}
            // img={"./img/default_person.jpg"}
            img={el.image}
          />
        ))}
      </div>
    </div>
  );
}

export default People;
