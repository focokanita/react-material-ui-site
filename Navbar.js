import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          TAYLOR SWIFT
        </Typography>
        <Button color="inherit">HOME</Button>
        <Button color="inherit">TOURS</Button>
        <Button color="inherit">GALLERY</Button>
        <Button color="inherit">ABOUT</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
