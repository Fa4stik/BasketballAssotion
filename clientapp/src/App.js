import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import VisitorMenu from "./components/VisitorMenu";
import Photos from "./components/Photos";
import { Layout } from "./components/Layout";
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
        </Route>
      </Routes>
    </>
  );
}

export default App;
