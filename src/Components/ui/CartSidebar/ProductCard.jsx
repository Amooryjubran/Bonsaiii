import useCart from "@/store/store";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export default function ProductCard({ props }) {
  const { id, img, name, price, quantity, desc, discount } = props;
  const addTocart = useCart((state) => state.addTocart);
  const updatecart = useCart((state) => state.updatecart);
  const decrementCart = useCart((state) => state.decrementCart);
  const mycart = useCart((state) => state.cartContent);
  const removeFromCart = useCart((state) => state.removeFromCart);

  const addProduct = (params) => {
    const product = mycart.findIndex((item) => item.id === params.id);
    console.log(params);
    if (product !== -1) {
      mycart[product].quantity++;
      updatecart({ params, mycart });
    } else {
      addTocart(params);
    }
  };
  const removeProduct = (params) => {
    const product = mycart.findIndex((item) => item.id === params.id);
    if (mycart[product].quantity == 1) return;
    if (product !== -1) {
      mycart[product].quantity--;
      decrementCart({ params, mycart });
    }
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
                price: price,
                img: img,
                desc: desc,
                discount: discount,
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
                price: price,
                img: img,
                desc: desc,
                discount: discount,

                quantity: 1,
              })
            }
          >
            <AddIcon />
          </button>
        </div>
        <div className="productDiscount">
          <span className={props.discount && "discounted"}>${props.price}</span>
          {props.discount && <span>${props.discount}</span>}
        </div>
        <button
          className="removeFromCart"
          onClick={() =>
            removeFromCart({
              id: id,
              name: name,
              price: price,
              img: img,
              desc: desc,
              discount: discount,
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
