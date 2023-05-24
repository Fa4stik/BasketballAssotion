import {
  Box,
  Container,
  Stack,
  Grid,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Tabs,
  Tab,
} from "@mui/material";
import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import InputNba from "./InputNba";
import { playersApi } from "../api/playersApi";
import TabPanel from "./TabPanel";
import PlayerDetailCharts from "./PlayerDetailCharts";

function PlayerDetail({ setHeaderTitle }) {
  const { playerId } = useParams();
  const [playerDetail, setPlayerDetails] = useState({});

  const [dateStart, setDateStart] = useState("2010-01-01");
  const [dateEnd, setDateEnd] = useState("2020-09-15");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    playersApi.getPlayerDetails(playerId).then((response) => {
      setPlayerDetails(response.data);
      setLoading(false);
    });
    const headerTitle = "Player Detail";
    setHeaderTitle(headerTitle);
    document.title = headerTitle;
    console.log(12);
  }, []);

  const handleChangeDateStart = (e) => {
    setDateStart(e.target.value);
  };
  const handleChangeDateEnd = (e) => {
    setDateEnd(e.target.value);
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      {!loading ? (
        <Box className="p-12">
          <Grid container rowGap={10} columnSpacing={20}>
            <Grid item xs={7} className="flex justify-between">
              <img
                src={
                  playerDetail.photo
                    ? process.env.REACT_APP_SERVER_URL + playerDetail.photo
                    : "/images/player_sample.png"
                }
                alt="Player Icon"
                className="block"
                height={160}
              />

              <div className="flex-col flex w-full ml-4">
                <Typography
                  className="font-bold text-2xl"
                  sx={{ borderBottom: 2 }}
                  paragraph
                >
                  {playerDetail.playerName}
                </Typography>
                <div className="flex gap-x-8 mb-5">
                  <Typography className="text-2xl">
                    #{playerDetail.shirtnumber}
                  </Typography>
                  <Typography
                    className="text-2xl"
                    sx={{ borderLeft: 2, paddingLeft: 2 }}
                  >
                    {playerDetail.height}
                  </Typography>
                  <Typography
                    className="text-2xl"
                    sx={{ borderLeft: 2, paddingLeft: 2 }}
                  >
                    {playerDetail.teamName}
                  </Typography>
                </div>
                <div className="grid grid-cols-4 ">
                  <Typography className="text-2xl">Born</Typography>
                  {playerDetail.born && (
                    <Typography className="text-2xl font-bold ">
                      {playerDetail.born.slice(0, playerDetail.born.length - 9)}
                    </Typography>
                  )}
                  <Typography className="text-2xl">Experience</Typography>
                  <Typography className="text-2xl font-bold ">
                    {playerDetail.experience} Years
                  </Typography>
                  <Typography className="text-2xl">College</Typography>
                  <Typography className="text-2xl font-bold ">
                    {playerDetail.college ? playerDetail.college : "None"}
                  </Typography>
                  <Typography className="text-2xl">Salary</Typography>
                  <Typography className="text-2xl font-bold ">
                    ${playerDetail.salary}
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="flex-col flex w-full ml">
                <Typography className="font-bold text-l">
                  2016-2017 Season
                </Typography>
                <Table>
                  <TableHead sx={{ backgroundColor: "#0000000F" }}>
                    <TableRow>
                      <TableCell className="font-bold  p-1" align="center">
                        PPG
                      </TableCell>
                      <TableCell className="font-bold  p-1" align="center">
                        APG
                      </TableCell>
                      <TableCell className="font-bold  p-1" align="center">
                        RPG
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      {playerDetail.currentSeasonStat && (
                        <>
                          <TableCell className="p-1" align="center">
                            {playerDetail.currentSeasonStat.ppg}
                          </TableCell>
                          <TableCell className="p-1" align="center">
                            {playerDetail.currentSeasonStat.apg}
                          </TableCell>
                          <TableCell className="p-1" align="center">
                            {playerDetail.currentSeasonStat.rpg}
                          </TableCell>
                        </>
                      )}
                    </TableRow>
                  </TableBody>
                </Table>
                <Typography className="font-bold text-l">Career</Typography>
                <Table>
                  <TableHead sx={{ backgroundColor: "#0000000F" }}>
                    <TableRow>
                      <TableCell className="font-bold  p-1" align="center">
                        PPG
                      </TableCell>
                      <TableCell className="font-bold  p-1" align="center">
                        APG
                      </TableCell>
                      <TableCell className="font-bold p-1" align="center">
                        RPG
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      {playerDetail.currentSeasonStat && (
                        <>
                          <TableCell className="p-1" align="center">
                            {playerDetail.career.ppg}
                          </TableCell>
                          <TableCell className="p-1" align="center">
                            {playerDetail.career.apg}
                          </TableCell>
                          <TableCell className="p-1" align="center">
                            {playerDetail.career.rpg}
                          </TableCell>
                        </>
                      )}
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </Grid>

            <Grid item xs={12}>
              <Stack className="border-black border-2 border-solid p-5">
                <div className="flex items-baseline ">
                  <Typography variant="h4" paragraph>
                    Date:
                  </Typography>
                  <InputNba
                    type="date"
                    name="dateStart"
                    value={dateStart}
                    width="240"
                    height="50"
                    handleChange={handleChangeDateStart}
                    defaultValue={dateStart}
                  />
                  <InputNba
                    type="date"
                    name="dateEnd"
                    height="50"
                    width="240"
                    value={dateEnd}
                    handleChange={handleChangeDateEnd}
                    defaultValue={dateEnd}
                  />
                  {/* <button
                    className="w-[140px] h-[45px] text-[28px] bg-transparent ml-[30px] border-1 rounded-[8px] cursor-pointer hover:opacity-80 border"
                    type="submit"
                  >
                    Search
                  </button> */}
                </div>

                <PlayerDetailCharts
                  playerId={playerId}
                  dateStart={dateStart}
                  dateEnd={dateEnd}
                />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
}

export default PlayerDetail;
