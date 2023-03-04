import PetsIcon from "@mui/icons-material/Pets";
import { Link } from "react-router-dom";
import "./style.css";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";

export default function ProductCard(props) {
  const { name, image, price, stars, petFriendly, discount } = props.props;
  const path = props.search
    ? `/shop/${name.split(" ").join("+")}`
    : name.split(" ").join("+");
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#301934",
    },
  });
  return (
    <Link to={path} onClick={() => props.search && props.setSearch(false)}>
      <div className="productCard">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="productImage"
        >
          {petFriendly && (
            <div>
              <PetsIcon />
            </div>
          )}
        </div>
        <span>{name}</span>
        <StyledRating
          defaultValue={stars}
          precision={0.5}
          readOnly
          size="small"
        />

        <div className="productDiscount">
          <span className={discount && "discounted"}>${price}</span>
          {discount && <span>${discount}</span>}
        </div>
      </div>
    </Link>
  );
}
