import React from "react";
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";

export default function Modal({isOpen, setIsOpen}) {
  return (
    <>
      {isOpen ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold italic text-yellow-500">
                    FOR TESTING ONLY!
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <Typography className="text-nba-textGray text-[25px] my-10 justify-between">
                    Which type of user would you like to login to the system as?
                  </Typography>
                  <Link to="eventMenu">
                    <button className="w-[140px] h-[25px] text-[10px] nba-textGray mx-10">
                      Event Administrator
                    </button>
                  </Link>
                  <br/>
                  <br/>
                  <Link to="techAdmin">
                    <button className="w-[140px] h-[25px] text-[10px] nba-textGray mx-10">
                      Technical Administrator
                    </button>
                  </Link>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="w-[80px] h-[25px]   text-[10px] nba-textGray mx-10" type="button"
                    onClick={() => setIsOpen(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
