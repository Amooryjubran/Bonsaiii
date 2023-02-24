import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Checkout from "@/pages/Checkout";
import Product from "@/pages/Product";
import ScrollToTop from "@/helper/ScrollTopTop";
import Scroller from "@/utils/Scroller";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Shop/:product" element={<Product />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      <Scroller />
    </Fragment>
  );
}

export default App;
