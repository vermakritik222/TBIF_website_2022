import React from "react";
import StartupCard from "../../components/Startup_card/Startup_card";
import CardData from '../../data/startup_card_content.json'
import HeadLine from "../../components/HeadLine/HeadLine";
import './Home.css'

function Home() {
  return (
    <>
      <div className="HeadLine">
        <HeadLine/>
      </div>  

      <div className="Homecards">
        {
          CardData.map((ArrayElement)=>(
            <StartupCard 
              img = {ArrayElement.img}
              Name = {ArrayElement.name}
              text = {ArrayElement.text}
              number = {ArrayElement.number}
            />
          ))
        }
      </div>
    </>
  );
  
}

export default Home;
