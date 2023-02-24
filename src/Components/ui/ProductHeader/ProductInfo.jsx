import { Fragment, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import Skeleton from "@/utils/Skeleton";
import useCart from "@/store/store";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
export default function ProductInfo({ props }) {
  const [btn, setBtn] = useState("Add To Cart");
  const addTocart = useCart((state) => state.addTocart);
  const updatecart = useCart((state) => state.updatecart);
  const mycart = useCart((state) => state.cartContent);
  const addProduct = (params) => {
    const product = mycart.findIndex((item) => item.id === params.id);
    if (product !== -1) {
      mycart[product].quantity++;
      updatecart({ params, mycart });
    } else {
      addTocart(params);
    }
  };
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#301934",
    },
  });
  return (
    <div className="productInfo">
      {props.gallery ? (
        <Fragment>
          <div className="productInfoContainer">
            <span>{props.type}</span>
            <h1>{props.name}</h1>
            <StyledRating
              defaultValue={props.stars}
              precision={0.5}
              readOnly
              size="small"
            />
            <span>
              {props.perFriendlt ? "Pet Friendly" : "Not-Pet Friednly"}
            </span>
          </div>
          <div>
            <p>
              {props.desc} Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Error sed magni pariatur perferendis recusandae autem sint,
              fuga aliquam voluptates nihil.
            </p>
          </div>

          <div className="productPayment">
            <button className="productWishlist">
              <FavoriteBorderIcon />
            </button>
            <button
              onClick={() => {
                setBtn(<CircularProgress size="16px" color="inherit" />);
                setTimeout(() => {
                  addProduct({
                    id: props.id,
                    name: props.name,
                    price: props.price,
                    discount: props?.discount,
                    img: props.image,
                    desc: props.desc,
                    quantity: 1,
                  });
                  setBtn("Add To Cart");
                }, 500);
              }}
              className="productBuy"
            >
              {btn}
            </button>
            <div className="productDiscount">
              <span className={props.discount && "discounted"}>
                ${props.price}
              </span>
              {props.discount && <span>${props.discount}</span>}
            </div>
          </div>
        </Fragment>
      ) : (
        Array(6)
          .fill(true)
          .map((_, i) => <Skeleton width="100%" height="20px" key={i} />)
      )}
    </div>
  );
}
