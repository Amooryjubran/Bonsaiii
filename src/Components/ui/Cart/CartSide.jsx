import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Squaer from "../../../assets/square.png";
import OrderSummary from "./OrderSummary";
import Skeleton from "@/utils/Skeleton";
import { useTimeout } from "@/hooks/useTimeout";
import PaymentModal from "./PaymentModal";
import useClickOutside from "@/hooks/useClickOutside";

export default function CartSide({ totalQty, total }) {
  const ref = useRef();
  const [loader, setLoader] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  useClickOutside(ref, () => setPaymentModal(false));

  useTimeout(() => {
    setLoader(true);
  }, 2000);
  return (
    <div className="cartSideContainer">
      <div className="paymentBtns">
        {loader ? (
          <button className="paymentLink" onClick={() => setPaymentModal(true)}>
            <span>PAYMENT</span>
            <ArrowRightAltIcon />
          </button>
        ) : (
          <Skeleton width="100%" />
        )}
        {loader ? <span>OR</span> : <Skeleton width="20%" />}
        {loader ? (
          <button
            className="paymentSquare"
            onClick={() => setPaymentModal(true)}
          >
            <img src={Squaer} alt="Square" />
            <ArrowRightAltIcon />
          </button>
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
      {paymentModal && (
        <PaymentModal innerRef={ref} setPaymentModal={setPaymentModal} />
      )}
    </div>
  );
}
