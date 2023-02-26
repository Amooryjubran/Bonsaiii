import { Fragment, useState } from "react";
import { useTimeout } from "@/hooks/useTimeout";
import Skeleton from "@/utils/Skeleton";

export default function CartHeader({ total, totalQty }) {
  const [loader, setLoader] = useState(false);
  useTimeout(() => {
    setLoader(true);
  }, 2000);
  return (
    <div className="CartHeader">
      {loader ? (
        <Fragment>
          <h1>YOUR BAG</h1>
          <p>
            Total (<strong>{totalQty}</strong> item{totalQty !== 1 && "s"}){" "}
            <strong>${total}</strong>
          </p>
          <p>
            Items in your bag are not reserved — check out now to make them
            yours.
          </p>
        </Fragment>
      ) : (
        <Fragment>
          <Skeleton width="150px" />
          <Skeleton width="250px" />
          <Skeleton width="350px" />
        </Fragment>
      )}
    </div>
  );
}
