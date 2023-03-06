import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "@/Components/Layout/Navbar";
import Footer from "@/Components/Layout/Footer";
import Home from "@/Pages/Home";
import Shop from "@/Pages/Shop";
import Checkout from "@/Pages/Checkout";
import Product from "@/Pages/Product";
import ScrollToTop from "@/helper/ScrollTopTop";
import Scroller from "@/utils/Scroller";
import useGoogleAnalytics from "@/hooks/useGoogleAnalytics";

function App() {
  useGoogleAnalytics();

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
