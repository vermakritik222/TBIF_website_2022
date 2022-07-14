import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutUs from "../../components/AboutUs/AboutUs";
import AboutBanner from "../../components/AboutBanner/AboutBanner";
import TeamCard from "../../components/shared/TeamCard/TeamCard";
import boardOfGovernorsData from "../../data/board_of_governors.json";
import "./About.scss";

function About() {
  const control_card = useAnimation();
  const control_heading = useAnimation();
  const control_about = useAnimation();
  const [ref_cart, inView_ref_cart] = useInView();
  const [ref_heading, inView_ref_heading] = useInView();
  const [ref_about, inView_ref_about] = useInView();
  const boxVariant = {
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7 } },
    hidden: { opacity: 0, y: 70 },
  };

  useEffect(() => {
    if (inView_ref_cart) {
      control_card.start("visible");
    } else {
      control_card.start("hidden");
    }
    if (inView_ref_heading) {
      control_heading.start("visible");
    } else {
      control_heading.start("hidden");
    }
    if (inView_ref_about) {
      control_about.start("visible");
    } else {
      control_about.start("hidden");
    }
  }, [
    control_about,
    control_card,
    control_heading,
    inView_ref_about,
    inView_ref_cart,
    inView_ref_heading,
  ]);

  return (
    <div className="about">
      <AboutBanner />
      <motion.div
        ref={ref_about}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          hidden: { opacity: 0, y: 70 },
        }}
        initial="hidden"
        animate={control_about}
      >
        <AboutUs />
      </motion.div>
      <div className="about__sec1  container">
        <motion.h1
          ref={ref_heading}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            hidden: { opacity: 0, y: 70 },
          }}
          initial="hidden"
          animate={control_heading}
        >
          Board of Governors
        </motion.h1>
        <motion.div
          ref={ref_cart}
          variants={boxVariant}
          initial="hidden"
          animate={control_card}
          className="about__Board_of_G"
        >
          {boardOfGovernorsData.map((el, idx) => (
            <TeamCard
              key={idx}
              name={el.name}
              title={el.title}
              linkedin={el.linkedin}
              // img={"./img/default_person.jpg"}
              img={el.image}
            />
          ))}
        </motion.div>
      </div>
      About
    </div>
  );
}

export default About;
