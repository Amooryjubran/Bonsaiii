import { Fragment } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import Skeleton from "@/utils/Skeleton";

export default function ProductInfo({ props }) {
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
            <button className="productBuy">Buy Now</button>
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
