import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutUs from "../../components/AboutUs/AboutUs";
import AboutBanner from "../../components/AboutBanner/AboutBanner";
import TeamCard from "../../components/shared/TeamCard/TeamCard";
import boardOfGovernorsData from "../../data/board_of_governors.json";
import "./About.scss";

function About() {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
    hidden: { opacity: 0, scale: 0 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div className="about">
      <AboutBanner />
      <AboutUs />
      <div className="about__sec1  container">
        <h1>Board of Governors</h1>
        <motion.div
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
          className="about__Board_of_G"
        >
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
        </motion.div>
      </div>
      About
    </div>
  );
}

export default About;
