import React, { Component } from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import logo from "../assets/svg/nba_logo_big.svg";
import MainScreenSlider from "./MainScreenSlider";
import { Link } from "react-router-dom";
const MainScreen = function () {
  return (
    <Container maxWidth="xl">
      <Box className="flex items-center justify-between flex-col gap-5 mb-5">
        <Box className="flex mr-[11rem]">
          <img
            className="w-200 h-300  block top-[20px]  z-index-1"
            src={logo}
            alt="Nba Logo"
          />{" "}
          <Box>
            <Typography variant="h1" className="text-center ">
              NBA Management System
            </Typography>
            <Typography variant="h4" className="text-center">
              Welcome to use this NBA Management system, you can <br /> redirect
              to different pages according to your role by clicking the buttons
              below.
            </Typography>
          </Box>
        </Box>
        <Container
          maxWidth="xl"
          className="h-[373px] border-nba-border border-2 border-solid  flex items-center justify-around pl-[88px] pr-[88px]"
        >
          <Link to="visitor">
            <Button
              size="large"
              variant="contained"
              style={{
                maxWidth: "220px",
                maxHeight: "90px",
                minWidth: "220px",
                minHeight: "90px",
                fontSize: "30px",
              }}
            >
              Visitor
            </Button>
          </Link>
          <Button
            variant="contained"
            style={{
              maxWidth: "220px",
              maxHeight: "90px",
              minWidth: "220px",
              minHeight: "90px",
              fontSize: "30px",
            }}
          >
            Admin
          </Button>
        </Container>
      </Box>
      <MainScreenSlider />
    </Container>
  );
};

export default MainScreen;
