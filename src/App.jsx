import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "@/Components/Navbar/Navbar";
import Home from "@/Pages/Home";
import Shop from "@/Pages/Shop";
import Product from "@/Pages/Product";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Shop/:product" element={<Product />} />
      </Routes>
    </Fragment>
  );
}

export default App;
