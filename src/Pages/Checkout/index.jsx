import { Fragment, useEffect, useState } from "react";
import "./style.css";
import useCart from "@/store/store";
import Breadcrumbs from "@/utils/Breadcrumbs";
import CartHeader from "@/Components/ui/Cart/CartHeader";
import CartSide from "@/Components/ui/Cart/CartSide";
import Discount from "@/Components/ui/Cart/Discount";
import ProductCard from "@/Components/ui/Cart/ProductCard";
import Slider from "@/Components/Slider/Slider";
import { useQuery } from "@/hooks/useQuery";

export default function index() {
  const { data } = useQuery("plants");
  const total = useCart((state) => state.total);
  const cart = useCart((state) => state.cartContent);
  const totalqty = useCart((state) => state.totalqty);

  const [mycart, setCart] = useState([]);
  const [mytotal, setTotal] = useState();
  const [totalQty, setTotalQty] = useState();

  useEffect(() => {
    setTotalQty(totalqty);
    setCart(cart);
    setTotal(total);
  }, [totalQty, cart]);
  return (
    <div className="checkout">
      <div className="breadCrumbsContainer">
        <Breadcrumbs />
      </div>
      <div className="cartContainer">
        <div className="cartSection">
          <CartHeader total={total} totalQty={totalqty} />
          <Discount />
          {mycart.map((cart, index) => (
            <ProductCard props={cart} key={index} />
          ))}
        </div>
        <div className="cartSide">
          <CartSide totalQty={totalqty} total={total} />
        </div>
      </div>
      <div className="sliderContainer cart">
        <span>
          We Think You will <strong>Love</strong>
        </span>
        <Slider props={data} />
      </div>
    </div>
  );
}
