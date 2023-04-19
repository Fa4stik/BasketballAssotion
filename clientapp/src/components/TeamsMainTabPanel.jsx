import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Grid,
  Stack,
  Container,
  Divider,
  Avatar,
} from "@mui/material";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import { teamApi } from "../api/teamApi";
const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container maxWidth="xxl">
          <Box>{children}</Box>
        </Container>
      )}
    </div>
  );
};
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
const TeamsMainTabPanel = ({ value, index }) => {
  const [divisions, setDivisions] = useState([]);
  useEffect(() => {
    teamApi
      .getDivisionsWithTeams(index)
      .then((response) => setDivisions(response.data));
  }, []);
  return (
    <TabPanel value={value} index={index - 1}>
      <Box className="flex gap-x-4">
        {divisions.map((division, pos) => (
          <Box
            key={division.conferenceid}
            className="mt-[59px] border-black border border-solid w-[36%]"
          >
            <Typography
              variant="h5"
              align="center"
              className="border-black border-b "
            >
              {division.name}
              <Divider className="border-black" />
            </Typography>
            <Stack spacing={2} className="py-5 px-5">
              {division.teams.map((team, pos) => (
                <Box className="border border-sky-500">
                  <Box className="flex gap-x-3">
                    <img
                      alt={team.teamname}
                      className="w-[98px] h-[101px] object-contain "
                      src={`http://176.124.192.232${team.logo}`}
                    />
                    <Box className='flex flex-col w-100'>
                      <Typography variant="h5">{team.teamname}</Typography>
                      <Box className="flex justify-between">
                        <Link>
                          <Typography variant="body1" color={"primary"}>
                            Roster
                          </Typography>
                        </Link>
                        <Link>
                          <Typography variant="body1" color={"primary"}>
                            Matchup
                          </Typography>
                        </Link>
                        <Link>
                          <Typography variant="body1" color={"primary"}>
                            First Lineup
                          </Typography>
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
        ))}
      </Box>
    </TabPanel>
  );
};

export default TeamsMainTabPanel;
