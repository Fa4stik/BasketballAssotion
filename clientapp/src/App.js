import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import VisitorMenu from "./components/VisitorMenu";
import Photos from "./components/Photos";
import { Layout } from "./components/Layout";
import EventAdministratorMenu from "./components/EventAdministratorMenu";
import AddANewMatchupForRegularSeason from "./components/AddANewMuthcupForRegularSeason";
import TechnicalAdministratorMenu from "./components/TechnicalAdministratorMenu";
import AdminLogin from "./components/AdminLogin"
require("./index.css");
function App() {
  let location = useLocation();
  const [headerTitle, setHeaderTitle] = useState("");

  return (
    <>
      <AdminLogin/>
    </>
  );
}

export default App;
