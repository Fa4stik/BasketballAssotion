import React, {Component, useEffect} from 'react';
import Button from "./ButtonNba";
import {Link} from "react-router-dom";
import ButtonNba from "./ButtonNba";

const EventAdministratorMenu = (props) => {
  useEffect(() => {
    const headerTitle = "Event Administrator Menu";
    props.setHeaderTitle(headerTitle);
    document.title = headerTitle;
  });
  return (
    <>
      <h3 className="text-[28px] text-nba-darkgray text-center font-sans pt-10">
        Welcome to use this system , you can click the buttons below to navigate to the corresponding page.
      </h3>
      <div className="grid grid-cols-2 w-full items-center justify-between py-[80px] px-[166px] gap-x-[205px] gap-y-[105px]">

        <Link to=''>
          <ButtonNba color="white"
                  paddings="pt-[32px] pb-[34px]"
                  className="w-[450px]">
            Manage Seasons
          </ButtonNba>
        </Link>

        <Link to=''>
          <ButtonNba color="white"
                  paddings="pt-[32px] pb-[34px] "
                  className="w-[450px]">
            Manage Matchups
          </ButtonNba>
        </Link>

        <Link to=''>
          <ButtonNba color="white"
                  paddings="pt-[32px] pb-[34px]"
                  className="w-[450px]">
            Manage Teams
          </ButtonNba>
        </Link>

        <Link to=' '>
          <ButtonNba color="white"
                  paddings="pt-[32px] pb-[34px]"
                  className="w-[450px]">
            Manage Players
          </ButtonNba>
        </Link>

      </div>
    </>
  );
};

export default EventAdministratorMenu;
