import React, {Component} from 'react';
import Button from "./Button";
import {Link} from "react-router-dom";

class EventAdministratorMenu extends Component {
  render() {
    return (
      <>
        <h3 className="text-[32px] text-nba-darkgray text-center font-sans mt-[20px]">
          Welcome to use this system , you can click the buttons below to navigate to the corresponding page.
        </h3>
        <div className="grid grid-cols-2 w-full items-center justify-between py-[133px] px-[166px] gap-x-[305px] gap-y-[199px]">
          <Link to=''>
            <Button textSize="36px" paddings="px-[130px] pt-[32px] pb-[34px]">
              Manage Seasons
            </Button>
          </Link>
          <Link to=''>
            <Button textSize="36px" paddings="px-[130px] pt-[32px] pb-[34px]">
              Manage Matchups
            </Button>
          </Link>
          <Link to=''>
            <Button textSize="36px" paddings="px-[130px] pt-[32px] pb-[34px]">
              Manage Teams
            </Button>
          </Link>
          <Link to=''>
            <Button textSize="36px" paddings="px-[130px] pt-[32px] pb-[34px]">
              Manage Players
            </Button>
          </Link>
        </div>
      </>
    );
  }
}

export default EventAdministratorMenu;
