import React from "react";
import { Typography, Box } from "@mui/material";

function About() {
  return (
    <Box p={3}>
      <Typography variant="h2">ABOUT</Typography>
      <Typography variant="body1">
        Taylor Alison Swift (born December 13, 1989) is an American
        singer-songwriter. Her artistry, songwriting and entrepreneurship have
        influenced the music industry, popular culture, and politics, while her
        life is a subject of widespread media coverage...
        {}
      </Typography>
    </Box>
  );
}

export default About;
