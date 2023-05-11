import { Box, Container, Stack, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import InputNba from "./InputNba";
import { playersApi } from "../api/playersApi";

function PlayerDetail() {
  const { playerId } = useParams();
  const [playerDetail, setPlayerDetails] = useState([]);

  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());
  useEffect(() => {
    playersApi.getPlayerDetails(playerId).then((response) => {
      setPlayerDetails(response.data);
    });
  }, [playerId]);

  const handleChangeDateStart = (e) => {
    setDateStart(e.target.value);
  };
  const handleChangeDateEnd = (e) => {
    setDateEnd(e.target.value);
  };
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box className="p-12">
        <Grid container rowGap={10}>
          <Grid item xs={12} className="flex">
            <img
              src="/images/player_sample.png"
              alt="Player Icon"
              className="block"
            />
            <div className="flex-col flex">
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
          </Grid>
          <Grid item></Grid>

          <Grid item xs={12}>
            <Stack height={"600px"}>
              <div className="flex items-baseline">
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
                />
                <InputNba
                  type="date"
                  name="dateEnd"
                  height="50"
                  width="240"
                  value={dateEnd}
                  handleChange={handleChangeDateEnd}
                />
                <button
                  className="w-[140px] h-[45px] text-[28px] bg-transparent ml-[30px] border-1 rounded-[8px] cursor-pointer hover:opacity-80 border"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default PlayerDetail;
