import { Button } from "@mui/material";
import React from "react";

function Events() {
  return (
    <div className="container">
      <div
        style={{
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "30px",
          margin: "30px",
        }}
      >
        <img
          src="/img/Events/event1.jpg"
          onClick={() => {
            window.location.href =
              "https://entrepreneur.wfglobal.org/iit-ropar/";
          }}
          alt=""
          style={{ margin: "20px 0px",cursor:"pointer" }}
        />
        <div
          style={{
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "30px",
            margin: "30px",
          }}
        >
          <p>
            Join our structured, 14-week Liftoff program in association with
            Wadhwani Foundation to get pitch-ready for various grants/startup
            schemes/pre-seed capital.
          </p>
          <p>
            Refine your pitch through building a compelling value proposition,
            scalable business model, and financial stability to become
            investible.
          </p>
          <Button
            variant="contained"
            onClick={() => {
              window.location.href =
                "https://entrepreneur.wfglobal.org/iit-ropar/";
            }}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Events;
