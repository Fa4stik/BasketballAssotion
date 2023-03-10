import { Routes, Route } from 'react-router-dom';
import  MainScreen  from "./components/MainScreen";
import VisitorMenu from "./components/VisitorMenu";
import { Layout } from "./components/Layout";
require("./index.css");
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={ <MainScreen/>}/>
            <Route path='visitor' element={ <VisitorMenu/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
