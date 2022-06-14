import React from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import AboutBanner from "../../components/AboutBanner/AboutBanner";
import "./About.scss";
import TeamCard from "../../components/shared/TeamCard/TeamCard";

function About() {
  return (
    <div className="about">
      <AboutBanner />
      <AboutUs />
      <div className="about__sec1  container">
        <h1>Board of Governors</h1>
        <div className="about__Board_of_G">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>
      About
    </div>
  );
}

export default About;
