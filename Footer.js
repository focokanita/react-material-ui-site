import React from "react";
import { Box, IconButton } from "@mui/material";
import YouTubeIcon from "./images/youtube.jpeg"
import SpotifyIcon from "./images/spotify.png";
import FacebookIcon from "./images/facebook.png";

function Footer() {
  return (
    <Box display="flex" justifyContent="center" p={2}>
      <IconButton href="#">
        <YouTubeIcon />
      </IconButton>
      <IconButton href="#">
        <SpotifyIcon />
      </IconButton>
      <IconButton href="#">
        <FacebookIcon />
      </IconButton>
    </Box>
  );
}

export default Footer;
