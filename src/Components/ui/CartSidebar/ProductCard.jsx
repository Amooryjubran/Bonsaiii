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
  return (
    <div className="productCardContainer">
      <div className="productImg" style={{ backgroundImage: `url(${img})` }} />
      <div className="productCardInfo">
        <h1>{name}</h1>
        <span>{desc.slice(0, 25)}...</span>
        <span>Limited Inventory</span>
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
        <div className="productDiscount">
          <span className={props.discount && "discounted"}>
            ${Math.round(props.price * 100) / 100}
          </span>
          {props.discount && (
            <span>${Math.round(props.discount * 100) / 100}</span>
          )}
        </div>
        <button
          className="removeFromCart"
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
          Remove From Cart
        </button>
      </div>
    </div>
  );
}
