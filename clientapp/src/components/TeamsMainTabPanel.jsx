import React, { useEffect, useState } from "react";
import { Typography, Box, Stack, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { teamApi } from "../api/teamApi";
import TabPanel from "./TabPanel";
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
                <Box className="border border-sky-500" key={pos}>
                  <Box className="flex gap-x-3">
                    <img
                      alt={team.teamname}
                      className="w-[98px] h-[101px] object-contain "
                      src={`http://176.124.192.232${team.logo}`}
                    />
                    <Box className="flex flex-col w-[55%] gap-y-5	">
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
