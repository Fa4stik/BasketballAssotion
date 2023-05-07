import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

function Footer() {
  const nbaCreate = 1946;
  const [season, setSeason] = useState(''); 
  const [anniversary, setAnniversary] = useState(0); 
  useEffect(() => { 
    let currSeason = new Date();
    setSeason(`${currSeason.getFullYear() - 1}-${currSeason.getFullYear()}`);
    setAnniversary(currSeason.getFullYear() - nbaCreate);
  },[]);
  //ахахахахах
   
  return (
    <footer className="bg-nba-blue">
      <Typography className="text-center text-[28px] text-white">
        The current season is 2016-2017, and the NBA already has a history of{" "}
        71 years.
      </Typography>
    </footer>
  );
}

export default Footer
