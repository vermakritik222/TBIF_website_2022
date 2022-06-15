import React from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import AboutBanner from "../../components/AboutBanner/AboutBanner";
import TeamCard from "../../components/shared/TeamCard/TeamCard";
import boardOfGovernorsData from "../../data/board_of_governors.json";
import "./About.scss";

function About() {
  return (
    <div className="about">
      <AboutBanner />
      <AboutUs />
      <div className="about__sec1  container">
        <h1>Board of Governors</h1>
        <div className="about__Board_of_G">
          {boardOfGovernorsData.map((el, idx) => (
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
      About
    </div>
  );
}

export default About;
