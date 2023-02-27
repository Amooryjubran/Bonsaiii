import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Squaer from "../../../assets/square.png";
import OrderSummary from "./OrderSummary";
import Skeleton from "@/utils/Skeleton";
import { useTimeout } from "@/hooks/useTimeout";

export default function CartSide({ totalQty, total }) {
  const [loader, setLoader] = useState(false);
  useTimeout(() => {
    setLoader(true);
  }, 2000);
  return (
    <div className="cartSideContainer">
      <div className="paymentBtns">
        {loader ? (
          <Link to="/payment" className="paymentLink">
            <span>PAYMENT</span>
            <ArrowRightAltIcon />
          </Link>
        ) : (
          <Skeleton width="100%" />
        )}
        {loader ? <span>OR</span> : <Skeleton width="20%" />}
        {loader ? (
          <Link to="/payment" className="paymentSquare">
            <img src={Squaer} alt="Square" />
            <ArrowRightAltIcon />
          </Link>
        ) : (
          <Skeleton width="100%" />
        )}
      </div>
      <OrderSummary
        totalQty={totalQty}
        total={total}
        loader={loader}
        setLoader={setLoader}
      />
    </div>
  );
}
