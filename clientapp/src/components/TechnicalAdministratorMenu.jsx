import React, {useState} from "react";
import ButtonNba from "./ButtonNba.jsx";
import {Outlet} from 'react-router-dom';

import Footer from "./Footer";
import ModalTechError from "./modalWindows/ModalTechError"


const TechnicalAdministratorMenu = () => {
  const[setModalActive] = useState(true)
  const [isOpen, setIsOpen] = useState(false);


  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
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
