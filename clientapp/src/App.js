import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import VisitorMenu from "./components/VisitorMenu";
import Photos from "./components/Photos";
import { Layout } from "./components/Layout";
import EventAdministratorMenu from "./components/EventAdministratorMenu";
import AddANewMatchupForRegularSeason from "./components/AddANewMatchupForRegularSeason";
import TeamsMain from "./components/TeamsMain";
import PlayesMain from "./components/PlayersMain";
import AdminLogin from "./components/AdminLogin";
import TechnicalAdministratorMenu from "./components/TechnicalAdministratorMenu";
import PlayerDetail from "./components/PlayerDetail";
import MatchupList from "./components/MatchupList";
import MatchupDetail from "./components/MatchupDetail";
require("./index.css");


function App() {
  let location = useLocation();
  const [headerTitle, setHeaderTitle] = useState("");

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              headerTitle={headerTitle}
              header={location.pathname !== "/"}
            />
          }
        >
          <Route index element={<MainScreen />} />
          <Route
            path="visitor"
            element={<VisitorMenu setHeaderTitle={setHeaderTitle} />}
          />
          <Route
            path="visitor/photos"
            element={<Photos setHeaderTitle={setHeaderTitle} />}
          />

          <Route
            path="admin/eventMenu"
            element={<EventAdministratorMenu setHeaderTitle={setHeaderTitle} />}
          />
          <Route
            path="matchups/create-new"
            element={
              <AddANewMatchupForRegularSeason setHeaderTitle={setHeaderTitle} />
            }
          />
          <Route
            path="visitor/teams"
            element={<TeamsMain setHeaderTitle={setHeaderTitle} />}
          />
          <Route
            path="visitor/players"
            element={<PlayesMain setHeaderTitle={setHeaderTitle} />}
          />
          <Route
            path="visitor/players/:playerId"
            element={<PlayerDetail setHeaderTitle={setHeaderTitle} />}
          />
          <Route
            path="visitor/matchups"
            element={<MatchupList setHeaderTitle={setHeaderTitle} />}
          />
          <Route
            path="visitor/matchups/:matchupId"
            element={<MatchupDetail setHeaderTitle={setHeaderTitle} />}
          />
          <Route
            path="admin"
            element={<AdminLogin setHeaderTitle={setHeaderTitle} />}
          />
          <Route
            path="admin/techAdmin"
            element={
              <TechnicalAdministratorMenu setHeaderTitle={setHeaderTitle} />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
