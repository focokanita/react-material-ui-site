import React from "react";
import { Typography, Box, Button } from "@mui/material";

const tours = [
  {
    date: "MAY 16",
    location: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
  },
  { date: "JUN 19", location: "TORONTO, ON", venue: "BUDWEISER STAGE" },
  { date: "JULY 22", location: "BRISTOW, VA", venue: "JIGGY LUBE LIVE" },
  { date: "SEPTEMBER 29", location: "PHOENIX, AZ", venue: "AK-CHIN PAVILION" },
  { date: "NOVEMBER 2", location: "LAS VEGAS, NV", venue: "T-MOBILE ARENA" },
  { date: "DECEMBER 7", location: "CONCORD, CA", venue: "CONCORD PAVILION" },
];

function Tours() {
  return (
    <Box p={3}>
      <Typography variant="h2">TOURS</Typography>
      {tours.map((tour, index) => (
        <Box key={index} mb={2}>
          <Typography variant="h6">{tour.date}</Typography>
          <Typography variant="body1">
            {tour.location} - {tour.venue}
          </Typography>
          <Button variant="contained" color="primary">
            BUY TICKETS
          </Button>
          <hr />
        </Box>
      ))}
    </Box>
  );
}

export default Tours;
