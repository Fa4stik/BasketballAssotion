import React, { Component, useEffect } from "react";
import ButtonNba from "./ButtonNba";
import { Link, Outlet } from 'react-router-dom';
const VisitorMenu = (props) => {
  useEffect(() => {
    const headerTitle = "Visitor Menu";
    props.setHeaderTitle(headerTitle);
    document.title = headerTitle;
  });
  return (
    <>
      <div className=" border-nba-border border-2 grid grid-cols-2 w-full items-center justify-between py-[133px] px-[166px] gap-x-[305px] gap-y-[199px]">
        <Link to="teams">
          <ButtonNba
            color="white"
            paddings="pt-[32px] pb-[34px]"
            className="w-[372px]"
          >
            Teams
          </ButtonNba>
        </Link>
        <Link to='players'>
          <ButtonNba
            color="white"
            paddings="pt-[32px] pb-[34px]"
            className="w-[372px]"
          >
            Players
          </ButtonNba>
        </Link>
        <ButtonNba
          color="white"
          paddings="pt-[32px] pb-[34px]"
          className="w-[372px]"
        >
          Matchups
        </ButtonNba>
        <Link to="photos">
          <ButtonNba
            color="white"
            paddings="pt-[32px] pb-[34px]"
            className="w-[372px]"
          >
            Photos
          </ButtonNba>
        </Link>
        <Outlet />
      </div>
    </>
  );
};

export default VisitorMenu;
