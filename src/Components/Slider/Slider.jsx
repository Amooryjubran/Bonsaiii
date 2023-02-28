import Slider from "react-slick";
import Skeleton from "../../utils/Skeleton";
import ImageCard from "../ui/ImageCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./style.css";
export default function Slide({ props, small }) {
  const matches = useMediaQuery("(max-width:1028px)");
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: small ? 1.5 : !matches ? 3.5 : 1.5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        {!!props.length
          ? props.map((item) => <ImageCard props={item} key={item.id} />)
          : Array(6)
              .fill(true)
              .map((_, i) => <Skeleton width="320px" height="450px" key={i} />)}
      </Slider>
    </div>
  );
}
