import React, {useEffect, useState} from "react";
import ButtonNba from "./ButtonNba.jsx";
import {Link,Outlet} from 'react-router-dom';
import Logo from "../assets/svg/nba_logo_small.svg";
import {Button, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import ModalTechError from "./modalWindows/ModalTechError"


const TechnicalAdministratorMenu = (props) => {
  let navigate = useNavigate();
  const[modalActive, setModalActive] = useState(true)
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  async function submit(e){
    handleOpenModal();
  }

  return (
    <>
      <header className="px-[27px] py-[10px] grid items-end justify-center grid-flow-col grid-cols-3 border-[2px] border-nba-blue border-solid">
        <div className="flex items-end">
          <img className="pr-[23px]" src={Logo} alt="Nba Logo" />
          <Typography className="text-nba-textGray text-[25px]"
                      onClick={(e)=>submit(e)}>
            NBA Management System
          </Typography>
        </div>
        <Typography
          variant="h2"
          className="text-nba-textGray text-[36px] justify-self-auto justify-self-center">
          {props.title}
        </Typography>
        <div className="justify-self-end">

          <Button
            variant="standard"
            onClick={() => navigate(-1)}
            className="w-[150px] rounded-xl bg-nba-wheat  text-[30px] nba-textGray">
            Logout
          </Button>

          <Button
            variant="standard"
            onClick={() => navigate(-1)}
            className="w-[120px] rounded-xl bg-nba-wheat  text-[30px] nba-textGray mx-10">
            Back
          </Button>
        </div>
      </header>

      <p className="text-center text-nba-textGray text-[25px] my-10">Welcome to use this system , you can click the buttons below to navigate to the corresponding
        page.</p>

      <div className="border-nba-border border-2 grid grid-cols-2 w-full items-center justify-between py-[133px] px-[166px] gap-x-[305px] gap-y-[199px]">

        <ButtonNba
          color="white"
          paddings="pt-[32px] pb-[34px]"
          className="w-[372px]"
          onClick = {() => setModalActive(true)}
        >
          Manage Executions
        </ButtonNba>

        <ButtonNba
          color="white"
          paddings="pt-[32px] pb-[34px]"
          className="w-[372px]">
          Team Report
        </ButtonNba>
        <ModalTechError setIsOpen={setIsOpen} isOpen={isOpen} onClose={handleCloseModal}/>
        <Outlet />
      </div>

      <div className="fixed bottom-0 w-full">
        <Footer/>
      </div>

    </>
  );
};

export default TechnicalAdministratorMenu;
