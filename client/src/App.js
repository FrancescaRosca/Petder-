import Home from "./Home";
import CreateAccount from "./CreateAccount";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/createaccount"} element={<CreateAccount/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
