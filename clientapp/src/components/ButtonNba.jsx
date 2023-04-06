import { Button } from "@mui/material";
import React from "react";

const ButtonNba = (props) => {
  let color = props.color;
  if (color === undefined) color = "black";
  return (
    <Button
      variant="contained"
      className={` bg-nba-blue text-[36px] ${props.paddings} ${props.className} text-${color}`}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};
export default ButtonNba;
