import { useState } from "react";
import { useTimeout } from "@/hooks/useTimeout";
import Skeleton from "@/utils/Skeleton";
import useCart from "@/store/store";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { AddProduct } from "@/utils/AddProduct";
import { RemoveProduct } from "@/utils/RemoveProduct";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductCard({ props }) {
  const { id, img, name, price, quantity, desc, discount } = props;
  const addTocart = useCart((state) => state.addTocart);
  const updatecart = useCart((state) => state.updatecart);
  const decrementCart = useCart((state) => state.decrementCart);
  const mycart = useCart((state) => state.cartContent);
  const removeFromCart = useCart((state) => state.removeFromCart);
  const [loader, setLoader] = useState(false);
  useTimeout(() => {
    setLoader(true);
  }, 1000);
  const notify = (props) => {
    toast(`🛒 ${props} Removed Successfully`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const addProduct = (params) => {
    AddProduct(params, mycart, updatecart, addTocart);
  };
  const removeProduct = (params) => {
    RemoveProduct(params, mycart, decrementCart);
  };
  const totalPrice =
    (props.discount ? props.discount : props.price) * props.quantity;

  return (
    <div className="productCardContainer cart">
      <div className="productParent">
        {loader ? (
          <div
            className="productImg cart"
            style={{ backgroundImage: `url(${img})` }}
          />
        ) : (
          <Skeleton width="150px" height="100%" />
        )}
        <div className="productCardInfo cart">
          <h1>{loader ? name : <Skeleton width="100px" />}</h1>
          <span>{loader ? desc : <Skeleton width="200px" />}</span>
          <span>
            {loader ? "Limited Inventory" : <Skeleton width="150px" />}
          </span>

          {loader ? (
            <div className="productDiscount">
              <span className={props.discount && "discounted"}>
                <strong>${Math.round(props.price * 100) / 100}/piece</strong>
              </span>
              {props.discount && (
                <span>
                  <strong>
                    ${Math.round(props.discount * 100) / 100}/piece
                  </strong>
                </span>
              )}
            </div>
          ) : (
            <Skeleton width="150px" height="2r0px" />
          )}
          {loader ? (
            <div className="inventoryParent">
              <div className="inventory">
                <button
                  onClick={() => {
                    removeProduct({
                      id: id,
                      name: name,
                      price: Math.round(price * 100) / 100,
                      img: img,
                      desc: desc,
                      discount: Math.round(discount * 100) / 100,
                      quantity: 1,
                    });
                  }}
                >
                  <RemoveIcon />
                </button>
                <div>{quantity}</div>
                <button
                  onClick={() =>
                    addProduct({
                      id: id,
                      name: name,
                      price: Math.round(price * 100) / 100,
                      img: img,
                      desc: desc,
                      discount: Math.round(discount * 100) / 100,
                      quantity: 1,
                    })
                  }
                >
                  <AddIcon />
                </button>
              </div>
              <button
                className="removeFromCart cart"
                onClick={() => {
                  removeFromCart({
                    id: id,
                    name: name,
                    price: Math.round(price * 100) / 100,
                    img: img,
                    desc: desc,
                    discount: Math.round(discount * 100) / 100,
                    quantity: quantity,
                  });
                  notify(name);
                }}
              >
                Remove Product
              </button>
            </div>
          ) : (
            <Skeleton width="350px" />
          )}
        </div>
      </div>
      <div className="productTotal">
        {loader ? <strong>${totalPrice}</strong> : <Skeleton width="20px" />}
      </div>
      <ToastContainer />
    </div>
  );
}
