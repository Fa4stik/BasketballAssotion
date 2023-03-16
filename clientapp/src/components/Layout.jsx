import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Layout = (props) => {
  return (
    <div className="flex flex-col min-h-screen">
      {props.header ? <Header title={ props.headerTitle} /> : ""}
      <div className="grow flex flex-col items-center justify-center mx-auto">
        <Outlet />
      </div>
      <Footer className="mt-auto" />
    </div>
  );
};
export { Layout };
