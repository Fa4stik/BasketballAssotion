import React, { Component } from "react";
import Button from "./Button";
import logo from "../assets/svg/nba_logo.svg";
const VisitorMenu = () => {
  return (
    <>
      <div className=" border-nba-border border-2 grid grid-cols-2 w-full items-center justify-between py-[133px] px-[166px] gap-x-[305px] gap-y-[199px]">
        <Button textSize="36px" paddings="px-[130px] pt-[32px] pb-[34px]">
          Teams
        </Button>
        <Button textSize="36px" paddings="px-[130px] pt-[32px] pb-[34px]">
          Players
        </Button>
        <Button textSize="36px" paddings="px-[130px] pt-[32px] pb-[34px]">
          Matchups
        </Button>
        <Button textSize="36px" paddings="px-[130px] pt-[32px] pb-[34px]">
          Photos
        </Button>
      </div>
    </>
  );
};

export default VisitorMenu;
