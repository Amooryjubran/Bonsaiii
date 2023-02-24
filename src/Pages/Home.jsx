import { Fragment } from "react";
import Slider from "@/components/Slider/Slider";
import { useQuery } from "../hooks/useQuery";
import AppsIcon from "@mui/icons-material/Apps";
import { Link } from "react-router-dom";
import "./home.css";
import Skeleton from "../utils/Skeleton";

export default function Home() {
  const { data } = useQuery("plants");
  return (
    <Fragment>
      <div className="SliderContainer">
        <div className="sliderCategories">
          {!!data.length ? (
            <>
              <Link to="/shop">
                <AppsIcon />
                <span>Categories</span>
              </Link>
            </>
          ) : (
            <div className="skeletonContainer">
              <Skeleton height="150px" width="20px" />
            </div>
          )}
        </div>
        <Slider props={data} />
      </div>
    </Fragment>
  );
}
