import React from "react";
import Eligibility from "../../data/Career_Eligibility.json";
import ScopeOfWork from "../../data/Career_ScopeOfWork.json";
import AdvertisementCard from "../AdvertisementCard/AdvertisementCard";
import "./CareerPage.css";

function CareerPage() {
  return (
    <>
      <div className="container">
        {" "}
        {/* Container of the entire main body*/}
        <h1 align="center" id="heading">
          Career with TBIF
        </h1>
        {/* <h3 id="empanelment">Empanelment of Firm with Expertise in IPR</h3> */}
        {/* <h6>
          IIT Ropar TBIF – A Section 8 Non Profit Entity of IIT Ropar, requires
          services of a firm with expertise in intellectual property matters.
        </h6> */}
        {/* <h4 className="sub-heading">Scope of work</h4>
        <div className="work-scope-container">
          {ScopeOfWork.map(({ point }, index) => (
            <p className={`work-scope careerBox-${index}`} key={index}>
              <i class="fa-li fa fa-check-square"></i>
              {point}
            </p>
          ))}
        </div>
        <h4 className="sub-heading">Eligibility Criteria</h4>
        <ul class="fa-ul">
          {Eligibility.map(({ condition }, index) => (
            <li className="eligibility" key={index}>
              <span class="fa-li">
                <i class="fas fa-check-circle"></i>
              </span>
              {condition}
            </li>
          ))}
        </ul> */}
        <div className="AdvertisementBox">
          <p className="nopositions">No positions are available.</p>
          {/* <AdvertisementCard url={"/img/Advertisement/Office_attendant_Advertisement.jpg"} title={"Office Attendant"} text={"Applications are invited for the position of Office Attendant (on contract) at IIT Ropar - Technology Business Incubator Foundation to assist the TBIF office with routine office tasks like maintaining labs, document filing, copying and dispatching, as well as buying supplies for TBIF's daily operations."}/> */}
          {/* <AdvertisementCard url={"/img/Advertisement/TBIF_Incubation_Manager_Advertisement_page-0001.jpg"} title={"Incubation Manager"} text={"IIT Ropar - Technology Business Incubator Foundation is looking for an Incubation Manager to handle its daily operations and help establish the incubator as an exemplary leader in the domain of technology-oriented and engineering start-ups."}/> */}
        </div>
        {/* <p id="contact-details">
          Interested firms are required to send their offer in a sealed cover by
          enclosing a detailed profile of the firm with financial quote against
          the scope of work, addressed to: <br />
          Faculty-in-charge, IIT Ropar TBIF <br />
          Top Floor – East Wing, M. Visvesvaraya Block, <br />
          Indian Institute of Technology Ropar (new campus) <br />
          Rupnagar -140111. <br />
          Contact Number 7656802256 <br /> <br />
          <b>
            {" "}
            As we are currently working from home, we might miss physical
            couriers. <br />
            Please also send a copy of your applications to
            office-tbif-mgr@iitrpr.ac.in
          </b>
        </p> */}
        {/* <p>
          Applicants must highlight the eligibility as per the criteria. They
          should also mention the turnaround times for different services.
        </p> */}
        {/* <h3>Last date of application: May 25, 2021</h3> */}
      </div>
    </>
  );
}

export default CareerPage;
