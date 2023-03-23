import React, {Component, useEffect} from 'react';
import Button from "./Button";
import {Link} from "react-router-dom";

const EventAdministratorMenu = (props) => {
  useEffect(() => {
    const headerTitle = "Event Administrator Menu";
    props.setHeaderTitle(headerTitle);
    document.title = headerTitle;
  });
  return (
    <>
      <h3 className="text-[32px] text-nba-darkgray text-center font-sans mt-[100px]">
        Welcome to use this system , you can click the buttons below to navigate to the corresponding page.
      </h3>
      <div className="grid grid-cols-2 py-[133px] px-[166px] gap-x-[305px] gap-y-[199px]">
        <Link to=''>
          <Button color="white"
                  paddings="pt-[32px] pb-[34px]"
                  className="w-[372px]">
            Manage Seasons
          </Button>
        </Link>

        <Link to=''>
          <Button color="white"
                  paddings="pt-[32px] pb-[34px]"
                  className="w-[372px]">
            Manage Matchups
          </Button>
        </Link>

        <Link to=''>
          <Button color="white"
                  paddings="pt-[32px] pb-[34px]"
                  className="w-[372px]">
            Manage Teams
          </Button>
        </Link>

        <Link to=' '>
          <Button color="white"
                  paddings="pt-[32px] pb-[34px]"
                  className="w-[372px]">
            Manage Players
          </Button>
        </Link>

      </div>
    </>
  );
};

export default EventAdministratorMenu;
