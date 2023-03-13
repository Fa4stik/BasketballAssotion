import { Routes, Route, useLocation } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import VisitorMenu from "./components/VisitorMenu";
import { Layout } from "./components/Layout";
require("./index.css");
function App() {
  let location = useLocation();

  return (
    <>
      <Routes> 
        <Route path="/"  element={<Layout header={location.pathname !== "/" } />}>
          <Route index element={<MainScreen />} />
          <Route path="visitor" element={<VisitorMenu />} />
        </Route>
        {/* <Route element={<Layout header={true} />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
