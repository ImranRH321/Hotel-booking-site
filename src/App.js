import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Header from "./pages/Header/Header";
import SingleRoom from "./pages/Home/SingleRooms/SingleRooms";
import DoubleRooms from "./pages/Home/DoubleRooms/DoubleRooms";
import FamilyRooms from "./pages/Home/FamilyRooms/FamilyRooms";
import Login from "./pages/Login/Login";
import Orders from "./pages/Orders/Orders";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/singleRooms" element={<SingleRoom></SingleRoom>}></Route>
        <Route
          path="/doubleRooms"
          element={<DoubleRooms></DoubleRooms>}
        ></Route>
        <Route
          path="/familyRooms"
          element={<FamilyRooms></FamilyRooms>}
        ></Route>
        <Route path="orders"  element={<Orders></Orders>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
