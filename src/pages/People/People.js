import React from "react";
import TeamCard from "../../components/shared/TeamCard/TeamCard";
import teamData from "../../data/team.json";
import mentorsData from "../../data/mentors.json";
import "./People.scss";

function People() {
  return (
    <div className="people">
      <h1>Team</h1>
      <div className="">
        {teamData.map((el, idx) => (
          <TeamCard
            key={idx}
            name={el.name}
            title={el.title}
            linkedin={el.linkedin}
            img={"./img/default_person.jpg"}
            // img={el.image}
          />
        ))}
      </div>
      <h1>Mentors</h1>
      <div className="" style={{ marginBottom: "80px" }}>
        {mentorsData.map((el, idx) => (
          <TeamCard
            key={idx}
            name={el.name}
            title={el.title}
            linkedin={el.linkedin}
            img={"./img/default_person.jpg"}
            // img={el.image}
          />
        ))}
      </div>
    </div>
  );
}

export default People;
