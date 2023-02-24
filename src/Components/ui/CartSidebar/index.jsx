import { Fragment, useEffect, useState } from "react";
import "./style.css";
import ProductCard from "./ProductCard";
import useCart from "@/store/store";
import useLockScroll from "@/hooks/useLockScroll";
export default function index({ innerRef }) {
  const total = useCart((state) => state.total);
  const cart = useCart((state) => state.cartContent);
  const [mycart, setCart] = useState([]);
  const [mytotal, setTotal] = useState();
  useLockScroll();

  useEffect(() => {
    setCart(cart);
    setTotal(total);
  }, [cart]);
  return (
    <div className="cartSidebar" ref={innerRef}>
      {!mycart.length && (
        <div className="cartEmpty">
          <span>Your Cart is</span>
          <strong>Empty</strong>
        </div>
      )}
      {!!mycart.length && (
        <Fragment>
          <span>
            You have <strong>{mycart.length} items!</strong>
          </span>
          {mycart.map((cart, index) => (
            <ProductCard props={cart} key={index} />
          ))}
        </Fragment>
      )}
    </div>
  );
}
