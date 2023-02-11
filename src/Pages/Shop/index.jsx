import { useQuery } from "@/hooks/useQuery";
import { Link } from "react-router-dom";
import "./style.css";
import HeroBanner from "@/Components/ui/HeroBanner";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Skeleton from "@/utils/Skeleton";
import ProductCard from "@/Components/ui/ProductCard";

export default function Shop() {
  const { data } = useQuery("shop_hero_banner");
  const { data: plants } = useQuery("plants");
  console.log(plants);
  return (
    <div className="productContainer">
      <HeroBanner props={data[0]} />
      <h1>Plants</h1>
      <div className="productWrapper">
        <div className="productSortContainer">
          {!!plants.length ? (
            <>
              <span>35 products</span>
              <div>
                <button className="productSortBtn">
                  <span>Sort BY prodcuts</span>
                  <KeyboardArrowDownIcon />
                </button>
              </div>
            </>
          ) : (
            <Skeleton width="250px" />
          )}
        </div>

        <div className="productSection">
          <div className="productFilter">
            <ul>
              <li>omar</li>
              <li>omar</li>
              <li>omar</li>
              <li>omar</li>
              <li>omar</li>
            </ul>
          </div>
          <div className="productList">
            {!!plants.length
              ? plants.map((item) => <ProductCard props={item} key={item.id} />)
              : Array(6)
                  .fill(true)
                  .map((_, i) => (
                    <Skeleton width="auto" height="450px" key={i} />
                  ))}
          </div>
        </div>
      </div>
    </div>
  );
}
