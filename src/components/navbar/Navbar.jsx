import { ModeNight } from "@mui/icons-material";
import { FormControlLabel, ListItemIcon, Switch } from "@mui/material";
import React from "react";
import "./navbar.css";
import MaterialUISwitch from "../switchMode";

const Navbar = ({ mode, setMode }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="./img/logo.svg" className="img" alt="" />
        <span>InstaSquad Downloader</span>
      </div>
      <ul>
        <li className="active">Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>
          <FormControlLabel
            onClick={(e) => setMode(mode === "light" ? "dark" : "light")}
            control={
              <MaterialUISwitch
                sx={{
                  m: 0,
                }}
                defaultChecked
              />
            }
            // label="MUI switch"
          />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
