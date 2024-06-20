import React from "react";
import { Typography, Box, TextField, Button } from "@mui/material";

function Contact() {
  return (
    <Box p={3} textAlign="center">
      <Typography variant="h2">Contact Alexa</Typography>
      <Typography variant="h6">Management</Typography>
      <Typography variant="body1">
        Karen Blanche
        <br />
        123-456-7890
        <br />
        <a href="mailto:info@mysite.com">info@mysite.com</a>
      </Typography>
      <Typography variant="h6">Booking</Typography>
      <Typography variant="body1">
        The Bookerz, Daniel Ku
        <br />
        123-456-7890
        <br />
        <a href="mailto:info@mysite.com">info@mysite.com</a>
      </Typography>
      <form noValidate autoComplete="off">
        <TextField
          label="Enter your email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary">
          Subscribe Now
        </Button>
      </form> 
    </Box>
  );
}

export default Contact;
