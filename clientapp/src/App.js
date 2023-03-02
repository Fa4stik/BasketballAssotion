import { Routes, Route } from 'react-router-dom';
import  MainScreen  from "./components/MainScreen";
import { Layout } from "./components/Layout";
require("./index.css");
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={ <MainScreen/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
