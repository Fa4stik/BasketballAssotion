import React from "react";
import Logo from "../assets/svg/nba_logo_small.svg";
import ButtonNba from "./ButtonNba";
import { Link, useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";
const Header = (props) => {
  let navigate = useNavigate();
  return (
    <>
      <header className="px-[27px] py-[10px] grid items-end justify-center grid-flow-col grid-cols-3 border-[2px] border-nba-blue border-solid">
        <div>
          <Link to='/' className="flex items-end">
            <img className="pr-[23px]" src={Logo} alt="Nba Logo" />
            <Typography className="text-nba-textGray text-[25px]">
              NBA Management System
            </Typography>
          </Link>
        </div>
        <Typography
          variant="h2"
          className="text-nba-textGray text-[36px] justify-self-auto justify-self-center"
        >
          {props.title}
        </Typography>
        <div className="justify-self-end">
          <Button
            variant="standard"
            onClick={() => navigate(-1)}
            className="w-[120px] rounded-xl bg-nba-wheat  text-[30px] nba-textGray"
          >
            Back
          </Button>
        </div>
      </header>
    </>
  );
};
export { Header };
