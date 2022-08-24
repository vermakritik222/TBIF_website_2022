import { Grid, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import Active from "../../components/Active/Active";
import Past from "../../components/Past/Past";
import "./Portfolio.css";
import active_data from "../../data/portfolio_active.json"
import past_data from "../../data/portfolio_past.json"

function Portfolio() {
  const [tabs, setTabs] = useState(0);
  function handleChange(e) {
    setTabs(e.target.value);
  }
  return (
    <div className="portfolio">
      <div className="portfolio__heading">
        <h3>Startups Incubated at IIT Ropar</h3>
      </div>
      <div className="portfolio__tabs">
        <Tabs
          value={tabs}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="ACTIVE" />
          <Tab label="PAST" />
        </Tabs>
      </div>

      {tabs === 0 && (
        // <div className="portfolio__active">
        <Grid container xs="auto" justifyContent="center" alignItems="center">
          <Grid item container xs={8} spacing={2}>
          {active_data.map((el, idx) => (
            <Active
              key={idx}
              img={el.img}
              name={el.name}
              description={el.description}
              contact={el.contact}
              web={el.web}
            />
            ))}
            </Grid>
        </Grid>
)}

{tabs === 1 && (
        <div className="portfolio__past">
          {past_data.map((el, idx) => (
            <Past
              key={idx}
              img={el.img}
              name={el.name}
              description={el.description}
              contact={el.contact}
              web={el.web}
            />
            ))}
        </div>
)}
          
    </div>
  );
          
          }
export default Portfolio;
