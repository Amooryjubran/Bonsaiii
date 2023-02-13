import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "@/Components/Layout/Navbar";
import Footer from "@/Components/Layout/Footer";
import Home from "@/Pages/Home";
import Shop from "@/Pages/Shop";
import Product from "@/Pages/Product";
import ScrollToTop from "@/helper/ScrollTopTop";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Shop/:product" element={<Product />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </Fragment>
  );
}

export default App;
