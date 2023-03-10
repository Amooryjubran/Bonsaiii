import { useState } from "react";
import { useTimeout } from "@/hooks/useTimeout";
import Skeleton from "@/utils/Skeleton";
export default function Discount() {
  const [loader, setLoader] = useState(false);
  useTimeout(() => {
    setLoader(true);
  }, 1000);
  return loader ? (
    <div className="cartDiscount">
      <h1>EXTRA 10% OFF PLANTS</h1>
      <p>
        Use code <strong>BONSAI10</strong> for an additional 10% Off total
        price. Items are final sale and not eligible for returns or exchanges.
      </p>
    </div>
  ) : (
    <Skeleton width="80%" height="168px" />
  );
}
