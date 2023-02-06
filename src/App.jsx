import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "@/Components/Navbar/Navbar";
import Home from "@/Pages/Home";
import Shop from "./Pages/Shop";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
    </Fragment>
  );
}

export default App;
