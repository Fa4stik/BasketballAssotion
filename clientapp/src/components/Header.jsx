import React from "react";
import Logo from "../assets/svg/nba_logo_small.svg";
import ButtonNba from "./ButtonNba";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Typography, Button } from "@mui/material";
const Header = (props) => {
  let navigate = useNavigate();
  const location = useLocation();

  const isRouteAdmin = () => {
    const adminRoutes = ['/admin/eventMenu', '/admin/techAdmin'];
    return adminRoutes.includes(location.pathname);
  }

  const isItRouteAdmin = isRouteAdmin();

  const logout = async() => {
    if (isItRouteAdmin) {

      const url = `http://176.124.192.232/api/Authorization/logout`;
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      };

      const response = await axios.post(url, {}, { headers: headers });
      console.log(response);

    }
    return navigate('/admin')
  }

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
        {
          isItRouteAdmin && (
            // <button
            //   className="text-nba-textGray text-[36px] justify-self-auto justify-self-center"
            //   onClick={() => logout()}
            // >
            //   logout
            // </button>
            <Button
              variant="standard"
              onClick={() => logout()}
              className="w-[150px] rounded-xl bg-nba-wheat  text-[30px] nba-textGray px-30px"
            >
              Logout
            </Button>

          )

        }

          <Button
            variant="standard"
            onClick={() => navigate(-1)}
            className="w-[120px] rounded-xl bg-nba-wheat  text-[30px] nba-textGray px-20px"
          >
            Back
          </Button>
        </div>
      </header>
    </>
  );
};
export { Header };
