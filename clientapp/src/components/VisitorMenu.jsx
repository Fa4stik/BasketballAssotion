import React, { Component, useEffect } from "react";
import Button from "./Button";
import {Link,Outlet} from 'react-router-dom';
const VisitorMenu = () => {
  useEffect(() => {
    const headerTitle = 'Visitor Menu';
    this.props.setHeaderTitle(headerTitle);
    document.title = headerTitle;
  });
    return (
      <>
        <div className=" border-nba-border border-2 grid grid-cols-2 w-full items-center justify-between py-[133px] px-[166px] gap-x-[305px] gap-y-[199px]">
          <Button
            color="white"
            paddings="pt-[32px] pb-[34px]"
            className="w-[372px]"
          >
            Teams
          </Button>
          <Button
            color="white"
            paddings="pt-[32px] pb-[34px]"
            className="w-[372px]"
          >
            Players
          </Button>
          <Button
            color="white"
            paddings="pt-[32px] pb-[34px]"
            className="w-[372px]"
          >
            Matchups
          </Button>
          <Link to="photos">
            <Button
              color="white"
              paddings="pt-[32px] pb-[34px]"
              className="w-[372px]"
            >
              Photos
            </Button>
          </Link>
          <Outlet />
        </div>
      </>
    );
}

export default VisitorMenu;
