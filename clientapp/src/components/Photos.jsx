import React, {Component, useEffect, useState} from "react";
import PhotosPag from "./PhotosPag";
import {Box, Container, Pagination, Tab, TableRow} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import { picturesApi } from "../api/picturesApi";
import PhotoPagination from "./PhotosPag";


export default function Photos() {

  return (
    <>
      <h3 className="text-[28px] text-nba-darkgray text-center font-sans pt-10">
        When you like a photo, you can right-click a photo and
        choose the download menu item in the context menu to download.
      </h3>
      <div >
        <div>         
        <PhotosPag />
        </div>
        
      </div>

    </>
  );
}