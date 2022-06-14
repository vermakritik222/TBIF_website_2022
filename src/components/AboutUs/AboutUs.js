import React from "react";
import "./AboutUs.scss";

function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="aboutUs__container container">
        <p className="aboutUs__pera">
          To strengthen entrepreneurship & start-up ecosystem in Indian
          Institute of Technology Ropar and the country at large, the institute
          has been running a technology business incubator at its campus, which
          is an independent Section 8 Company, registered as IIT Ropar
          Technology Business Incubator Foundation (TBIF). It was formed in 2016
          to host Technology Business Incubator (TBI) under NIDHI TBI Scheme of
          Department of Science & Technology, Government of India. It is housed
          in the Administration Block of the institute with a floor area of
          10000 sq feet. The incubator has its own Board of Directors with Prof.
          Rajeev Ahuja (Director-IIT Ropar) as the Chairman. Prof. Harpreet
          Singh (Dean, ICSR-II) is the Coordinator & one of the directors of
          TBIF. Dr. Ashish Sahani is the Faculty- In-charge of TBIF and heads
          the day to day operations of the organization. There is a full-time
          Incubation manager who operates as the chief executive of the
          Incubator. Infrastructure-wise the incubator provides co-working
          spaces as well as individual fully furnished offices for incubates,
          along with common amenities such as conference room, pantry, printing
          facility and a library. TBIF has a state-of-the-art electronic
          prototyping lab and a product fabrication lab. We also have a central
          high performance server available for use by our incubatees. We fund
          startups in the form of Soft loans and Seed grants. Funded mentorship
          support from our large pool of technical and business mentors can be
          availed by our incubatees. TBIF is run professionally with time bound
          SOPs around selection and monitoring of startups into our incubation
          program. TBIF is growing rapidly and aims to be one of the top
          business incubators of the country in the near future. The incubator
          has the following thrust areas:
        </p>
        <div>
          <ul>
            <li>IT and IT-enabled Services</li>
            <li>Manufacturing</li>
            <li>Healthcare Technologies</li>
            <li>Clean Energy</li>
            <li>Agriculture</li>
          </ul>
          {/* <div>
            <img src="/img/about-main-image.png" alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
