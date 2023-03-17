import React, { Component, useEffect } from "react";

const Photos = () => {
  useEffect(() => {
    const headerTitle = "Photos";
    this.props.setHeaderTitle(headerTitle);
    document.title = headerTitle;
  });

  return (
    <>
      <h3 className="text-[32px] text-nba-darkgray text-center font-sans mt-[20px]">
        When you like a photo, you can right-click a photo and choose the
        download menu item in the context menu to download.
      </h3>
      <div className="w-[801px] h-[373px] border-nba-border border-2 mt-[58px] flex items-center justify-between pl-[88px] pr-[88px]"></div>
      <div className="grid grid-cols-3 w-full items-center justify-between py-[133px] px-[166px] gap-x-[305px] gap-y-[199px]">
        <h3 className="text-[32px] text-nba-darkgray font-sans mt-[20px]">
          Total XX Photos , YY Photos in one page, Total ZZ Pages
        </h3>
      </div>
    </>
  );
};

export default Photos;
