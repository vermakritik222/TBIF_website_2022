import React from "react";
import "./Apply.css";

function Apply() {
  return (
    <div className="apply">
      <div className="apply_googleForm">
        <h2>Apply Form</h2>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdUzrOf1N_rMKdNb_VH-kPve0RiW-dPkyOAYgOQLUJn3PEZEQ/viewform?embedded=true"
          width="640"
          height="684"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default Apply;
