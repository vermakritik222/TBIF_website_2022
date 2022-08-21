import React from "react";
import StartupCard from "../../components/Startup_card/Startup_card";
import CardData from "../../data/startup_card_content.json";
import HeadLine from "../../components/HeadLine/HeadLine";
import Whatistbif from "../../components/whatistbif/Whatistbif";
import "./Home.css";
import HomeBox from "../../components/HomeBox/HomeBox";

function Home() {
  return (
    <div className="home">
      <div className="HeadLine">
        <HeadLine />
      </div>

      <div className="home__home">
        <HomeBox />
      </div>

      <Whatistbif />

      <div className="home__startupCard">
        {CardData.map((ArrayElement) => (
          <StartupCard
            img={ArrayElement.img}
            Name={ArrayElement.name}
            text={ArrayElement.text}
            number={ArrayElement.number}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
