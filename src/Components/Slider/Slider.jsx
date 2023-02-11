import Slider from "react-slick";
import Skeleton from "../../utils/Skeleton";
import ImageCard from "../ui/ImageCard";
import "./style.css";
export default function Slide({ props }) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
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
