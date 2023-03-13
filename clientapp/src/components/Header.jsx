import React from "react";
import Logo from "../assets/svg/nba_logo_small.svg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
const Header = (props) => {
  let navigate = useNavigate();
  return (
    <>
      <header className="px-[27px] py-[10px] grid items-end justify-center grid-flow-col grid-cols-3 border-[2px] border-nba-blue border-solid">
        <div className="flex items-end">
          <img className="pr-[23px]" src={Logo} alt="Nba Logo" />
          <p className="text-nba-textGray text-[25px]">NBA Management System</p>
        </div>
        <h2 className="text-nba-textGray text-[36px] justify-self-auto justify-self-center">
          {document.title}
        </h2>
        <div className="justify-self-end">
          <Button
            onClick={() => navigate(-1)}
            className="w-[120px] rounded-xl bg-nba-wheat  text-[30px]"
          >
            Back
          </Button>
        </div>
      </header>
    </>
  );
};
export { Header };
