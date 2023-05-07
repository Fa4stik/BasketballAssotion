import React, {useState} from "react";
import {Header} from "./Header";
import Footer from "./Footer";
import {Button, Typography} from "@mui/material";


const AdminLogin = () => {
  const [jobNumber, password] = useState("");


  const handleSubmit = event => {
    event.preventDefault();

    const data = { jobNumber, password };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };


    fetch("http://176.124.192.232/api/Authorization/login", requestOptions)
  };

  return(

    <>
      <Header/>
      <div className="app">

        <p className="text-center text-nba-textGray text-[25px] my-10">Users can login into the system using their jobnumber and password.</p>

        <form action="">

        <div className="text-center flex flex-col justify-between h-full">
          <div>
            <Typography className="text-nba-textGray text-[25px] my-10">
              Jobnumber: <input value={jobNumber} className='border-solid border-2 ml-[20px] text-[28px] px-[14px]' type="text"/>
            </Typography>
          </div>
          <div>
            <Typography className="text-nba-textGray text-[25px] my-10">
              Password:  <input value={password} className='border-solid border-2 ml-[20px] text-[28px] px-[14px] px-1.5' type="password"/>
            </Typography>
          </div>
          <p><input className="my-10" type="checkbox" name="remember" /> Remember me </p>

          <div className="my-10">
              <Button
                variant="standard"
                className="w-[40px]  bg-nba-wheat  text-[10px] nba-textGray mx-10"
                onClick={ handleSubmit }>
                Login
              </Button>

              <Button
                variant="standard"
                className="w-[40px]  bg-nba-wheat  text-[10px] nba-textGray mx-10">
                Cancel
              </Button>
          </div>
        </div>
      </form>

      </div>

      <div className="fixed bottom-0 w-full">
        <Footer/>
      </div>
    </>


  );
};

export default AdminLogin;
