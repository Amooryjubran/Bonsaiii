import { Fragment } from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import Skeleton from "@/utils/Skeleton";

export default function ProductGallery({ props }) {
  const images = props?.gallery?.map((number) => ({
    src: number,
  }));
  return (
    <Fragment>
      {props.gallery ? (
        <Carousel
          images={images}
          isAutoPlaying={true}
          hasMediaButton={false}
          hasSizeButton={false}
          hasIndexBoard={false}
          className="carousel"
        />
      ) : (
        <Skeleton width="50%" height="450px" />
      )}
    </Fragment>
  );
}
