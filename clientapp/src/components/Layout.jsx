import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="grow flex flex-col items-center justify-center mx-auto">
        <Outlet />
      </div>
      <Footer className="mt-auto" />
    </div>
  );
};
export { Layout };
