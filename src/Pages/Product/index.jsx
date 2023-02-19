import { useRef } from "react";

import { useParams } from "react-router-dom";
import HeroBanner from "@/Components/ui/HeroBanner";
import { filterArray } from "@/utils/filterArray";
import { useQuery } from "@/hooks/useQuery";
import Breadcrumbs from "@/utils/Breadcrumbs";
import "./style.css";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
export default function Product() {
  const { product } = useParams();
  const { data } = useQuery("plants");
  const path = product.replace(/\+/g, " ");
  let plant = {};

  if (!!data.length) filterArray(data, path, plant);
  const images = plant?.gallery?.map((number) => ({
    src: number,
  }));
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#301934",
    },
  });
  console.log(plant);
  return (
    <div className="productPage">
      <HeroBanner props={plant} breadCrumbs={false} />
      <div className="productPageContainer">
        <Breadcrumbs />
        <div className="productPageContent">
          {images && (
            <Carousel
              images={images}
              isAutoPlaying={true}
              hasMediaButton={false}
              hasSizeButton={false}
              hasIndexBoard={false}
              className="carousel"
            />
          )}
          <div className="productInfo">
            <div className="productInfoContainer">
              <span>{plant.type}</span>
              <h1>{plant.name}</h1>
              <StyledRating
                defaultValue={plant.stars}
                precision={0.5}
                readOnly
                size="small"
              />
              <span>
                {plant.perFriendlt ? "Pet Friendly" : "Not-Pet Friednly"}
              </span>
            </div>
            <div>
              <p>
                {plant.desc} Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Error sed magni pariatur perferendis recusandae autem
                sint, fuga aliquam voluptates nihil.
              </p>
            </div>

            <div className="productPayment">
              <button className="productWishlist">
                <FavoriteBorderIcon />
              </button>
              <button className="productBuy">Buy Now</button>
              <div className="productDiscount">
                <span className={plant.discount && "discounted"}>
                  ${plant.price}
                </span>
                {plant.discount && <span>${plant.discount}</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
