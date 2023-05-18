import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import Footer from "./Footer";
import { Button, Typography } from "@mui/material";
import axios, { Axios } from "axios";
import ReactDOM from "react-dom/client";
import Modal from "./modalWindows/Modal";
import ModalError from "./modalWindows/ModalError";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const url = `http://176.124.192.232/api/Authorization/login`;
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
  const [data, setData] = useState({
    jobnumber: "",
    password: "",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenError, setIsOpenError] = useState(false);

  const handleOpenError = () => {
    setIsOpenError(!isOpenError);
  };

  let navigate = useNavigate();

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  async function submit(e) {
    e.preventDefault();
    if (data.jobnumber === "" && data.password === "") {
      return null;
    }
    try {
      const loginUrl = `${url}?jobnumber=${encodeURIComponent(
        data.jobnumber
      )}&password=${encodeURIComponent(data.password)}`;
      const response = await axios.post(loginUrl, {}, { headers: headers });
      console.log(response);

      handleOpenModal();
    } catch (_) {
      handleOpenError();
    }
  }

  return (
    <>
      <p className="text-center text-nba-textGray text-[25px] my-10">
        Users can login into the system using their jobnumber and password.
      </p>

      <form action="">
        <div className="text-center flex flex-col justify-between h-full">
          <div className="w-full">
            <div className="flex items-center justify-center">
              <Typography className=" text-nba-textGray text-[25px] my-10">
                Jobnumber:
              </Typography>
              <input
                onChange={(e) => handle(e)}
                id="jobnumber"
                value={data.jobnumber}
                className=" border-solid border-2 ml-[20px] text-[28px] px-[14px]"
                type="text"
              />
            </div>
            <div className="flex items-center justify-center">
              <Typography className="text-nba-textGray text-[25px] my-10 justify-between">
                Password:
              </Typography>
              <input
                onChange={(e) => handle(e)}
                id="password"
                value={data.password}
                className="border-solid border-2 ml-[20px] text-[28px] px-[14px] px-1.5"
                type="password"
              />
            </div>
          </div>

          <p>
            <input className="my-10" type="checkbox" name="remember" /> Remember
            me{" "}
          </p>

          <div className="my-10">
            {/*<Button*/}
            {/*  variant="standard"*/}
            {/*  className="w-[40px]  bg-nba-wheat  text-[10px] nba-textGray mx-10"*/}
            {/*  >*/}
            {/*  Login*/}
            {/*</Button>*/}

            <button
              onClick={(e) => submit(e)}
              type="submit"
              className="bg-transparent hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-md mx-10 "
            >
              Login
            </button>

            <button
              onClick={() => navigate(-1)}
              type="button"
              className="bg-transparent hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-md mx-10"
            >
              Cancel
            </button>

            <Modal
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              onClose={handleCloseModal}
            />
            <ModalError
              setIsOpen={setIsOpenError}
              isOpen={isOpenError}
              onClose={handleOpenError}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default AdminLogin;
