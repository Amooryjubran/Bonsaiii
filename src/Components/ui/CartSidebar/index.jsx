import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import ProductCard from "./ProductCard";
import useCart from "@/store/store";
import useLockScroll from "@/hooks/useLockScroll";
import { useQuery } from "@/hooks/useQuery";
import Slider from "@/Components/Slider/Slider";
import EmptyShoppingCart from "../../../assets/emptyShoppingCart.png";
import SubTotal from "./subTotal";
export default function index({ innerRef, setCartBar }) {
  const { data } = useQuery("plants");
  const total = useCart((state) => state.total);
  const cart = useCart((state) => state.cartContent);
  const [mycart, setCart] = useState([]);
  const [mytotal, setTotal] = useState();
  useLockScroll();

  useEffect(() => {
    setCart(cart);
    setTotal(total);
  }, [cart]);
  console.log(total);
  return (
    <div className="cartSidebar" ref={innerRef}>
      {!mycart.length ? (
        <Fragment>
          <div className="cartEmpty">
            <span>Your Cart is</span>
            <strong>Empty</strong>
          </div>
          {/* <img src={EmptyShoppingCart} alt="empty-cart" /> */}
          <Link
            className="shopLink"
            to="/shop"
            onClick={() => setCartBar(false)}
          >
            Shop
          </Link>
        </Fragment>
      ) : (
        <Fragment>
          <span>
            You have <strong>{mycart.length} items!</strong>
          </span>
          {mycart.map((cart, index) => (
            <ProductCard props={cart} key={index} />
          ))}
          <SubTotal total={total} />
        </Fragment>
      )}
      <div className="whatYouLike">
        <span>
          We Think You'll Also <strong>Love</strong>
        </span>
        <Slider props={data} small={true} />
      </div>
    </div>
  );
}
