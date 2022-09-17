import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import {
  faCamera,
  faCirclePlus,
  faClapperboard,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Hidden, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import "./home.css";

const Home = ({ mode, setMode }) => {
  let [saver, setSaver] = useState("ImageSaver");
  let [download, setDownload] = useState(false);

  const handleDownload = () => {
    setDownload(true);
  };

  return (
    <>
      <Navbar mode={mode} setMode={setMode} />
      <div className="home">
        <div className="sidebar"></div>
        <div className="homeContainer">
          <h1 className="mainHeading">Instagram {saver}</h1>
          <p className="description">
            Download Photos, Reels, Videos, Stories, IGTV and Profile Photos
            from Instagram.
          </p>
          <div className="list">
            <div className="listItem" onClick={() => setSaver("ImageSaver")}>
              <FontAwesomeIcon icon={faCamera} className="icon" />
              <span>Image</span>
            </div>
            <div className="listItem" onClick={() => setSaver("ReelsSaver")}>
              <FontAwesomeIcon icon={faClapperboard} className="icon" />
              <span>Reels</span>
            </div>
            <div className="listItem" onClick={() => setSaver("StorySaver")}>
              <FontAwesomeIcon icon={faCirclePlus} className="icon" />
              <span>Story</span>
            </div>
            <div className="listItem" onClick={() => setSaver("VideoSaver")}>
              <FontAwesomeIcon icon={faCirclePlay} className="icon" />
              <span>Video</span>
            </div>
            <div className="listItem" onClick={() => setSaver("ProfileSaver")}>
              <FontAwesomeIcon icon={faUserCircle} className="icon" />
              <span>Profile</span>
            </div>
          </div>
          <Typography className="title">Enter The Username or URL</Typography>

          <Box sx={{ width: "50%", marginBottom: "80px", marginTop: "20px" }}>
            <TextField
              id="standard-basic"
              label="Example : https://www.instagram.com/reel/.../..."
              variant="standard"
              className="search"
            />
          </Box>
          <Button
            variant="contained"
            size="large"
            onClick={() => handleDownload()}
          >
            Preview
          </Button>

          <div style={{ position: "relative" }}>
            <div
              className="imageBoxContainer"
              style={{
                height: "500px",
                width: "500px",
                margin: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                borderRadius: "5px",
                display: download ? "block" : "none",
                boxShadow: "1px 1px 5px gray",
              }}
            >
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
                alt=""
                className="imageBox"
              />

              <Button
                style={{ position: "absolute", bottom: "63px", right: "234px" }}
                variant="contained"
                // size="large"
              >
                Download
              </Button>
            </div>
          </div>

          <div className="adsContainer">ADS</div>
        </div>
      </div>
    </>
  );
};

export default Home;
