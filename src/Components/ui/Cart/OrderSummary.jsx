import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Payment from "../../../assets/payment.png";
import Skeleton from "@/utils/Skeleton";

export default function OrderSummary({ totalQty, total, loader, setLoader }) {
  const [discount, setDiscount] = useState("BONSAI10");
  const [isCorrect, setIsCorrent] = useState(false);
  const [codeAdded, setCodeAded] = useState(false);
  const [code, setCode] = useState("");
  const handleDiscount = (e) => {
    e.preventDefault();
    if (code === discount) {
      setIsCorrent(true);
      setCodeAded(true);
    } else {
      setIsCorrent(null);
    }
  };
  return (
    <div className="orderSummary">
      {loader ? <h1>ORDER SUMMARY</h1> : <Skeleton width="20%" />}

      {loader ? (
        <>
          <div className="orderDetails">
            <div>
              <span>{totalQty} item</span>
              <span>${total}</span>
            </div>
            <div>
              <span>Sales Tax</span>
              <span>-</span>
            </div>
            <div>
              <span>Delivery</span>
              <span>$4.50</span>
            </div>
          </div>
          <div className="orderDetails">
            <div>
              <h1>Total</h1>
              <div className="codeAddedFinal">
                <h1 className={codeAdded ? "codeAddedTotal" : ""}>
                  ${total + 4.5}
                </h1>
                {codeAdded && <h1>${total + 4.5 - 7}</h1>}
              </div>
            </div>
          </div>
        </>
      ) : (
        <Skeleton width="100%" />
      )}

      {loader ? (
        <>
          <div className="orderDiscount">
            <form
              onSubmit={(e) => {
                handleDiscount(e);
              }}
            >
              <input onChange={(e) => setCode(e.target.value)} type="text" />
              <button>
                <AddIcon />
              </button>
            </form>
          </div>
          {isCorrect && <span>DISOCUNT ADDED</span>}
          {isCorrect === null && <span>CODE IS INVALID</span>}
          <img src={Payment} alt="payment" />
        </>
      ) : (
        <Skeleton width="100%" />
      )}
    </div>
  );
}
