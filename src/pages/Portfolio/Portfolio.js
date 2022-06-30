import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import Active from "../../components/Active/Active";

function Portfolio() {
  const [tabs, setTabs] = useState(0);
  function handleChange(e) {
    setTabs(e.target.value);
  }
  return (
    <div>
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
        <div>
          <div className="curators">
            <Active
              img="https://www.tbifiitrpr.org/assets/img/portfolio/startup_16.jpeg"
              name="Curators"
              info="Developing an application for online buying and selling of all art forms."
              contact="Contact Info: 2020aim1010@iitrpr.ac.in"
            />
          </div>
          <div className="DaktarZ">
            <Active
              img="https://www.tbifiitrpr.org/assets/img/portfolio/startup_14.jpeg"
              name="DaktarZ"
              info="Personalized Healthcare Platform to access range of Healthcare Services."
              contact="Contact Info: support@daktarz.com"
            />
          </div>
          <div className="EntrAIner">
            <Active
              img="https://www.tbifiitrpr.org/assets/img/portfolio/startup_19.jpeg"
              name="EntrAIner"
              info=""
              contact="Contact Info: 2019eeb1197@iitrpr.ac.in"
            />
          </div>
          <div className="Epilepto Systems">
            <Active
              img="https://www.tbifiitrpr.org/assets/img/portfolio/startup_18.jpeg"
              name="Epilepto Systems"
              info="Epilepto Systems is developing a smartwatch to detect the occurance of seizures in patients of epilepsy and alert the family careivers. They are also developing an app for self-management of epilepsy. They have been funded by BIRAC under the BIG grant."
              contact="Contact Info: contact@epilepto.com"
            />
          </div>
          <div className="Logier">
            <Active
              img="https://www.tbifiitrpr.org/assets/img/portfolio/startup_9.jpeg"
              name="Logier"
              info="Logier Technologies focuses on innovative application-based business and technology in the field of artificial intelligence and machine learning. We want to revolutionize the different field through hardware electronics products, consulting and mobile application"
              contact="Contact Info: contact@logier.in"
            />
          </div>
        </div>
      )}

      {/* 
    <div className='Makris'><Active img="Makris" name="" info="" contact=""/></div>
    <div className=''><Active img="" name="" info="" contact=""/></div>
    <div className=''><Active img="" name="" info="" contact=""/></div>
    <div className=''><Active img="" name="" info="" contact=""/></div>
    <div className=''><Active img="" name="" info="" contact=""/></div>
    <div className=''><Active img="" name="" info="" contact=""/></div>
    <div className=''><Active img="" name="" info="" contact=""/></div>
    <div className=''><Active img="" name="" info="" contact=""/></div>
    <div className=''><Active img="" name="" info="" contact=""/></div>
    <div className=''><Active img="" name="" info="" contact=""/></div>
    <div className=''><Active img="" name="" info="" contact=""/></div>
    <div className=''><Active img="" name="" info="" contact=""/></div>
    <div className=''><Active img="" name="" info="" contact=""/></div>
     */}
    </div>
  );
}

export default Portfolio;
