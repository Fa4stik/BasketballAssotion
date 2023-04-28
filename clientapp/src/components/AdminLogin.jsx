import React from "react";
import {Header} from "./Header";
import Footer from "./Footer";
import {Button, Typography} from "@mui/material";


const AdminLogin = () => {
  return(
    <>
      <Header/>
      <div className="app">

        <p className="text-center text-nba-textGray text-[25px] my-10">Users can login into the system using their jobnumber and password.</p>

        <div className="text-center flex flex-col justify-between h-full">
          <div>
            <Typography className="text-nba-textGray text-[25px] my-10">
              Jobnumber: <input className='border-solid border-2 ml-[20px] text-[28px] px-[14px]' type="text"/>
            </Typography>
          </div>
          <div>
            <Typography className="text-nba-textGray text-[25px] my-10">
              Password:  <input className='border-solid border-2 ml-[20px] text-[28px] px-[14px] px-1.5' type="password"/>
            </Typography>
          </div>
          <p><input className="my-10" type="checkbox" name="remember" /> Remember me </p>

          <div className="my-10">
            <Button
              variant="standard"
              className="w-[40px]  bg-nba-wheat  text-[10px] nba-textGray mx-10">
              Login
            </Button>

            <Button
              variant="standard"
              className="w-[40px]  bg-nba-wheat  text-[10px] nba-textGray mx-10">
              Cancel
            </Button>

          </div>

        </div>


      </div>

      <div className="fixed bottom-0 w-full">
        <Footer/>
      </div>
    </>


  );
};

export default AdminLogin;
