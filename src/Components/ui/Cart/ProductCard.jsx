import useCart from "@/store/store";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { AddProduct } from "@/utils/AddProduct";
import { RemoveProduct } from "@/utils/RemoveProduct";
export default function ProductCard({ props }) {
  const { id, img, name, price, quantity, desc, discount } = props;
  const addTocart = useCart((state) => state.addTocart);
  const updatecart = useCart((state) => state.updatecart);
  const decrementCart = useCart((state) => state.decrementCart);
  const mycart = useCart((state) => state.cartContent);
  const removeFromCart = useCart((state) => state.removeFromCart);

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
        <div
          className="productImg cart"
          style={{ backgroundImage: `url(${img})` }}
        />
        <div className="productCardInfo cart">
          <h1>{name}</h1>
          <span>{desc}</span>
          <span>Limited Inventory</span>

          <div className="productDiscount">
            <span className={props.discount && "discounted"}>
              <strong>${Math.round(props.price * 100) / 100}/piece</strong>
            </span>
            {props.discount && (
              <span>
                <strong>${Math.round(props.discount * 100) / 100}/piece</strong>
              </span>
            )}
          </div>
          <div className="inventoryParent">
            <div className="inventory">
              <button
                onClick={() =>
                  removeProduct({
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
              onClick={() =>
                removeFromCart({
                  id: id,
                  name: name,
                  price: Math.round(price * 100) / 100,
                  img: img,
                  desc: desc,
                  discount: Math.round(discount * 100) / 100,
                  quantity: quantity,
                })
              }
            >
              Remove Product
            </button>
          </div>
        </div>
      </div>
      <div className="productTotal">
        <strong>${totalPrice}</strong>
      </div>
    </div>
  );
}
