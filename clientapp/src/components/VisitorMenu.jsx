import React, { Component, useEffect } from "react";
import Button from "./Button";
import { Helmet } from "react-helmet";
import {Header} from "./Header";
class VisitorMenu extends React.Component {
  
  render() {
    
    return (
      <>
        <Helmet>
          <title>Visitor Menu</title>
        </Helmet>
        <div className=" border-nba-border border-2 grid grid-cols-2 w-full items-center justify-between py-[133px] px-[166px] gap-x-[305px] gap-y-[199px]">
          <Button color="white" paddings="px-[130px] pt-[32px] pb-[34px]">
            Teams
          </Button>
          <Button color="white" paddings="px-[130px] pt-[32px] pb-[34px]">
            Players
          </Button>
          <Button color="white" paddings="px-[130px] pt-[32px] pb-[34px]">
            Matchups
          </Button>
          <Button color="white" paddings="px-[130px] pt-[32px] pb-[34px]">
            Photos
          </Button>
        </div>
      </>
    );
  }
}

export default VisitorMenu;
