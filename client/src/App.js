import Home from "./Home";
import CreateAccount from "./CreateAccount";
import PetCards from "./PetCards";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddNewPets from "./AddNewPets";


const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/createaccount"} element={<CreateAccount/>}/>
      <Route path={"/petcards"} element={<PetCards/>}/>
      <Route path={"/addpets"} element={<AddNewPets/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
