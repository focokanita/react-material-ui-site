import React from "react";
import { Typography, Box, List, ListItem, ListItemText } from "@mui/material";

function Music() {
  return (
    <Box p={3}>
      <Typography variant="h2">MUSIC</Typography>
      <audio controls>
        <source src="audio/w" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Typography variant="body1">Now Playing: Bad Blood</Typography>
      <List>
        <ListItem button>
          <ListItemText primary="Blank Space" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Style" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Lover" />
        </ListItem>
      </List>
    </Box>
  );
}

export default Music;
