import { Grid } from "@mui/material";
import React from "react";
import ContactForm from "../../components/Forms/ContactForms";

function ContactUs() {

  const handleSubmit = (submitRecord) => {
    // perform api call in this method
    console.log('submit', submitRecord);
    
  }

  return <Grid>
        <ContactForm onSubmit={handleSubmit} />
    </Grid>
}

export default ContactUs;
