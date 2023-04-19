import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Tabs,
  Tab,
  Grid,
  Stack,
  Container,
} from "@mui/material";
import PropTypes from "prop-types";
import { teamApi } from "../api/teamApi";
import TeamsMainTabPanel from "./TeamsMainTabPanel";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const TeamsMain = ({ setHeaderTitle }) => {
    const [value, setValue] = useState(0);
    const [conferences, setConferences] = useState([]);
  
  useEffect(() => {
    teamApi.getConferenceNames().then((response) => setConferences(response.data));
    const headerTitle = "Teams Main";
    setHeaderTitle(headerTitle);
      document.title = headerTitle;
      
  }, []);
  const handleChange = (event, newValue) => {
      setValue(newValue);
   
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="h-100"
        >
          {conferences.map((conference, index) => (
            <Tab
              key={index}
              label={conference.name}
              {...a11yProps(conference.conferenceid)}
            />
          ))}
        </Tabs>
      </Box>
      {conferences.map((conference, pos) => (
        <TeamsMainTabPanel
          key={pos}
          value={value}
          index={conference.conferenceid}
        />
      ))}
    </Box>
  );
};

export default TeamsMain;
