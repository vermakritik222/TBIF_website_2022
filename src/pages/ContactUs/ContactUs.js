import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import "./ContactUs.scss";

function ContactUs() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [organization, setOrganization] = useState();
  const [message, setMessage] = useState();
  return (
    <div className="contactUs">
      <div className="contactUs__bg">
        <div className="contactUs__main">
          <Grid container spacing={2} padding={3}>
            <Grid item xs={12}>
              <h2>Get In Touch</h2>
            </Grid>
            <Grid item container rowSpacing={3} md={6} xs={12}>
              <Grid item xs={12}>
                <TextField
                  value={name}
                  onChange={(el) => setName(el.target.value)}
                  fullWidth
                  label="Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={email}
                  onChange={(el) => setEmail(el.target.value)}
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={organization}
                  onChange={(el) => setOrganization(el.target.value)}
                  fullWidth
                  label="Organization"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  value={message}
                  onChange={(el) => setMessage(el.target.value)}
                  label="Message"
                  variant="outlined"
                  multiline
                  minRows={4}
                  maxRows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => {
                    alert(`
                    Name : ${name}
                    Email : ${email}
                    Organization : ${organization}
                    Message : ${message}
                    `);
                    console.log(name);
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
            <Grid item container md={6} xs={12}>
              <Grid item xs={12}>
                <img
                  className="responsiveimg floating"
                  src="/img/contactvector.png"
                  alt=""
                />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
